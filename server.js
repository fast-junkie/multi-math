const debug = require('debug')('multi-math');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const appName = 'multi-math';
const port = process.env.PORT || 2112;

debug('Booting... %o', appName);
app.use(logger('dev'));

// Base...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Export
if (require.main === module) {
  app.listen(port, () => {
    const hr = '\n--- - - - ---- - - - ---\n';
    console.debug('%s--expressApp: %s\n--port: %d%s', hr, appName, port, hr);
  });
} else {
  module.exports = app;
}
