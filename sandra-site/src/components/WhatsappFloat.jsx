function WhatsappFloat() {

  const numero = "5511941511690"

  function abrirWhatsapp() {

    window.open(
      `https://wa.me/${numero}`,
      "_blank"
    )
  }

  return (

    <div
      className="float"
      onClick={abrirWhatsapp}
    >
      💬
    </div>

  )
}

export default WhatsappFloat