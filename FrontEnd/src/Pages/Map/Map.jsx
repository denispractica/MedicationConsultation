import React, { useContext, useEffect, useState } from "react";
import Context from "../../Components/Context/Context";
import {
  TileLayer,
  MapContainer,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import DraggableMarker from "./DraggableMarker";
import LocationButton from "./LocationButton";
import { getKilometros, myIcon } from "../../Components/Functions";
import axios from "axios";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { IconButton } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsIcon from "@mui/icons-material/Directions";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import RestartButton from "./RestartButton.jsx";
import ManualLocation from "./ManualLocation";
import L from "leaflet";

const createRoutingMachineLayer = ({ waypoints }) => {
  const instance = L.Routing.control({
    waypoints: waypoints.map((coords) => L.latLng(coords)),
    createMarker: () => null,
    lineOptions: {
      styles: [
        { color: "black", opacity: 0.8, weight: 8 },
        { color: "white", opacity: 1, weight: 4, dashArray: "7,12" },
      ],
    },
  });
  return instance;
};
const RoutingMachine = createControlComponent(createRoutingMachineLayer);

const Map = ({ newLocation }) => {
  const { location, zoom, wp, setWp } = useContext(Context);
  const [arrayIcons, setArrayIcons] = useState([]);

  const getPharmacy = async () => {
    await axios
      .get("http://190.15.158.62:5001/getPharmacy")
      .then(async (r) => {
        await setArrayIcons(paintFarms(r.data.farmacias));
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getPharmacy();
  }, [location]);

  const paintFarms = (farms) => {
    const array = [];
    let farmIcon = myIcon("/icons/farm.webp");
    let farmIconNear = myIcon("/icons/farmNear.webp");
    let icon = farmIcon;
    farms.map((f) => {
      icon === farmIconNear ? (icon = farmIcon) : (icon = farmIcon);
      if (getKilometros(location[0], location[1], f.latitud, f.longitud) <= 5) {
        icon = farmIconNear;
      }
      array.push(
        <Marker
          key={f.id}
          position={[Number(f.latitud), Number(f.longitud)]}
          icon={icon}>
          <div className="mapPop">
            <Popup>
              <>
                <h6>
                  <IconButton sx={{ fontSize: "12px", color: "black" }}>
                    <BadgeIcon /> {f.nombre}
                  </IconButton>
                </h6>
                <h6>
                  <IconButton sx={{ fontSize: "12px", color: "black" }}>
                    <AlternateEmailIcon /> {f.direccion}
                  </IconButton>
                </h6>
                <h6>
                  <IconButton sx={{ fontSize: "12px", color: "black" }}>
                    <PhoneIphoneIcon /> {f.telefono}
                  </IconButton>
                </h6>
                <h6>
                  <IconButton sx={{ fontSize: "12px", color: "black" }}>
                    <DirectionsRunIcon />
                    {`Estás aproximadamente a ${getKilometros(
                      location[0],
                      location[1],
                      f.latitud,
                      f.longitud
                    )}Km`}
                  </IconButton>
                </h6>

                <h6>
                  <IconButton
                    sx={{ fontSize: "12px", color: "black" }}
                    onClick={() => {
                      if (wp.length > 0) {
                        setWp((w) => {
                          if (w.length > 0)
                            return [...w, [f.latitud, f.longitud]];
                        });
                      } else {
                        setWp([location, [f.latitud, f.longitud]]);
                      }
                    }}>
                    <DirectionsIcon /> Ir
                  </IconButton>
                </h6>
              </>
            </Popup>
          </div>
        </Marker>
      );
    });
    return array;
  };

  return (
    <>
      <MapContainer
        attributionControl={false}
        key={`${location}`}
        center={newLocation.length > 0 ? newLocation : location}
        zoom={zoom}
        scrollWheelZoom={true}
        className="mapContainer">
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Farmacias">
            <LayerGroup>{arrayIcons}</LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.BaseLayer checked name="OSM">
            <LayerGroup>
              <TileLayer
                url={"http://tile.openstreetmap.org/{z}/{x}/{y}.png"}
              />
              ;
            </LayerGroup>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Híbrido">
            <LayerGroup>
              <TileLayer
                url={"http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"}
              />
              ;
            </LayerGroup>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satelital">
            <LayerGroup>
              <TileLayer
                url={
                  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                }
              />
              ;
            </LayerGroup>
          </LayersControl.BaseLayer>
        </LayersControl>

        <DraggableMarker />

        <LocationButton />
        {newLocation.length === 0 && <RestartButton />}
        <ManualLocation />

        {wp.length > 1 && newLocation.length === 0 && (
          <RoutingMachine waypoints={wp} />
        )}
        {newLocation.length > 0 && (
          <RoutingMachine waypoints={[location, newLocation]} />
        )}
      </MapContainer>
    </>
  );
};
export default Map;
