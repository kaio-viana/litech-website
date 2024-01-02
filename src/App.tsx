import { IonIcon } from '@ionic/react'
import { logoInstagram, mail, logoWhatsapp, logoLinkedin } from 'ionicons/icons'
import './App.css'

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img?.setAttribute("src", "logo-circle.png")
  } else {
    img?.setAttribute("src", "logo-white-circle.png")
  }
}

function App() {
  return (
    <div id="container">
      <div id="profile">
        <img
          src="logo-white-circle.png"
          alt="Logo Li Tech"
        />
        <p>@litech</p>
      </div>

      <div id="switch" onClick={() => toggleMode()}>
        <button></button>
        <span></span>
      </div>

      <ul>
        <li>
          <a href="https://instagram.com/litech" target="_blank">Instagram </a>
        </li>

        <li>
          <a href="https://api.whatsapp.com/send?phone=5511999894131" target="_blank">Whatsapp</a>
        </li>

        <li>
          <a href="mailto:contato@litech-ea.com.br" target="_blank">Email</a>
        </li>

        <li>
          <a href="tel:+5511999894131" target="_blank"
          >Telefone</a>
        </li>
      </ul>
      <div id="social-links">
        <a href="https://instagram.com/litech" target="_blank">
          <IonIcon icon={logoInstagram}></IonIcon>
        </a>

        <a href="https://api.whatsapp.com/send?phone=5511999894131" target="_blank">
          <IonIcon icon={logoWhatsapp}></IonIcon>
        </a>

        <a href="mailto:contato@litech-ea.com.br" target="_blank">
          <IonIcon icon={mail}></IonIcon>
        </a>

      </div>
    </div>
  )
}

export default App
