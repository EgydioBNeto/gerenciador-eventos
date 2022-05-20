import styles from '../styles/Home.module.css'
import LogoCompleta from '../public/LogoCompletaUp'
import 'bootstrap/dist/css/bootstrap.css'
import ConteudoHomePage from '../src/components/ConteudoHomePage'



export default function Home() {
  return (
    <div>
      <LogoCompleta classe={styles.logo} />

      <ConteudoHomePage classeDiv={styles.blue} titulo="Bem vindo!" formatacao="btn btn-light btn-lg m-1" href="/login" nomeLink="Entrar" formatacao1="btn btn-light btn-lg m-1" href1="/registro" nomeLink1="Registrar-se" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />

    </div>
  )
}
