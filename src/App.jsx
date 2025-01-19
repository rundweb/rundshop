import BrandsComponents from "./components/BrandsComponents"
import ContactComponents from "./components/ContactComponents"
import CurratedComponents from "./components/CurratedComponents"
import HomeComponents from "./components/HomeComponents"
import NavbarComponents from "./components/NavbarComponents"
import ProductComponents from "./components/ProductComponents"
import ServicesComponents from "./components/ServicesComponents"


const App = () => {
  return (
    <div className="overflow-hidden">
      <NavbarComponents/>
      <HomeComponents/>
      <BrandsComponents/>
      <ServicesComponents/>
      <CurratedComponents/>
      <ProductComponents/>
      <ContactComponents/>
    </div>
  )
}

export default App
