const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const { dataBaseCode, dataBase } = require("./conexionDB");
//Correo y contraseña del remitente
const sendMail = "xetid28@gmail.com";
const passwMail = "cnss gfqb pawb weht";

const trasporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: sendMail,
    pass: passwMail,
  },
});

const sendVerificationEmail = async (userEmail, rp) => {
  const oldUser = await dataBase.find({ email: userEmail.email });

  if (oldUser.length > 0) {
    rp.send({
      response: "Este usuario ya está suscrito",
      Error: false,
    });
  } else {
    sendCode(userEmail.email, rp, false);
  }
};

const sendVerificationEmailUpdate = async (userEmail, rp) => {
  const oldUser = await dataBase.find({ email: userEmail.email });

  if (oldUser.length === 0) {
    rp.send({
      response: "Este usuario no existe todavía",
      Error: false,
    });
  } else {
    
    sendCode(userEmail.email, rp, true);
  }
};

const sendCode = async (email, rp, modify) => {
  const text = modify
    ? "Para modificar tu suscripción utilice este código"
    : "Para confirmar tu suscripción utilice este código";
  let code = uuidv4();
  code = `${code.split("-")[0]}${code.split("-")[1]}`;

  const mailOptions = {
    from: sendMail,
    to: email,
    subject: "Código de Confirmación",
    html: `<p>Hola,</p> <p>${text}:<b>${code}</b></p>
      <p>Saludos,</p><p>Plataforma Nacional de Consulta de Medicamentos </p>`,
  };

  await trasporter
    .sendMail(mailOptions)
    .then(async (r) => {
      const newCode = dataBaseCode({
        codeValidate: code,
        email: email,
      });

      await newCode
        .save()
        .catch((e) => rp.send({ response: "Ocurrió un error", Error: true }));

      setInterval(async () => {
        const codes = await dataBaseCode.find({});
        if (codes.length > 0) {
          await dataBaseCode
            .deleteOne({})
            .catch((e) => console.log("Algo salió mal"));
        }
      }, 1000 * 60 * 60);

      rp.send({
        response: "Se ha enviado un código de verificación a su correo",
        Error: false,
      });
    })
    .catch((e) => {
      rp.send({
        response: "Ocurrió un error, compruebe su conexión",
        Error: true,
      });
    });
};

module.exports = { sendVerificationEmail, sendVerificationEmailUpdate };
