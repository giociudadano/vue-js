'use strict';

module.exports = (mongoose, Schema) => {
  const RegionSchema = new Schema({
    name: { type: String, required: true }
  });

  return mongoose.model('Regions', RegionSchema);
};
