import LinkNX from "../src/components/Link"
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import LogoCompleta from '../public/LogoCompletaUp'
import ConteudoCadastro from '../src/components/ConteudoCadastro'

export default function Registro() {
    return (
        <div>
            <LogoCompleta classe={styles.logo} />
            <ConteudoCadastro classeDiv={styles.white} titulo="Cadastro" href='/login' tipo='submit' nomeLink='Enviar' formatacao='btn btn-lg m-1 btn-primary' />
        </div>
    )
}