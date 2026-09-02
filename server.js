const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

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
