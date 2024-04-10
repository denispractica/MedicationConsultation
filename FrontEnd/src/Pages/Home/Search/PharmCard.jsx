import React, { useContext } from "react";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MapIcon from "@mui/icons-material/Map";
import { IconButton } from "@mui/material";
import Context from "../../../Components/Context/Context";

const PharmCard = ({
  setNewLocation,
  clase,
  nombre,
  provincia,
  municipio,
  telefono,
  direccion,
  tipo,
  idMedicamentos,
  latitud,
  longitud,
}) => {
  const { setMapSet } = useContext(Context);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ListItemAvatar>
          <Avatar variant="square" alt="Pharmacy" src="/img/pharm.webp" />
        </ListItemAvatar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p>
            <strong>Nombre</strong> {` — ${nombre}`}
            <br />
            Provincia{` — ${provincia}`}
            <br />
            Municipio {` — ${municipio}`}
            <br />
            Teléfono {` — ${telefono}`}
            <br />
            Tipo {` — ${tipo}`}
            <br />
            Dirección{` — ${direccion}`}
            <br />
            <span>
              Ver —
              <IconButton
                onClick={() => {
                  setNewLocation([latitud, longitud]);
                  setMapSet(true);
                }}>
                <MapIcon />
              </IconButton>
            </span>
          </p>
        </div>
        <Divider variant="middle" component="div" />
      </div>
    </>
  );
};

export default PharmCard;
