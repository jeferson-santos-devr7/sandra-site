import { useState } from "react"
import { useCarrinho } from "./CarrinhoContext"
import "./MonteCesta.css"

function MonteCesta() {

  const numero = "5511941511690"

  const itens = [
    "Nutella",
    "Ferrero Rocher",
    "Caneca Personalizada",
    "Pelúcia",
    "Chocolate",
    "Flores",
    "Café da manhã",
    "Mensagem Especial"
  ]

  const [selecionados, setSelecionados] = useState([])
  const { adicionarItem } = useCarrinho()

  function selecionarItem(item) {
    if (selecionados.includes(item)) {
      setSelecionados(selecionados.filter(i => i !== item))
    } else {
      setSelecionados([...selecionados, item])
    }
  }

  function enviarWhatsapp() {
    const mensagem =
`Olá Sandra!
Gostaria de montar uma cesta com:

${selecionados.map(item => `- ${item}`).join("\n")}
`
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(link, "_blank")
  }

  function adicionarCestaAoCarrinho() {
    adicionarItem("Cesta Café da Manhã", "/img/cafe.jpeg")
  }

  return (
    <section className="monte-cesta">

      {/* Card do Café da Manhã em destaque */}
      <div className="cesta-destaque">
        <div className="cesta-destaque-img-wrap">
          <img src="/img/cafe.jpeg" alt="Cesta Café da Manhã" className="cesta-destaque-img" />
        </div>
        <div className="cesta-destaque-info">
          <h3>🌅 Cesta Café da Manhã</h3>
          <p>Uma cesta especial com produtos selecionados para tornar o café da manhã inesquecível. Perfeita para presentear quem você ama! 💖</p>
          <div className="cesta-destaque-botoes">
            <button className="btn-carrinho-cesta" onClick={adicionarCestaAoCarrinho}>
              🛒 Adicionar ao carrinho
            </button>
            <button className="btn-whatsapp-cesta" onClick={() => {
              const msg = "Olá Sandra! Tenho interesse na Cesta Café da Manhã 🌅"
              window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank")
            }}>
              💬 Pedir pelo WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Monte sua cesta */}
      <h2>Monte Sua Cesta 🎁</h2>

      <div className="itens">
        {itens.map((item, index) => (
          <button
            key={index}
            className={selecionados.includes(item) ? "item ativo" : "item"}
            onClick={() => selecionarItem(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="btn-enviar"
        onClick={enviarWhatsapp}
        disabled={selecionados.length === 0}
      >
        Enviar Pedido 💖
      </button>

    </section>
  )
}

export default MonteCesta
