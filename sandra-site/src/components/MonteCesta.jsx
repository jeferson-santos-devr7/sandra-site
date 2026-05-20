import { useState } from "react"

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

  function selecionarItem(item){

    if(selecionados.includes(item)){

      setSelecionados(
        selecionados.filter(i => i !== item)
      )

    }else{

      setSelecionados([
        ...selecionados,
        item
      ])
    }
  }

  function enviarWhatsapp(){

    const mensagem =

`Olá Sandra!
Gostaria de montar uma cesta com:

${selecionados.map(item => `- ${item}`).join("\n")}
`

    const link =
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(link, "_blank")
  }

  return (

    <section className="monte-cesta">

      <h2>Monte Sua Cesta 🎁</h2>

      <div className="itens">

        {itens.map((item, index) => (

          <button
            key={index}
            className={
              selecionados.includes(item)
              ? "item ativo"
              : "item"
            }

            onClick={() => selecionarItem(item)}
          >

            {item}

          </button>

        ))}

      </div>

      <button
        className="btn-enviar"
        onClick={enviarWhatsapp}
      >

        Enviar Pedido 💖

      </button>

    </section>
  )
}

export default MonteCesta