import { useState } from "react"
import CardProduto from "./CardProduto"
import "./Carrossel.css"

function Carrossel({ produtos }) {
  const visíveis = 3 // quantos cards mostrar por vez (desktop)
  const [inicio, setInicio] = useState(0)

  function anterior() {
    setInicio(i => Math.max(0, i - 1))
  }

  function proximo() {
    setInicio(i => Math.min(produtos.length - visíveis, i + 1))
  }

  const podePrev = inicio > 0
  const podeNext = inicio + visíveis < produtos.length

  const visiveis = produtos.slice(inicio, inicio + visíveis)

  return (
    <div className="carrossel-wrapper">
      <button
        className={`carrossel-seta esquerda ${!podePrev ? "desativada" : ""}`}
        onClick={anterior}
        disabled={!podePrev}
      >
        ‹
      </button>

      <div className="carrossel-track">
        {visiveis.map((produto, index) => (
          <div className="carrossel-slide" key={inicio + index}>
            <CardProduto nome={produto.nome} imagem={produto.imagem} />
          </div>
        ))}
      </div>

      <button
        className={`carrossel-seta direita ${!podeNext ? "desativada" : ""}`}
        onClick={proximo}
        disabled={!podeNext}
      >
        ›
      </button>

      {/* Indicador de posição */}
      <div className="carrossel-dots">
        {produtos.map((_, i) => (
          <span
            key={i}
            className={`dot ${i >= inicio && i < inicio + visíveis ? "ativo" : ""}`}
            onClick={() => setInicio(Math.min(i, produtos.length - visíveis))}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrossel