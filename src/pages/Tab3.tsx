import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { person, lockClosed, card } from "ionicons/icons";
import "./Tab3.css";

import { User } from "./../models/user.model";
import UserItem from "../components/userItem";
import axios from "axios";

import Read from "../components/read/read";

const Tab3: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <center>
          <IonTitle>Lista de Usuarios</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <br />
          <center>
            <img
              alt="Login"
              src="/assets/images/users.jpg"
              style={{ width: "25%", height: "25%" }}
            />
          </center>
          <br />

      <br/>
        <center>
          <h3>Lista de Usuarios</h3>
        </center>
        <br/>
        <Read/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
