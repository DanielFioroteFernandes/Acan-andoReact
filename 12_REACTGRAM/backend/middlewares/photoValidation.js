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

const photoUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("Título é obrigatorio! ")
      .isLength({ min: 3 })
      .withMessage("O Título precisa ter no minimo 3 caracteres"),
  ];
};

const commentValidation = () => {
  return [body("comment").isString().withMessage("O comentario é obrigario")];
};

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
};
