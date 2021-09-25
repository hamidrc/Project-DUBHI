const joi = require("joi");

module.exports.validatePost = ({ body }) => {
  const schema = joi.object({
    schoolname: joi.string().required().label("SchoolName"),
    about: joi.string().required().label("About"),
    location: joi.string().required().label("Location"),
    admission: joi.string().required().label("Admission"),
    imageFileSet: joi.string().required().label("imageFileSet"),
    publishedAt: joi.date().default(Date.now()),
  });

  const response = schema.validate(body, { abortEarly: false });
  return response;
};
