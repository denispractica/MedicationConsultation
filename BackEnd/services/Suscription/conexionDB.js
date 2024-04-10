const mongoose = require("mongoose");

const url = `mongodb://localhost:27017/dataBase`;
mongoose
  .connect(process.env.MONGODB_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

const { Schema } = mongoose;

const dataBaseStructure = new Schema({
  email: String,
  pharmacy: [],
  medicine: [],
});

const codeValidate = new Schema({
  codeValidate: String,
  email: String,
});

const dataPharmacy = new Schema({
  pharmacy: [],
});
const dataBase = mongoose.model("datas", dataBaseStructure);
const dataBaseCode = mongoose.model("code", codeValidate);
const dataBasePharmacy = mongoose.model("pharmacy", dataPharmacy);
module.exports = { dataBase, dataBaseCode, dataBasePharmacy };
