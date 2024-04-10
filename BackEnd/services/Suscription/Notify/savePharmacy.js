const { dataBasePharmacy } = require("../conexionDB");
const axios = require("axios");

const savePharmacy = async () => {
  await axios
    .get("http://localhost:5001/getPharmacy")
    .then(async (r) => {
      const pharmacy = r.data.farmacias.map((f) => {
        return { id: f.id, idMedicamentos: f.idMedicamentos };
      });

      const newPharmacy = dataBasePharmacy({
        pharmacy: pharmacy,
      });

      await newPharmacy.save().catch((e) => console.log("Algo salió mal"));
    })
    .catch((e) => console.log("Algo salió mal"));
};

module.exports = { savePharmacy };
