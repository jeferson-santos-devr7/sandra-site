import Header from "./components/Header"
import Produtos from "./components/Produtos"
import Footer from "./components/Footer"
import WhatsappFloat from "./components/WhatsappFloat"
import MonteCesta from "./components/MonteCesta"
import { MarcaParceira } from "./components/MarcaParceira"


function App() {

  return (
    <>
      <Header />
      <MonteCesta />
      <Produtos />
      <WhatsappFloat />
      <MarcaParceira />
      <Footer />
    </>
  )
}

export default App