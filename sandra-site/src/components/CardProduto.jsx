function CardProduto({ nome, imagem }) {

  const numero = "5511941511690"

  function comprar() {

    const msg =
      `Olá Sandra! Tenho interesse em: ${nome}`

    const link =
      `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`

    window.open(link, "_blank")
  }

  return (

    <div className="card">

      <img src={imagem} />

      <h3>{nome}</h3>

      <button onClick={comprar}>
        Quero esse
      </button>

    </div>
  )
}

export default CardProduto