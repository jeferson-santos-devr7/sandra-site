function Header() {
  return (
    <header className="header">
      <div className="topo">

        <img
          src="/img/LOGO PNG (1).png"
          className="logo"
        />

        <div className="topo-texto">

          <p className="slogan">
            Chinelos e Cestas Personalizadas 💖
          </p>

          <div className="botoes">

            <a
              href="https://wa.me/5511941511690"
              target="_blank"
              className="btn whatsapp"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/dan_customizados"
              target="_blank"
              className="btn instagram"
            >
              Instagram
            </a>

          </div>
        </div>

        <img
          src="/img/MASCOTE SANDRA (1).png"
          className="mascote"
        />

      </div>
    </header>
  )
}

export default Header