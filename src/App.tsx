import BenefitList from "./components/BenefitList";
import StayProductive from "./components/StayProductive";
import TestimonialList from "./components/TestimonialList";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <div className="px-5 py-6">
        <Header />
        <Hero />
        <BenefitList />
        <StayProductive />
        <TestimonialList />
        <EarlyAccess />
      </div>
      <Footer />
    </main>
  );
}

export default App;
