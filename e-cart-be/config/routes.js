/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /api/v1/signup': {action: 'signup'},
  'POST /api/v1/addproducts':{action: 'addproducts'},
  'GET /api/v1/getdata':{action:'getdata'}
};
