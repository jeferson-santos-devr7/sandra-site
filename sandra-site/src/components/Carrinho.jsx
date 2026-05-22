import { useState } from "react"
import { useCarrinho } from "./CarrinhoContext"
import "./Carrinho.css"

function Carrinho() {
  const { itens, removerItem, alterarQtd, limparCarrinho, total } = useCarrinho()
  const [aberto, setAberto] = useState(false)

  const numero = "5511941511690"

  function enviarWhatsapp() {
    if (itens.length === 0) return

    const mensagem =
`Olá Sandra! Gostaria de pedir:

${itens.map(i => `- ${i.nome} (x${i.qtd})`).join("\n")}

Aguardo seu retorno! 💖`

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(link, "_blank")
  }

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <div className="carrinho-float" onClick={() => setAberto(true)}>
        🛒
        {total > 0 && <span className="carrinho-badge">{total}</span>}
      </div>

      {/* Overlay */}
      {aberto && (
        <div className="carrinho-overlay" onClick={() => setAberto(false)} />
      )}

      {/* Painel lateral */}
      <div className={`carrinho-painel ${aberto ? "aberto" : ""}`}>
        <div className="carrinho-header">
          <h3>🛒 Meu Carrinho</h3>
          <button className="carrinho-fechar" onClick={() => setAberto(false)}>✕</button>
        </div>

        {itens.length === 0 ? (
          <div className="carrinho-vazio">
            <p>Seu carrinho está vazio 🛍️</p>
          </div>
        ) : (
          <>
            <div className="carrinho-itens">
              {itens.map((item, i) => (
                <div key={i} className="carrinho-item">
                  <img src={item.imagem} alt={item.nome} className="carrinho-item-img" />
                  <div className="carrinho-item-info">
                    <p className="carrinho-item-nome">{item.nome}</p>
                    <div className="carrinho-qtd">
                      <button onClick={() => alterarQtd(item.nome, -1)}>−</button>
                      <span>{item.qtd}</span>
                      <button onClick={() => alterarQtd(item.nome, +1)}>+</button>
                    </div>
                  </div>
                  <button className="carrinho-remover" onClick={() => removerItem(item.nome)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="carrinho-footer">
              <p className="carrinho-total">{total} {total === 1 ? "item" : "itens"} no carrinho</p>
              <button className="btn-enviar-carrinho" onClick={enviarWhatsapp}>
                Enviar pedido pelo WhatsApp 💬
              </button>
              <button className="btn-limpar" onClick={limparCarrinho}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Carrinho
