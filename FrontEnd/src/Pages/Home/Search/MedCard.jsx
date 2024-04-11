import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import "../home.css";

const MedCard = ({
  id,
  nombre,
  descripcion,
  precioDeVenta,
  tipoDeVenta,
  grupoFarmacologico,
  formaDeDosificacion,
  setPharmacyFound,
  setActiveCard,
}) => {
  const encontrar = async () => {
    setLoading(true);
    setActiveCard(id);
    await axios
      .get(`https://190.15.158.62:5001/getPharmacyForMedicine/${id}`)
      .then((r) => {
        setPharmacyFound(r.data.idMedicamentoFarmacias);
        setLoading(false);
      })
      .catch((e) => console.log("Algo salió mal", e));
  };
  const [expande, setExpande] = useState(false);
  const [loading, setLoading] = useState(false);
  const expandir = () => {
    setExpande(!expande);
  };

  return (
    <>
      {loading && <LinearProgress />}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ListItemAvatar>
          <Avatar variant="square" alt="Medicine" src="/img/med.webp" />
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
            Precio — {` ${precioDeVenta}cup`}
            <br />
            Venta {` — ${tipoDeVenta}`}
            <br />
            Grupo{` — ${grupoFarmacologico}`}
            <br />
            Dosificación {` — ${formaDeDosificacion}`}
            <br />
            <span>
              Descripción
              <IconButton onClick={expandir}>
                <ExpandMoreIcon />
              </IconButton>
              {expande && <em className="descripcion">{descripcion}</em>}
            </span>
            <br />
            <span>
              Farmacia —
              <IconButton onClick={encontrar}>
                <SearchIcon />
              </IconButton>
            </span>
          </p>
        </div>
        <Divider variant="middle" component="div" />
      </div>
    </>
  );
};

export default MedCard;
