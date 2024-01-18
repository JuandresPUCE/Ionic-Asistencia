import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
} from "@ionic/react";
import { call, card, checkmarkCircle, mail, person } from "ionicons/icons";
import { loadingController } from "@ionic/core";
import { ChangeEvent, useState } from "react";
import Create from "../components/create/create";


const Tab2: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardContent>
           <Create/>
          </IonCardContent>
        
        </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Tab2;
