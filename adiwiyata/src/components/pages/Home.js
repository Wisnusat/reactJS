import "../../App.css";
import CardsHome from "../CardsHome";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <div>
      <HeroSection
        judul="ADIWIYATA"
        text="Wujudkan Lingkungan Bersih dan Sejahtera"
        img="gallery-bg.jpg"
      />
      <CardsHome
        title="Penjelasan"
        subtitle="Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal
        untuk mendapatkan ilmu pengetahuan dan berbagai norma serta etika yang
        dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk
        Cita-cita pembangunan berkelanjutan. Adiwiyata merupakan nama
        program pendidikan lingkungan hidup.
        Mengingat sejarah dan manfaatnya yang sangat besar, Adiwiyata diharapakan bukan sebatas nama
        program untuk tujuan lomba saja, tetapi bisa dilaksanakan oleh semua pihak yang peduli lingkungan hidup, 
        karena program ini terbukti mampu membangun karakter generasi bangsa."
      />
      <Footer />
    </div>
  );
}

export default Home;
