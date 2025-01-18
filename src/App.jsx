import BrandsComponents from "./components/BrandsComponents"
import CurratedComponents from "./components/CurratedComponents"
import HomeComponents from "./components/HomeComponents"
import NavbarComponents from "./components/NavbarComponents"
import ServicesComponents from "./components/ServicesComponents"


const App = () => {
  return (
    <div className="overflow-hidden">
      <NavbarComponents/>
      <HomeComponents/>
      <BrandsComponents/>
      <ServicesComponents/>
      <CurratedComponents/>
    </div>
  )
}

export default App
