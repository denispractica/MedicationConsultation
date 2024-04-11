const { dataBase, dataBaseCode } = require("./conexionDB");
const axios = require("axios");

const activeCode = async (user, rp) => {
  const oldCode = await dataBaseCode.find({ codeValidate: user.code });

  if (oldCode.length > 0 && oldCode[0].email === user.email) {
    const newDataBase = new dataBase({
      email: user.email,
      pharmacy: user.pharmacy,
      medicine: user.medicine,
    });
    await newDataBase
      .save()
      .then(async (r) => {
        rp.send({
          response: "Te has suscrito correctamente 👍",
          Error: false,
        });

        await dataBaseCode
          .deleteOne({ codeValidate: user.code })
          .catch((e) => console.log("Ha ocurrido un error"));
      })
      .catch((e) => rp.send({ response: "Ocurrió un error", Error: true }));
  } else {
    rp.send({ response: "El código es incorrecto", Error: false });
  }
};

const activeCodeUpdate = async (user, rp) => {
  const oldCode = await dataBaseCode.find({ codeValidate: user.code });

  if (oldCode.length > 0 && oldCode[0].email === user.email) {
    await dataBaseCode
      .deleteOne({ codeValidate: user.code })
      .catch((e) => console.log("Ha ocurrido un error"));

    const r = await check(user);
    rp.send({
      response: "Puedes modificar tu suscripción",
      medicine: r.m,
      pharmacy: r.p,
      Error: false,
    });
  } else {
    rp.send({ response: "El código es incorrecto", Error: false });
  }
};

const check = async (user) => {
  const oldUser = await dataBase.find({ email: user.email });

  const pharmacy = await axios
    .get("http://localhost:5001/getPharmacy")
    .then((r) => r.data.farmacias)
    .catch((e) => console.log("Algo salió mal", e));
  const medicine = await axios
    .get("http://localhost:5001/getMedicines")
    .then((r) => r.data.medicamentos)
    .catch((e) => console.log("Algo salió mal", e));
  let actualPharmacy = [];
  let actualMedicine = [];

  for (let i = 0; i < pharmacy.length; i++) {
    if (oldUser[0].pharmacy.includes(pharmacy[i].id)) {
      actualPharmacy.push(pharmacy[i]);
    }
  }
  for (let i = 0; i < medicine.length; i++) {
    if (oldUser[0].medicine.includes(medicine[i].id)) {
      actualMedicine.push(medicine[i]);
    }
  }
  return { p: actualPharmacy, m: actualMedicine };
};

const postUpdate = async (user, rp) => {
  const oldUser = await dataBase.find({ email: user.email });

  if (oldUser.length > 0) {
    await oldUser[0]
      .updateOne({
        pharmacy: user.pharmacy,
        medicine: user.medicine,
      })
      .then((r) => {
        rp.send({
          response: "Has modificado tu suscripción👍",
          Error: false,
        });
      })
      .catch((e) => console.log("Algo salió mal", e));
  } else {
    rp.send({ response: "No se encontró el usuario", Error: false });
  }
};

const deleteSuscription = async (id, rp) => {
  const oldUser = await dataBase.find({ _id: id });

  if (oldUser.length > 0) {
    await dataBase
      .deleteOne({ _id: id })
      .then((r) =>
        rp.send({
          response: "Se ha eliminado la suscripción correctamente",
        })
      )
      .catch((e) => rp.send({ response: "Ha ocurrido un error" }));
  } else {
    rp.send({
      response: "Ese usuario no existe en la base de datos",
    });
  }
};
const getSuscribeUsers = async (rp) => {
  await dataBase
    .find({})
    .then((r) => rp.send({ Users: r, Error: false }))
    .catch((e) => rp.send({ response: "Algo salió mal", Error: true }));
};

module.exports = {
  getSuscribeUsers,
  deleteSuscription,
  activeCode,
  activeCodeUpdate,
  postUpdate,
};
