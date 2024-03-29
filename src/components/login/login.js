import React from "react";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { IonIcon } from "@ionic/react";
import { lockClosed, person } from "ionicons/icons";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function Create() {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState([]);

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    axios
      .get(aux + myip, {
        params: {
          user: user,
          pass: pass,
        },
      })
      .then(function (response) {
        console.log(response);
        setLogin(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        history.push("/Tab5");
      });
  };

  login.map((data) => {
    console.log("DATA INFO " + data.record);
    localStorage.setItem("RECORD", data.record);
    localStorage.setItem("ID", data.id);
    localStorage.setItem("NAME", data.names);
    localStorage.setItem("LASTNAME", data.lastnames);
    if (data.record == 0) {
      alert("¡Valide Usuario!");
    }
  });

  return (
    <div>
      <Form>
        <IonIcon
          aria-hidden="true"
          icon={person}
          size="small"
          style={{ marginRight: "8px" }}
        />
        <Form.Field  >
          <label className="breathing-label">Usuario</label>
          <input className="custom-input-field"
            name="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuario"
          />
        </Form.Field >
        <IonIcon
          aria-hidden="true"
          icon={lockClosed}
          size="small"
          style={{ marginRight: "8px" }}
        />
        <Form.Field >
          <label className="breathing-label">Clave</label>
          <input
            name="pass"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Clave"
          />
        </Form.Field>
        <center>
          <Button type="submit" color="linkedin" onClick={sendDataToApi}>
            Ingresar
          </Button>
        </center>
      </Form>
    </div>
  );
}
