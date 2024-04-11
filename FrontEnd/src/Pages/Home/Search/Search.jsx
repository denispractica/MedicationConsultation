import React, { useState, useEffect, useRef, useContext } from "react";
import "../home.css";
import LinearProgress from "@mui/material/LinearProgress";
import { IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MedCard from "./MedCard";
import axios from "axios";
import PharmCard from "./PharmCard";
import Map from "../../Map/Map";
import Context from "../../../Components/Context/Context";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const searchRef = useRef(false);

  useEffect(() => {
    if (searchRef.current) {
      if (search === "") {
        setError("No está escribiendo nada para buscar");
        return;
      }

      if (search.match(/^\d+$/)) {
        setError("No se puede buscar un medicamento con un número");
        return;
      }

      if (search.length < 3) {
        setError("Debe escribir al menos 3 caracteres para buscar");
        return;
      }
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error, searchRef, setError };
};

const Search = () => {
  const { search, setSearch, error, searchRef, setError } = useSearch();
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [activeCard, setActiveCard] = useState(0);
  const [pharmacyFound, setPharmacyFound] = useState([]);
  const [newLocation, setNewLocation] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filter, setFilter] = useState("");
  const showRef = useRef(null);
  const { mapSet, setMapSet, subs } = useContext(Context);
  const searchTerm = (e) => {
    e.preventDefault();
    if (error === null) {
      setPharmacyFound([]);
      setLoading(true);
      getMedicines();
    }
  };

  const searchChange = (e) => {
    setNewLocation([]);
    setSearch(e.target.value);
    searchRef.current = true;
  };
  const getMedicines = async () => {
    await axios
      .get(`https://backmedicationconsultation.t3sd.nat.cu/getSearch/?search=${search}`)
      .then((r) => {
        setMedicines(r.data.search);
        setLoading(false);
        setActiveCard(0);
        showRef.current.scrollIntoView({ block: "start" });
        if (r.data.search.length === 0)
          setError("No se encontraron resultados");
      })
      .catch((e) => console.log("Algo salió mal", e));
  };
  const filterSearch = (e) => {
    setFilter(e.target.value);

    setFilterList(
      pharmacyFound.filter((f) =>
        f.provincia.toUpperCase().includes(e.target.value.toUpperCase())
      ).length > 0
        ? pharmacyFound.filter((f) =>
            f.provincia.toUpperCase().includes(e.target.value.toUpperCase())
          )
        : pharmacyFound.filter((f) =>
            f.municipio.toUpperCase().includes(e.target.value.toUpperCase())
          )
    );
  };

  useEffect(() => {
    setFilterList([]);
    setFilter("");
  }, [pharmacyFound]);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="container">
        <form onSubmit={searchTerm} className="searchForm">
          <input
            className="inpSearch"
            autoFocus
            type="text"
            value={search}
            placeholder="Buscar Medicamentos..."
            onChange={searchChange}
          />
          <IconButton type="submit" onClick={searchTerm}>
            <SearchIcon fontSize="large" />
          </IconButton>
        </form>
        {loading && <LinearProgress sx={{ marginTop: "10px" }} />}
        {error !== null ? <p className="error">{error}</p> : <></>}
      </div>
      {!mapSet && !subs && (
        <main className={medicines.length > 0 ? "showResult" : "noShowResult"}>
          <div className="result">
            <div className="card">
              {medicines?.map((m) => {
                if (!m.latitud) {
                  return (
                    <MedCard
                      setActiveCard={setActiveCard}
                      id={m.id}
                      setPharmacyFound={setPharmacyFound}
                      key={m.id}
                      nombre={m.nombre}
                      descripcion={m.descripcion}
                      precioDeVenta={m.precioDeVenta}
                      tipoDeVenta={m.tipoDeVenta}
                      grupoFarmacologico={m.grupoFarmacologico}
                      formaDeDosificacion={m.formaDeDosificacion}
                    />
                  );
                }
              })}
            </div>

            {pharmacyFound.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}>
                <h4>Disponible en:</h4>
                <input
                  style={{ width: "250px", margin: "auto" }}
                  autoFocus
                  onChange={filterSearch}
                  value={filter}
                  className="listSearch"
                  type="text"
                  placeholder="Filtrar Provincia o Municipio"
                />
              </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filterList.length > 0
                ? filterList.map((m) => (
                    <PharmCard
                      key={m.id}
                      setNewLocation={setNewLocation}
                      clase={""}
                      nombre={m.nombre}
                      provincia={m.provincia}
                      municipio={m.municipio}
                      telefono={m.telefono}
                      direccion={m.direccion}
                      tipo={m.tipo}
                      idMedicamentos={m.idMedicamentos}
                      latitud={m.latitud}
                      longitud={m.longitud}
                    />
                  ))
                : pharmacyFound.map((m) => (
                    <PharmCard
                      key={m.id}
                      setNewLocation={setNewLocation}
                      clase={""}
                      nombre={m.nombre}
                      provincia={m.provincia}
                      municipio={m.municipio}
                      telefono={m.telefono}
                      direccion={m.direccion}
                      tipo={m.tipo}
                      idMedicamentos={m.idMedicamentos}
                      latitud={m.latitud}
                      longitud={m.longitud}
                    />
                  ))}

              {activeCard > 0 && pharmacyFound.length === 0 ? (
                <p style={{ color: "red" }}>No disponible</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </main>
      )}
      {mapSet && (
        <div className="modalMap">
          <Map key={newLocation} newLocation={newLocation} />
          <Button
            sx={{ width: "100px", margin: "auto" }}
            variant="contained"
            onClick={() => {
              setMapSet(false);
              setNewLocation([]);
            }}>
            Cerrar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Search;
