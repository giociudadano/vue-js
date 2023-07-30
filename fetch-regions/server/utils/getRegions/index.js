// Name: utils/getRegions/index.js
// Author: Gio Ciudadano
// Description:
//   Returns a list of regions given optional province and municipality parameters.

'use strict';

const getRegions = require('./getRegions');

module.exports = async ({ query }) => {
  if (query['province']) {
    if (query['municipality']) {
      // If both province and municipality are given, returns the barangay of the passed province and municipality.
      // NOTE: Throws an error if the province or municipality cannot be found.
      return await getRegions({
        regionType: 'barangay',
        query: {
          province: query['province'],
          municipality: query['municipality']
        }
      });
    } else {
      // If province is given but not municipality, returns the municipalities of the passed province.
      // NOTE: Throws an error if the province cannot be found.
      return await getRegions({
        regionType: 'municipality',
        query: { province: query['province'] }
      });
    }
  } else {
    if (query['municipality']) {
      throw Error(
        'KeyRequiredError: No province key found when attempting to query for list of barangays'
      );
    } else {
      return await getRegions({
        regionType: 'province',
        searchText: null
      });
    }
  }
};
