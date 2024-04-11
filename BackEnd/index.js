const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const { dataBasePharmacy } = require("./services/Suscription/conexionDB");
const { savePharmacy } = require("./services/Suscription/Notify/savePharmacy");
const {
  notifyUsers,
  diferenciaDataBaseMedicines,
} = require("./services/Suscription/Notify/sendNotify");

const { getSearch } = require("./services/Search/getSearch");
const {
  activeCode,
  postUpdate,
  activeCodeUpdate,
  deleteSuscription,
  getSuscribeUsers,
} = require("./services/Suscription/users");
const {
  sendVerificationEmail,
  sendVerificationEmailUpdate,
} = require("./services/Suscription/verify");
const { generaDatos } = require("./services/Data/generaDatos");

const app = express();
app.set("port", process.env.PORT || 5001);
app.set("data", generaDatos());
app.use(morgan("dev"));
app.listen(app.get("port"), () => {
  console.log(`App activa en https://localhost:${app.get("port")}`);
});


app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/getPharmacy", (rq, rp) => {
  const farmacias = app.get("data").farmacias;
  rp.send({ farmacias: farmacias });
});

app.get("/getMedicines", (rq, rp) => {
  const medicamentos = app.get("data").medicamentos;
  rp.send({ medicamentos: medicamentos });
});

app.get("/getPharmacyForMedicine/:id", (rq, rp) => {
  const idMedicamento = Number(rq.params.id);
  const farmacias = app.get("data").farmacias;
  const medicamentoFarmacias = farmacias.filter((f) =>
    f.idMedicamentos.includes(idMedicamento)
  );
  rp.send({ idMedicamentoFarmacias: medicamentoFarmacias });
});

app.get("/getSearch", async (rq, rp) => {
  const search = rq.query.search;
  await getSearch(search, rp);
});

app.use(express.json());

app.post("/verifySuscription", (rq, rp) => {
  sendVerificationEmail(rq.body, rp);
});

app.post("/verifySuscriptionUpdate", (rq, rp) => {
  sendVerificationEmailUpdate(rq.body, rp);
});

app.post("/activeCode", (rq, rp) => {
  activeCode(rq.body, rp);
});

app.post("/activeCodeUpdate", (rq, rp) => {
  activeCodeUpdate(rq.body, rp);
});

app.post("/postUpdate", (rq, rp) => {
  postUpdate(rq.body, rp);
});

app.delete("/deleteSuscription/:id", (rq, rp) => {
  deleteSuscription(rq.params.id, rp);
});

app.get("/getSuscribeUsers", (rq, rp) => {
  getSuscribeUsers(rp);
});

// setInterval(async () => {
//   app.set("data", generaDatos()); //Mientras no esten los datos reales para crear nuevos datos y comprobar los cambios
//   const oldPharmacy = await dataBasePharmacy.find({});
//   if (oldPharmacy.length === 0) {
//     await savePharmacy();
//   } else {
//     await axios
//       .get("https://localhost:5001/getPharmacy")
//       .then(async (r) => {
//         const newDataBasePharmacy = r.data.farmacias.map((f) => {
//           return {
//             id: f.id,
//             idMedicamentos: f.idMedicamentos,
//           };
//         });

//         const newEntrance = diferenciaDataBaseMedicines(
//           oldPharmacy[0].pharmacy,
//           newDataBasePharmacy
//         );

//         if (newEntrance.length > 0) {
//           await dataBasePharmacy
//             .updateOne({
//               pharmacy: newDataBasePharmacy,
//             })
//             .then()
//             .catch((e) => console.log("Algo salió mal"));

//           await notifyUsers(newEntrance, r.data.farmacias);
//         }
//       })
//       .catch((e) => console.log("Algo salió mal", e));
//   }
// }, 1000 * 60 * 60);
