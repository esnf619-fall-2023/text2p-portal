'use strict';

/**
 * predict router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::predict.predict');
