import { ActorSection } from "widgets/ActorsSection";
import { KadrSection } from "widgets/KadrSection";
import { SeeSerialSection } from "widgets/SeeSerial";
import { ShopSection } from "widgets/ShopSection";

const MainPage = () => {
  return (
    <main className="main">
      <SeeSerialSection />
      <ActorSection />
      <KadrSection />
      <ShopSection />
    </main>
  );
};

export default MainPage;
