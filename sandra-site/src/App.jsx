import Header from "./components/Header"
import Produtos from "./components/Produtos"
import Footer from "./components/Footer"
import WhatsappFloat from "./components/WhatsappFloat"
import MonteCesta from "./components/MonteCesta"
import { MarcaParceira } from "./components/MarcaParceira"
import Carrinho from "./components/Carrinho"
import { CarrinhoProvider } from "./components/CarrinhoContext"

function App() {
  return (
    <CarrinhoProvider>
      <Header />
      <MonteCesta />
      <Produtos />
      <WhatsappFloat />
      <Carrinho />
      <MarcaParceira />
      <Footer />
    </CarrinhoProvider>
  )
}

export default App