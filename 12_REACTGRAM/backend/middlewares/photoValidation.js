const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O Titulo é obrigatorio.")
      .isString()
      .withMessage("O título é Obrigatorio")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no minimo 3 caracteres"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagen é obrigatoria.");
      }
      return true;
    }),
  ];
};

module.exports = {
  photoInsertValidation,
};
