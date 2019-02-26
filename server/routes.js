/**
 * Main application routes
 */

'use strict';

const apiSampleRouter = require('./api/sample');

function addRoutes(app) {
    // Insert routes below
    app.use('/api/sample', apiSampleRouter);
    // app.use('/auth', require('./auth').default);
}

module.exports = {
    addRoutes
};