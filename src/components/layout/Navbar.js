import styles from './Navbar.module.css'
import logo from '../../img/h4t-logo-site.png'

const Navbar = () => {
    return (<div className={styles.navbar}>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre-nos">Sobre nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/quem-somos">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/o-que-fazemos">O que fazemos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Navbar;