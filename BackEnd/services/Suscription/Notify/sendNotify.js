const { dataBase } = require("../conexionDB");
const nodemailer = require("nodemailer");
const axios = require("axios");

const returnName = (array, id) => {
  return array.filter((f) => f.id === id)[0].nombre;
};

const notifyUsers = async (newEntrance, farmacias) => {
  let notify = "";
  const medicines = await axios
    .get("https://localhost:5001/getMedicines")
    .then((r) => r.data.medicamentos)
    .catch((e) => console.log("Algo Salió mal", e));

  const users = await dataBase.find({});
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      let actualUser = users[i];

      for (let j = 0; j < newEntrance.length; j++) {
        const medFarm = newEntrance[j];

        if (actualUser.pharmacy.includes(medFarm.id)) {
          for (let k = 0; k < actualUser.medicine.length; k++) {
            if (medFarm.idMedicamentos.includes(actualUser.medicine[k])) {
              notify += `<p><b>${await returnName(
                medicines,
                actualUser.medicine[k]
              )}</b> en la farmacia <b>${await returnName(
                farmacias,
                medFarm.id
              )}</b></p>`;
            }
          }
        }
      }
      if (notify.length > 0) {
        sendNotifys(notify, actualUser.email);
        notify = "";
      }
    }
  }
};

const sendNotifys = async (notify, email) => {
  const userId = await dataBase.find({ email: email });
  const id = userId.length > 0 ? userId[0]._id : "";

  const sendMail = "xetid28@gmail.com";
  const passwMail = "cnss gfqb pawb weht";

  const trasporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sendMail,
      pass: passwMail,
    },
  });

  const mailOptions = {
    from: sendMail,
    to: email,
    subject:
      "Notificación de la Plataforma Nacional de Consulta de Medicamentos",
    html: `<p>Hola,</p> <p>Ya tienes disponible los siguientes medicamentos:</p>
      ${notify}
        <p>Saludos,</p><p>Plataforma Nacional de Consulta de Medicamentos </p>
        <p>Para dejar de recibir notificaciones <a href="https://medicationconsultation.t3sd.nat.cu/unsubscribe/${id}">haga click aqui</a></p>`,
  };

  await trasporter
    .sendMail(mailOptions)
    .catch((e) => console.log("Algo salió mal"));
};

const diferenciaDataBaseMedicines = (arr1, arr2) => {
  let obj = {};
  for (let o of arr1) {
    if (typeof o === "object" && o !== null) {
      if (typeof o.id === "number" && Array.isArray(o.idMedicamentos)) {
        let clave = o.id + "-" + o.idMedicamentos.join(",");
        obj[clave] = true;
      } else {
        return "Los objetos deben tener un id que es un número y un idMedicamentos que es un array de números";
      }
    } else {
      return "Los elementos de los arrays deben ser objetos";
    }
  }

  let dif = [];
  for (let o of arr2) {
    if (typeof o === "object" && o !== null) {
      if (typeof o.id === "number" && Array.isArray(o.idMedicamentos)) {
        let clave = o.id + "-" + o.idMedicamentos.join(",");
        if (!obj[clave]) {
          dif.push(o);
        }
      } else {
        return "Los objetos deben tener un id que es un número y un idMedicamentos que es un array de números";
      }
    } else {
      return "Los elementos de los arrays deben ser objetos";
    }
  }

  return dif;
};

module.exports = { diferenciaDataBaseMedicines, notifyUsers };
