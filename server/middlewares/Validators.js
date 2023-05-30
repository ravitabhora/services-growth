const createHttpError = require('http-errors')
const Validators = require('../validationSchemas');
const errorHandler = require('./errorHandler')

const validateInput = function (validator) {
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`)

  return async function (req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(req.query)
      req.body = validated
      next()
    } catch (err) {
        errorHandler(err,req,res)
    }
  }
};

module.exports = validateInput;