const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { spawn, spawnSync } = require('child_process');

const app = express();

const DIST_DIR = path.join(
  __dirname,
  'artifacts',
  'arya-school',
  'dist',
  'public',
);

const indexFile = path.join(DIST_DIR, 'index.html');
const PORT = Number(process.env.PORT) || 3000;
const API_PORT = Number(process.env.API_PORT) || 4000;
const API_TARGET = `http://127.0.0.1:${API_PORT}`;

app.use(express.static(DIST_DIR));

// Lightweight health check for cron jobs (keeps Render free tier alive)
app.get('/health', (_req, res) => {
  res.status(200).send('ok');
});

// Proxy API requests to the backend server so the frontend and API share one origin.
app.use('/api', (req, res) => {
  const proxyReq = http.request(
    API_TARGET + req.originalUrl,
    { method: req.method, headers: req.headers },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    },
  );

  proxyReq.on('error', (err) => {
    res
      .status(502)
      .json({ error: 'API server is not running. Start it first.', detail: err.message });
  });

  req.pipe(proxyReq);
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }

  res
    .status(500)
    .send(
      'Frontend build not found. Run `pnpm --filter @workspace/arya-school run build` first.',
    );
});

app.listen(PORT, () => {
  console.log(`Anglo School website on http://localhost:${PORT}`);
  console.log(`API backend forwarded to http://localhost:${API_PORT}`);
});

// Start the API backend as a child process so the proxy works in a single Render service.
const apiDist = path.join(__dirname, 'artifacts', 'api-server', 'dist', 'index.mjs');
const apiServerDir = path.join(__dirname, 'artifacts', 'api-server');

if (!fs.existsSync(apiDist)) {
  // Build the API backend on the fly if it was not built during deploy.
  console.log('API backend build not found. Building it now...');
  const build = spawnSync('node', ['build.mjs'], { cwd: apiServerDir, stdio: 'inherit' });
  if (build.status !== 0) {
    console.error('Failed to build API backend. /api routes will return 502.');
  }
}

if (fs.existsSync(apiDist)) {
  console.log('Starting API backend on port', API_PORT, '...');
  const api = spawn('node', [apiDist], {
    env: {
      ...process.env,
      PORT: String(API_PORT),
      NODE_ENV: process.env.NODE_ENV || 'production',
    },
    stdio: 'inherit',
  });
  api.on('exit', (code) => {
    console.log(`API backend exited with code ${code ?? 0}`);
  });
} else {
  console.log('API backend build not found at', apiDist, '- /api routes will return 502.');
}
