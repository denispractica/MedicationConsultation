import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useState } from "react";
import Context from "../../../Components/Context/Context";

const PharmacyList = ({ sendPharmacy, setSendPharmacy }) => {
  const { pharmacy } = useContext(Context);
  const [filterList, setFilterList] = useState([]);

  const handleToggle = (f) => () => {
    const currentIndex = sendPharmacy.findIndex((s) => s.id === f.id);
    const newChecked = [...sendPharmacy];

    if (currentIndex === -1 && sendPharmacy.length < 5) {
      newChecked.push(f);
    } else if (newChecked[currentIndex]) {
      newChecked.splice(currentIndex, 1);
    }
    setSendPharmacy(newChecked);
  };

  const listSearch = (e) => {
    setFilterList(
      pharmacy.filter((f) =>
        f.nombre.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  return (
    <>
      <input
        autoFocus
        onChange={listSearch}
        className="listSearch"
        type="text"
        placeholder="Buscar"
      />
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          overflow: "auto",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        {filterList.length > 0
          ? filterList.map((f) => {
              return (
                <ListItem
                  key={f.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(f)}
                      checked={
                        sendPharmacy.findIndex((s) => s.id === f.id) !== -1
                      }
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={f.nombre} />
                  </ListItemButton>
                </ListItem>
              );
            })
          : pharmacy.map((f) => {
              return (
                <ListItem
                  key={f.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(f)}
                      checked={
                        sendPharmacy.findIndex((s) => s.id === f.id) !== -1
                      }
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={f.nombre} />
                  </ListItemButton>
                </ListItem>
              );
            })}
      </List>
    </>
  );
};
export default PharmacyList;
