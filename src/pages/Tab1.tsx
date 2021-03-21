import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import Category from "../components/Category";
import MostPopular from "../components/MostPopular";

import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ibise</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ibise</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <Category />

        <MostPopular />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
