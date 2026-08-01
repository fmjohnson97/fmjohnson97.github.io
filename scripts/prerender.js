/* eslint-disable no-console */
// Prerenders each route in the built SPA to static HTML using headless Chrome.
// Replaces react-snap, which hard-pins an unmaintained Puppeteer/Chromium build
// that no longer launches reliably in CI containers or on Apple Silicon.
const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');

const buildDir = path.join(__dirname, '..', 'build');
const port = 45679;

const routes = [
  '/',
  '/publications',
  '/presentations',
  '/stats',
  '/contact',
  '/resume',
  '/feudalsteering',
  '/socialbehaviordictionary',
  '/albedoanalysis',
  '/simpleNav',
  '/visualnavigation',
  '/humannavdataset',
];

const routeToFile = (route) => {
  if (route === '/') return path.join(buildDir, 'index.html');
  return path.join(buildDir, route.replace(/^\//, ''), 'index.html');
};

const startServer = () => new Promise((resolve) => {
  const app = express();
  app.use(express.static(buildDir));
  app.get('*', (req, res) => res.sendFile(path.join(buildDir, 'index.html')));
  const server = app.listen(port, () => resolve(server));
});

const main = async () => {
  fs.copyFileSync(path.join(buildDir, 'index.html'), path.join(buildDir, '200.html'));

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    await routes.reduce(async (previous, route) => {
      await previous;
      const url = `http://localhost:${port}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const html = await page.content();
      const outFile = routeToFile(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html);
      console.log(`prerendered ${route} -> ${path.relative(buildDir, outFile)}`);
    }, Promise.resolve());
  } finally {
    await browser.close();
    server.close();
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
