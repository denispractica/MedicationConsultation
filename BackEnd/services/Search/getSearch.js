const axios = require("axios");

const getSearch = async (search, rp) => {
  let searchResponse = [];

  const medicamentos = await axios
    .get("http://localhost:5001/getMedicines")
    .then((r) => r)
    .catch((e) => console.log("Algo salió mal", e));
  const farmacias = await axios
    .get("http://localhost:5001/getPharmacy")
    .then((r) => r)
    .catch((e) => console.log("Algo salió mal", e));

  medicamentos.data.medicamentos.map((m) => {
    if (
      quitarAcentos(m.nombre.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(m.tipoDeVenta.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(m.grupoFarmacologico.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(m.formaDeDosificacion.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase())
    ) {
      searchResponse.push(m);
    }
  });

  farmacias.data.farmacias.map((f) => {
    if (
      quitarAcentos(f.nombre.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(f.provincia.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(f.municipio.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(f.tipo.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase()) ||
      quitarAcentos(f.direccion.trim())
        .toUpperCase()
        .includes(quitarAcentos(search.trim()).toUpperCase())
    ) {
      searchResponse.push(f);
    }
  });

  rp.send({ search: searchResponse });
};

const quitarAcentos = (cadena) => {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

module.exports = { getSearch };
