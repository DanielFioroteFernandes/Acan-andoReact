const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatorio")
      .isLength({ min: 3 })
      .withMessage("O Nome precisa ter no minimo 3 Caracteres"),
    body("email")
      .isString()
      .withMessage("E-mail é obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail valido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatoria")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no minimo 5 Caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatoria")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("E-mail é obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail valido"),
    body("password").isString().withMessage("A senha é obrigatoria"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa de ter pelo menos 3 caracteres. "),
    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("Senha deve conter pelo menos 5 caracteres. "),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
