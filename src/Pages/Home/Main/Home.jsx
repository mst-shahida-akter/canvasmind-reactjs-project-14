import ConsultingFirm from "../Components/ConsultingFirm";
import EvolutionaryConsulting from "../Components/EvolutionaryConsulting";
import HeroSection from "../Components/HeroSection";
import SignificantBusiness from "../Components/SignificantBusiness";
import TeamSection from "../Components/TeamSection";
import BenefitsSection from "../Components/BenefitsSection";
import NewsletterSection from "../Components/NewsletterSection";
import Footer from "../../../GlobalCompo/Footer/Footer";
import Header from "../../../GlobalCompo/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConsultingFirm />
        <EvolutionaryConsulting />
        <SignificantBusiness />
        <TeamSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
