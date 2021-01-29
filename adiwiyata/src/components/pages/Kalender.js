import "../../App.css";
import CardsKelender from "../CardsKalender";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <div>
      <HeroSection
        judul="KALENDER"
        text="Agenda hari hari besar kementrian lingkungan hidup dan kehutanan"
        img="kalender-bg.jpg"
      />
      <CardsKelender />
      <Footer />
    </div>
  );
}

export default Home;
