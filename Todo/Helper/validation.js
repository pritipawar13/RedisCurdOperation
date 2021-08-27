const express = require('express');
const Joi = require('joi')

const RegisterValidation = Joi.object({
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    Email: Joi.string().email()
      .lowercase()
      .required(),
    Password: Joi.string().required(),
    Usertype: Joi.string().required(),
  });
  
  module.exports = {
    RegisterValidation
  };