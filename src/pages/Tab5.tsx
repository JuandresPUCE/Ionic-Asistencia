import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent} from '@ionic/react';
import Report from '../components/read/report'
import Attendant from '../components/register/attendant'

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

            <IonTitle>Registro</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard>          
          <IonCardContent>
            <Attendant/> 
            <Report/> 
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
