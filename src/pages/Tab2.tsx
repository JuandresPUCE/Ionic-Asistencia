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
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { call, card, checkmarkCircle, lockClosed, mail, person } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonCardContent>
            <IonList>
            <IonItem>
                <IonIcon slot="start" icon={person} />
                <IonInput placeholder="Usuario" maxlength={50}></IonInput>
              </IonItem>

              <IonItem>
                <IonIcon slot="start" icon={lockClosed} />
                <IonInput placeholder="Contraseña" type="password" maxlength={50}></IonInput>
              </IonItem>
              
              <IonItem>
                <IonIcon slot="start" icon={card} />
                <IonInput placeholder="Cédula" maxlength={10}></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={person} />
                <IonInput placeholder="Nombre" maxlength={50}></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={person} />
                <IonInput placeholder="Apellido" maxlength={50}></IonInput>
              </IonItem>
              <IonItem>
              <IonIcon slot="start" icon={mail} />
                <IonInput placeholder="Email" maxlength={100} type="email"></IonInput>
              </IonItem>
              <IonItem>
              <IonIcon slot="start" icon={call} />
                <IonInput placeholder="Celular" maxlength={10}></IonInput>
              </IonItem>
            </IonList>

            <IonButton expand="block" shape="round" style={{ textTransform: 'none' }}>
              Registar
              <IonIcon slot="start" icon={checkmarkCircle}></IonIcon>
            </IonButton>
            
          </IonCardContent>
          
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
