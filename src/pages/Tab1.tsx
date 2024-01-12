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
            <IonRow className="ion-align-items-center">
              <IonCol size="auto">
                <IonIcon
                  aria-hidden="true"
                  icon={person}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
              </IonCol>
              <IonCol>
                <IonInput placeholder="Usuario" maxlength={20}></IonInput>
              </IonCol>
            </IonRow>

            <IonRow className="ion-align-items-center" style={{ marginTop: "10px" }}>
              <IonCol size="auto">
                <IonIcon
                  aria-hidden="true"
                  icon={lockClosed}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
              </IonCol>
              <IonCol>
                <IonInput
                  placeholder="Contraseña"
                  type="password"
                  value=""
                ></IonInput>
              </IonCol>
            </IonRow>

            <IonButton expand="block" shape="round" style={{ textTransform: 'none' }}>
              Ingresar
              <IonIcon slot="start" icon={arrowForward}></IonIcon>
            </IonButton>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
