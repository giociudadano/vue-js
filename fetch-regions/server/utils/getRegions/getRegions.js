// Name: utils/getRegions/getRegions.js
// Author: Gio Ciudadano
// Description:
//   Returns a list of regions given the region type to be searched and region parameters.

'use strict';

const RegionModel = require('../../models').RegionModel;

module.exports = ({ regionType, query }) => {
  if (regionType == 'province') {
    // If the region type being queried is the list of provinces, finds all regions that are a province,
    // returns their name and sorts them alphabetically.
    return new Promise(resolve => {
      const response = RegionModel.find(
        {
          // If the provinceCode field does not exist, then the region is a province.
          provinceCode: { $exists: false }
        },
        { name: 1, _id: 0 }
      )
        .sort({ name: 1 })
        .distinct('name')
        .exec();
      resolve(response);
    });
  } else if (regionType == 'municipality') {
    // If the region type being queried is a list of municipalities, finds all municipalities with the given province code,
    // returns their name, and sorts them alphabetically.
    return new Promise(async (resolve, reject) => {
      // Queries the province code for the municipalities query using the passed province parameter.
      // Uses regular expression to parse the name as a case-independent substring.
      // Returns an error if the query returns no or multiple provinces.
      const provinceCode = await RegionModel.find(
        {
          name: RegExp(query.province, 'i'),
          provinceCode: { $exists: false }
        },
        { code: 1, _id: 0 }
      )
        .distinct('code')
        .exec();

      if (provinceCode.length == 0) {
        reject('QueryError: No province found from province key');
      } else if (provinceCode.length > 1) {
        reject('QueryError: Multiple provinces found from province key');
      }

      const response = await RegionModel.find(
        {
          // If the provinceCode exists and the municipality code does not exist, then the region is a municipality.
          provinceCode: provinceCode[0],
          municipalityCode: { $exists: false }
        },
        { code: 1, _id: 0 }
      )
        .sort({ name: 1 })
        .distinct('name')
        .exec();
      resolve(response);
    });
  } else if (regionType == 'barangay') {
    // If the region type being queried is a list of barangays, finds all municipalities with the given province and municipality codes,
    // returns their name, and sorts them alphabetically.
    return new Promise(async (resolve, reject) => {
      // Queries the province code for the barangay query using the passed province parameter.
      // Uses regular expression to parse the name as a case-independent substring.
      // Returns an error if the query returns no or multiple provinces.
      const provinceCode = await RegionModel.find(
        {
          name: RegExp(query.province, 'i'),
          provinceCode: { $exists: false }
        },
        { code: 1, _id: 0 }
      )
        .distinct('code')
        .exec();

      if (provinceCode.length == 0) {
        reject('QueryError: No province found from province key');
      } else if (provinceCode.length > 1) {
        reject('QueryError: Multiple provinces found from province key');
      }

      // Queries the municipality code for the barangay query using the passed municipality parameter.
      // Uses regular expression to parse the name as a case-independent substring.
      // Returns an error if the query returns no or multiple municipalities.
      const municipalityCode = await RegionModel.find(
        {
          // If the provinceCode exists and the municipality code does not exist, then the region is a municipality.
          name: RegExp(query.municipality, 'i'),
          provinceCode: provinceCode[0],
          municipalityCode: { $exists: false }
        },
        { code: 1, _id: 0 }
      )
        .distinct('code')
        .exec();

      if (municipalityCode.length == 0) {
        reject('QueryError: No municipality found from municipality key');
      } else if (municipalityCode.length > 1) {
        reject(
          'QueryError: Multiple municipalities found from municipality key'
        );
      }
      const response = await RegionModel.find(
        {
          // If the provinceCode and either the municipalityCode or cityCode exists, then the region is a barangay.
          provinceCode: provinceCode[0],
          $or: [
            { cityCode: municipalityCode[0] },
            { municipalityCode: municipalityCode[0] }
          ]
        },
        { code: 1, _id: 0 }
      )
        .sort({ name: 1 })
        .distinct('name')
        .exec();
      resolve(response);
    });
  } else {
    throw Error('Unable to fetch region type');
  }
};
