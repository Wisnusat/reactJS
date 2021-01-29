import "../../App.css";
import CardsGallery from "../CardsGallery";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <div>
      <HeroSection
        judul="GALLERY"
        text="Kumpulan Foto Kegiatan Adiwiyata"
        img="img-home.jpg"
      />
      <CardsGallery />
      <Footer />
    </div>
  );
}

export default Home;
