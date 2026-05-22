import { useCarrinho } from "./CarrinhoContext"

function CardProduto({ nome, imagem }) {
  const { adicionarItem } = useCarrinho()

  const numero = "5511941511690"

  function comprar() {
    const msg = `Olá Sandra! Tenho interesse em: ${nome}`
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
    window.open(link, "_blank")
  }

  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <div className="card-botoes">
        <button className="btn-carrinho" onClick={() => adicionarItem(nome, imagem)}>
          🛒 Adicionar
        </button>
        <button className="btn-comprar" onClick={comprar}>
          Quero esse
        </button>
      </div>
    </div>
  )
}

export default CardProduto
