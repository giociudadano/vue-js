'use strict';
const GetRegionsController = require('../../controllers/GetRegionsController');

module.exports = router => {
  router.get('/getRegions', GetRegionsController.getRegions);
};
