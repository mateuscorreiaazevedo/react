import "../App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "../components/Aula10/pages/components/Home"
import { AboutUs } from "../components/Aula10/pages/components/AboutUs"
import { ContactUs } from "../components/Aula10/pages/components/ContactUs"
import { Navbar } from "../components/Aula10/layout/Navbar"
import { Footer } from "../components/Aula10/layout/Footer"

export default function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )

}