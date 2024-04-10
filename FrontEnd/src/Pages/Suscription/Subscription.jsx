import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import "./subscription.css";
import axios from "axios";
import Context from "../../Components/Context/Context";
import PharmacyList from "./Lists/PharmacyList";
import MedicineList from "./Lists/MedicineList";

const Subscription = ({ setSubs }) => {
  const [response, setResponse] = useState("Suscríbete");
  const [sendError, setSendError] = useState("");
  const [code, setCode] = useState(false);
  const [codeValidate, setCodeValidate] = useState("");
  const [rq, setRq] = useState({});
  const { pharmacy, setPharmacy, medicines, setMedicines } =
    useContext(Context);
  const [activePharmacy, setActivePharmacy] = useState(false);
  const [activeMedicine, setActiveMedicine] = useState(false);
  const [sendPharmacy, setSendPharmacy] = useState([]);
  const [sendMedicine, setSendMedicine] = useState([]);
  const [updateSuscription, setUpdateSuscription] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const postForm = async (data) => {
    if (sendPharmacy.length === 0) {
      setSendError("No has seleccionado ninguna farmacia");
      return;
    }

    if (sendMedicine.length === 0) {
      setSendError("No has seleccionado ningún medicamento");
      return;
    }
    setRq({
      email: data.email,
      pharmacy: sendPharmacy.map((p) => p.id),
      medicine: sendMedicine.map((m) => m.id),
    });

    try {
      const rp = await axios.post("http://190.15.158.62:5001/verifySuscription", {
        email: data.email,
      });
      if (rp.data.Error) {
        setResponse(rp.data.response);
        setTimeout(() => {
          setResponse("Suscríbete");
        }, 7000);
        return;
      } else {
        if (rp.data.response === "Este usuario ya está suscrito") {
          setResponse(rp.data.response);
          setTimeout(() => {
            setResponse("Suscríbete");
          }, 7000);
        } else {
          setResponse(rp.data.response);
          resetField("email");
          setSendMedicine([]);
          setSendPharmacy([]);
          setCode(true);
        }
      }
    } catch (error) {
      console.log("Algo salió mal", error);
    }
  };

  const validateCode = async () => {
    if (codeValidate.trim() === "") return;

    await axios
      .post("http://190.15.158.62:5001/activeCode", {
        ...rq,
        code: codeValidate,
      })
      .then((r) => {
        if (r.data.response !== "El código es incorrecto") {
          setResponse(r.data.response);
          setCode(false);
          setTimeout(() => {
            setResponse("Suscríbete");
          }, 7000);
          setSendMedicine([]);
          setSendPharmacy([]);
        } else {
          setResponse(r.data.response);
          setTimeout(() => {
            setResponse("Se ha enviado un código de verificación a su correo");
          }, 7000);
        }
      })
      .catch((e) => console.log("Algo salió mal", e));
  };

  const updateSubs = async (data) => {
    setRq({
      email: data.email,
    });

    await axios
      .post("http://190.15.158.62:5001/verifySuscriptionUpdate", {
        email: data.email,
      })
      .then((r) => {
        if (r.data.Error) {
          setResponse(r.data.response);
          setTimeout(() => {
            setResponse("Suscríbete");
          }, 7000);
          return;
        } else {
          if (r.data.response === "Este usuario no existe todavía") {
            setResponse(r.data.response);
            setTimeout(() => {
              setResponse("Suscríbete");
            }, 7000);
          } else {
            setResponse(r.data.response);
            setUpdateSuscription(true);
            setCode(true);
          }
        }
      })
      .catch((e) => console.log("Algo salió mal", e));
  };

  const validateCodeUpdate = async () => {
    if (codeValidate.trim() === "") return;

    await axios
      .post("http://190.15.158.62:5001/activeCodeUpdate", {
        ...rq,
        code: codeValidate,
      })
      .then((r) => {
        if (r.data.response !== "El código es incorrecto") {
          setResponse(r.data.response);
          setCode(false);

          setSendMedicine(r.data.medicine);
          setSendPharmacy(r.data.pharmacy);
        } else {
          setResponse(r.data.response);
          setTimeout(() => {
            setResponse("Se ha enviado un código de verificación a su correo");
          }, 7000);
        }
      })
      .catch((e) => console.log("Algo salió mal", e));
  };

  const postUpdate = async (data) => {
    if (sendPharmacy.length === 0) {
      setSendError("No has seleccionado ninguna farmacia");
      return;
    }

    if (sendMedicine.length === 0) {
      setSendError("No has seleccionado ningún medicamento");
      return;
    }
    const rqUpdate = {
      email: data.email,
      pharmacy: sendPharmacy.map((p) => p.id),
      medicine: sendMedicine.map((m) => m.id),
    };

    try {
      const rp = await axios.post("http://190.15.158.62:5001/postUpdate", rqUpdate);
      if (rp.data.Error) {
        setResponse(rp.data.response);
        setTimeout(() => {
          setResponse("Suscríbete");
        }, 7000);
        return;
      } else {
        setResponse(rp.data.response);
        resetField("email");
        setSendMedicine([]);
        setSendPharmacy([]);
        setUpdateSuscription(false);
        setTimeout(() => {
          setResponse("Suscríbete");
        }, 7000);
        return;
      }
    } catch (error) {
      console.log("Algo salió mal", error);
    }
  };

  const getPharmacy = async () => {
    await axios
      .get("http://190.15.158.62:5001/getPharmacy")
      .then((r) => setPharmacy(r.data.farmacias))
      .catch((e) => console.log("Algo salió mal", e));
  };

  const getMedicines = async () => {
    await axios
      .get("http://190.15.158.62:5001/getMedicines")
      .then((r) => setMedicines(r.data.medicamentos))
      .catch((e) => console.log("Algo salió mal", e));
  };

  useEffect(() => {
    if (sendPharmacy.length > 0) {
      setSendError("");
      return;
    }

    if (sendMedicine.length > 0) {
      setSendError("");
      return;
    }

    if (pharmacy.length === 0) {
      getPharmacy();
    }
    if (medicines.length === 0) {
      getMedicines();
    }
  }, [sendPharmacy, sendMedicine]);

  return (
    <>
      <div className="subscribe">
        <div className="subscribeTop">
          <div style={{ width: "64px", height: "64px" }}>
            <img src="/img/subscribe.webp" alt="imagen" />
          </div>
          <h4 className="heading">{response}</h4>
        </div>
        <Form onSubmit={handleSubmit(postForm)} className="form">
          {!code && (
            <>
              <Form.Control
                className="input"
                autoFocus
                placeholder="Correo de Notificación"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {sendError.length > 0 && <div className="aviso">{sendError}</div>}
              {errors.email?.type === "required" && (
                <div className="aviso">El correo es obligatorio </div>
              )}
              {errors.email?.type === "pattern" && (
                <div className="aviso">
                  Lo que escribiste no es un correo válido
                </div>
              )}

              <div className="btns">
                <div className="btnImg">
                  {sendPharmacy.length > 0 && (
                    <div style={{ width: "16px", height: "16px" }}>
                      <img src="/img/check.webp" alt="check" />
                    </div>
                  )}
                  <div style={{ width: "64px", height: "64px" }}>
                    <img src="/img/pharm.webp" alt="Farmacia" />
                  </div>

                  <Button
                    onClick={() => setActivePharmacy(true)}
                    sx={{ color: "black", marginTop: "10px" }}>
                    Agregar Farmacias
                  </Button>
                </div>

                <div className="btnImg">
                  {sendMedicine.length > 0 && (
                    <div style={{ width: "16px", height: "16px" }}>
                      <img src="/img/check.webp" alt="check" />
                    </div>
                  )}
                  <div style={{ width: "64px", height: "64px" }}>
                    <img src="/img/med.webp" alt="Medicamento" />
                  </div>

                  <Button
                    sx={{ color: "black", marginTop: "10px" }}
                    onClick={() => setActiveMedicine(true)}>
                    Agregar Medicamentos
                  </Button>
                </div>
              </div>

              <div className="btnsBottom">
                <Button
                  variant="contained"
                  onClick={
                    updateSuscription
                      ? handleSubmit(postUpdate)
                      : handleSubmit(postForm)
                  }>
                  {updateSuscription ? "Modificar Suscripción" : "Suscribirse"}
                </Button>
                {!updateSuscription && (
                  <Button
                    variant="contained"
                    onClick={handleSubmit(updateSubs)}
                    sx={{ marginTop: "5px" }}>
                    Modificar Suscripción
                  </Button>
                )}
                <Button onClick={() => setSubs(false)} sx={{ color: "#f00" }}>
                  Cerrar
                </Button>
              </div>
            </>
          )}
          {code && (
            <div className="validate">
              <Form.Control
                className="input"
                placeholder="Código de Verificación"
                onChange={(e) => setCodeValidate(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={updateSuscription ? validateCodeUpdate : validateCode}>
                Activar
              </Button>
              <Button
                onClick={() => setSubs(false)}
                sx={{ color: "#f00", marginTop: "10px" }}>
                Cerrar
              </Button>
            </div>
          )}

          {activePharmacy && (
            <div className="classModal">
              <div className="insideModal">
                <PharmacyList
                  sendPharmacy={sendPharmacy}
                  setSendPharmacy={setSendPharmacy}
                />
                <Button onClick={() => setActivePharmacy(false)}>
                  Aceptar
                </Button>
              </div>
            </div>
          )}
          {activeMedicine && (
            <div className="classModal">
              <div className="insideModal">
                <MedicineList
                  sendMedicine={sendMedicine}
                  setSendMedicine={setSendMedicine}
                />
                <Button onClick={() => setActiveMedicine(false)}>
                  Aceptar
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </>
  );
};
export default Subscription;
