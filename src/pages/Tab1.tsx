import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { arrowForward, lockClosed, person } from "ionicons/icons";
import Login from "../components/login/login";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Proyecto Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <br />
          <center>
            <img
              alt="Login"
              src="/assets/images/login.jpg"
              style={{ width: "25%", height: "25%" }}
            />
          </center>
          <br />

          <IonCardContent>
          <Login/>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
