import { createContext, useContext, useState } from "react"

const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([])

  function adicionarItem(nome, imagem) {
    setItens(prev => {
      const existe = prev.find(i => i.nome === nome)
      if (existe) {
        return prev.map(i =>
          i.nome === nome ? { ...i, qtd: i.qtd + 1 } : i
        )
      }
      return [...prev, { nome, imagem, qtd: 1 }]
    })
  }

  function removerItem(nome) {
    setItens(prev => prev.filter(i => i.nome !== nome))
  }

  function alterarQtd(nome, delta) {
    setItens(prev =>
      prev
        .map(i => i.nome === nome ? { ...i, qtd: i.qtd + delta } : i)
        .filter(i => i.qtd > 0)
    )
  }

  function limparCarrinho() {
    setItens([])
  }

  const total = itens.reduce((acc, i) => acc + i.qtd, 0)

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, alterarQtd, limparCarrinho, total }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  return useContext(CarrinhoContext)
}
