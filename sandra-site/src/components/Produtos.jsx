import CardProduto from "./CardProduto"

function Produtos() {

  const produtos = [
 {
      nome: "Cesta Café da Manhã",
      imagem: "/img/cafe.jpeg"
    },
    
    {
      nome: "Chinelo Elegante Preto",
      imagem: "/img/floral.jpeg"
    },

    {
      nome: "Chinelo Luxo Pedrarias",
      imagem: "/img/luxo.jpeg"
    },

    {
      nome: "Chinelo Sereia Chic",
      imagem: "/img/img01.jpeg"
    },
    {
      nome: "Chinelo Beach Vibes",
      imagem: "/img/img02.jpeg"
    },
    {
      nome: "Chinelo Cristal Classic",
      imagem: "/img/img03.jpeg"
    },
    {
      nome: "Chinelo Golden Pearl",
      imagem: "/img/img04.jpeg"
    },
    {
      nome: "Chinelo Imperial",
      imagem: "/img/img05.jpeg"
    },
    {
      nome: "Chinelo Mostarda Urban",
      imagem: "/img/img08.jpeg"
    },
    {
      nome: "Chinelo Lima Glow",
      imagem: "/img/img07.jpeg"
    },
    {
      nome: "Chinelo Slim Nigth",
      imagem: "/img/img09.jpeg"
    },
    {
      nome: "Chinelo Gema Imperial ",
      imagem: "/img/img10.jpeg"
    },
    {
      nome: "Chinelo Sweet Heart",
      imagem: "/img/img11.jpeg"
    },

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