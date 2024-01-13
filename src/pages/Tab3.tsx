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

const Tab3: React.FC = () => {
  const [users, setUser] = useState<User[]>([]);
  const conrsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const myUrl = 'http://40.75.120.104/apiweb/';

  const fetchData = () => {
    return axios
      .get(conrsAnywhere + myUrl)
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Usuarios--Muestra Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {users.map((user, idx) => (
            <UserItem key={idx} user={user} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
