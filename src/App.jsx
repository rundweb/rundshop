import BrandsComponents from "./components/BrandsComponents"
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
    </div>
  )
}

export default App
