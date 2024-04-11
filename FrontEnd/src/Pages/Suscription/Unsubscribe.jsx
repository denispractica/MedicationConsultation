import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Unsubscribe = () => {
  const { id } = useParams();
  const [response, setResponse] = useState("");
  const unsubscribe = async () => {
    await axios
      .delete(`https://190.15.158.62:5001/deleteSuscription/${id}`)
      .then((r) => setResponse(r.data.response))
      .catch((e) => console.log("Algo salió mal", e));
  };

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <h3
      style={{
        backgroundColor: "white",
        zIndex: 100,
        width: "100vw",
        height: "100vh",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        top: "0",
        left: "0",
      }}
    >
      {response}
    </h3>
  );
};

export default Unsubscribe;
