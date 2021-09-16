import styles from './Contatos.module.css'

import contatos from '../../img/rodape.png'

const Contatos = () => {
    return (<div className={styles.contatos}>
            <div className="card text-black border-0">
                <img src={contatos} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Entre em contato conosco</h5>
                    <ul>
                        <li><i className="fas fa-envelope fa-1x"></i><a href="/">contato@h4tconsulting.com.br</a></li>
                        <li><i className="fab fa-instagram fa-1x"></i><a href="/#">@h4t_consulting</a></li>
                        <li><i className="fab fa-facebook-f fa-1x"></i><a href="/#">@h4t.consulting</a></li>
                        <li><i className="fas fa-phone-alt fa-1x"></i><a href="/#">(13)97422-2409</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contatos