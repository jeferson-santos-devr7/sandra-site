import CardProduto from "./CardProduto"

function Produtos() {

  const produtos = [

    {
      nome: "Chinelo Elegante Preto",
      imagem: "/img/floral.jpeg"
    },

    {
      nome: "Cesta Café da Manhã",
      imagem: "/img/cafe.jpeg"
    },

    {
      nome: "Chinelo Luxo Pedrarias",
      imagem: "/img/luxo.jpeg"
    },

    {
      nome: "Cesta Romântica Premium",
      imagem: "/img/romantica.jpeg"
    }

  ]

  return (

    <section className="produtos">

      <h2>Nossos Produtos</h2>

      <div className="grid">

        {produtos.map((produto, index) => (

          <CardProduto
            key={index}
            nome={produto.nome}
            imagem={produto.imagem}
          />

        ))}

      </div>

    </section>
  )
}

export default Produtos