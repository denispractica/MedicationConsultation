const data = require("./ubicaciones");
const tipos = ["Principal", "Hospitalaria", "Comunitaria"];
const completeData = data.data.map((m) => m);

const obtenerArrayAleatorio = (array, mitad) => {
  const copiaArray = [...array];
  let arrayAleatorio = [];
  let vecesRandom = (Math.random() * copiaArray.length) / mitad;
  while (vecesRandom > 0) {
    const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
    const elementoAleatorio = copiaArray.splice(indiceAleatorio, 1)[0];
    arrayAleatorio.push(elementoAleatorio);
    vecesRandom--;
  }

  return arrayAleatorio;
};

const generaFarmacias = (arrayIdMedicamentos) => {
  const dataRandom = obtenerArrayAleatorio(completeData, 1);
  const farmacias = Array.from({ length: dataRandom.length }, (_, id) => ({
    id: id + 100,
    nombre: `Farmacia ${id + 1}`,
    provincia: dataRandom[id].provincia, //`${provincias[Math.floor(Math.random() * provincias.length)]}`,
    municipio: dataRandom[id].municipio, //`${municipios[Math.floor(Math.random() * municipios.length)]}`,
    telefono: Math.floor(Math.random() * 1000000000),
    direccion: `Calle ${Math.floor(Math.random() * 100)} e/${Math.floor(
      Math.random() * 100
    )} y ${Math.floor(Math.random() * 100)}`,
    tipo: tipos[Math.floor(Math.random() * tipos.length)],
    idMedicamentos:
      Math.random() > 0.5 ? obtenerArrayAleatorio(arrayIdMedicamentos, 2) : [],
    latitud: 1*dataRandom[id].coordenadas[0], //Math.random() * (23.27 - 19.82) + 19.82,
    longitud: 1*dataRandom[id].coordenadas[1], //Math.random() * (-74.5 - -84.95) - 84.95,
  }));
  return farmacias;
};

const tiposDeVenta = ["Venta libre", "Con receta", "Por tarjetón"];
const gruposFarmacologicos = [
  "Analgésicos",
  "Antibióticos",
  "Antidepresivos",
  "Antihistamínicos",
  "Antiinflamatorios",
  "Antivirales",
  "Hipoglucemiantes",
];
const formasDeDosificacion = [
  "Tableta",
  "Cápsula",
  "Inyección",
  "Crema",
  "Jarabe",
  "Supositorio",
  "Inhalador",
  "Gotas",
];
const medicamentos = [
  "Acetaminofén",
  "Ibuprofeno",
  "Aspirina",
  "Amoxicilina",
  "Azitromicina",
  "Cefixima",
  "Metformina",
  "Atenolol",
  "Lisinopril",
  "Simvastatina",
  "Omeprazol",
  "Losartán",
  "Salbutamol",
  "Prednisona",
  "Paracetamol",
  "Diclofenaco",
  "Loratadina",
  "Amiodarona",
  "Digoxina",
  "Warfarina",
];

const generaMedicamentos = Array.from(
  { length: medicamentos.length },
  (_, id) => ({
    id: id + 1,
    nombre: medicamentos[id],
    descripcion: `Este es el medicamento ${id + 1}`,
    precioDeVenta: Number((Math.random() * 100).toFixed(2)),
    tipoDeVenta: tiposDeVenta[Math.floor(Math.random() * tiposDeVenta.length)],
    grupoFarmacologico:
      gruposFarmacologicos[
        Math.floor(Math.random() * gruposFarmacologicos.length)
      ],
    formaDeDosificacion:
      formasDeDosificacion[
        Math.floor(Math.random() * formasDeDosificacion.length)
      ],
  })
);

const generaDatos = () => {
  const medicamentos = generaMedicamentos;
  const arrayIdMedicamentos = medicamentos.map((m) => m.id);
  const farmacias = generaFarmacias(arrayIdMedicamentos);
  return { medicamentos: medicamentos, farmacias: farmacias };
};

module.exports = { generaDatos };
