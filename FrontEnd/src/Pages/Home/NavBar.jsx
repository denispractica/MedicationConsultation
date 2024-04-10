import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";
import Subscription from "../Suscription/Subscription";
import Map from "../Map/Map";
import { Button } from "@mui/material";
import Context from "../../Components/Context/Context";

const NavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const { mapSet, setMapSet,subs, setSubs } = useContext(Context);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <BottomNavigation
          sx={{
            margin: "10px",
            backgroundColor: "transparent",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            if (newValue === 0) setValue(newValue);
          }}>
          <BottomNavigationAction
            label="Inicio"
            icon={<HomeIcon sx={{ fontSize: 32 }} />}
            onClick={() => {
              setSubs(false);
              navigate("/");
            }}
          />
          <BottomNavigationAction
            label="Mapa"
            icon={<MapIcon sx={{ fontSize: 32 }} />}
            onClick={() => {
              setSubs(false);
              setMapSet(true);
            }}
          />
          <BottomNavigationAction
            onClick={() => {
              setSubs(true);
              setMapSet(false);
            }}
            icon={<AppRegistrationIcon sx={{ fontSize: 32 }} />}
            label="Suscribirse"
          />
        </BottomNavigation>
      </Box>
      {subs && (
        <div
          style={{
            position: "absolute",
            zIndex: "8",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
            top: "0",
            left: "0",
          }}>
          <Subscription setSubs={setSubs} />
        </div>
      )}
      {mapSet && (
        <div
          style={{
            position: "absolute",
            zIndex: "8",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
            top: "0",
            left: "0",
          }}>
          <>
            <Map newLocation={[]} />
            <Button
              sx={{ width: "100px", margin: "auto" }}
              variant="contained"
              onClick={() => {
                setMapSet(false);
              }}>
              Cerrar
            </Button>
          </>
        </div>
      )}
    </>
  );
};
export default NavBar;
