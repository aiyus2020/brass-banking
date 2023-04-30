import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Financial from "./components/finanacial_stock/financial_stock";
import Needs from "./components/needs/needs";
import Today from "./components/needs/today";
import SwiperComponent from "./components/swipper/swiper";
import Intergration from "./components/swipper/intergration";
import Manage from "./components/manage/manage";
import Support from "./components/support/support";
import Resources from "./components/resources/resources";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Financial />
      <Needs />
      <Today />
      <SwiperComponent />
      <Intergration />
      <Manage />
      <Support />
      <Resources />
    </div>
  );
}

export default App;
