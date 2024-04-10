import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useState } from "react";
import Context from "../../../Components/Context/Context";

const MedicineList = ({ sendMedicine, setSendMedicine }) => {
  const { medicines } = useContext(Context);
  const [filterList, setFilterList] = useState([]);
  const handleToggle = (f) => () => {
    const currentIndex = sendMedicine.findIndex((s) => s.id === f.id);
    const newChecked = [...sendMedicine];

    if (currentIndex === -1 && sendMedicine.length < 5) {
      newChecked.push(f);
    } else if (newChecked[currentIndex]) {
      newChecked.splice(currentIndex, 1);
    }
    setSendMedicine(newChecked);
  };
  const listSearch = (e) => {
    setFilterList(
      medicines.filter((f) =>
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
          ? filterList.map((m) => {
              return (
                <ListItem
                  key={m.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(m)}
                      checked={
                        sendMedicine.findIndex((s) => s.id === m.id) !== -1
                      }
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={m.nombre} />
                  </ListItemButton>
                </ListItem>
              );
            })
          : medicines.map((m) => {
              return (
                <ListItem
                  key={m.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(m)}
                      checked={
                        sendMedicine.findIndex((s) => s.id === m.id) !== -1
                      }
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={m.nombre} />
                  </ListItemButton>
                </ListItem>
              );
            })}
      </List>
    </>
  );
};
export default MedicineList;
