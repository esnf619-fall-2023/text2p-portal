'use strict';

/**
 * predict controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::predict.predict');
