const { spawn, spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const API_PORT = Number(process.env.API_PORT) || 4000;
const WEB_PORT = Number(process.env.PORT) || 3000;

const apiDist = path.join(__dirname, 'artifacts', 'api-server', 'dist', 'index.mjs');

function ensureApiBuilt() {
  if (fs.existsSync(apiDist)) {
    return true;
  }
  console.log('Backend build not found. Building API server...');
  const result = spawnSync('node', ['build.mjs'], {
    cwd: path.join(__dirname, 'artifacts', 'api-server'),
    stdio: 'inherit',
  });
  return result.status === 0;
}

function start(name, command, args, env) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...env },
  });

  child.on('exit', (code) => {
    console.log(`[${name}] exited with code ${code ?? 0}. Stopping all servers...`);
    process.exit(code ?? 0);
  });

  return child;
}

if (!ensureApiBuilt()) {
  console.error('Failed to build the API server.');
  process.exit(1);
}

console.log('\nStarting Anglo School...\n');

start(
  'backend',
  'node',
  ['artifacts/api-server/dist/index.mjs'],
  { PORT: String(API_PORT), NODE_ENV: 'development' },
);

start(
  'frontend',
  'node',
  ['server.js'],
  { PORT: String(WEB_PORT), API_PORT: String(API_PORT) },
);

console.log(`\n  Website : http://localhost:${WEB_PORT}`);
console.log(`  Backend : http://localhost:${API_PORT}/api`);
console.log('\nPress Ctrl+C to stop.\n');
