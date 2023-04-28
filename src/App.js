import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Financial from "./components/finanacial_stock/financial_stock";
import Needs from "./components/needs/needs";
import Today from "./components/needs/today";
import SwiperComponent from "./components/swipper/swiper";
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Financial/>
      <Needs/>
      <Today/>
      <SwiperComponent/>
   </div>
   
  );
}

export default App;
