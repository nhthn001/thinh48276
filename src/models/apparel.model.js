const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const apparelSchema = mongoose.Schema(
  {
    sizecode:{
      type: Number,
      required: true,
      trim: true,
    },
    sortorder:{
      type: Number,
      required: true,
      trim: true,
    }

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
apparelSchema.plugin(toJSON);
apparelSchema.plugin(paginate);

/**
 * @typedef Apparel
 */
const Apparel = mongoose.model('Apparel', apparelSchema);

module.exports = Apparel;
