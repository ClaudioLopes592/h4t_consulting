import styles from './AMagiaDoAtendimento.module.css'
import magia from '../../img/Design-sem-nome-4.png'
import beach from '../../img/beach.jpg'
import beach_lounge from '../../img/beach_lounge.jpg'
import beach_treinamento from '../../img/beach_treinamento.jpg'

const AMagiaDoAtendimento = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black border-0">
                <img src={magia} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">A MAGIA DO ATENDIMENTO</h5>
                </div>
            </div>
        </section>
        <section className={styles.magia}>
        <div className="row">
            <div className="col-6">
            <a href="/#" className={styles.icone_1}><i className="fas fa-podcast"></i>por H4T Consulting</a>
            </div>
            <div className="col-6">
            <a href="/#" className={styles.icone_2}><i className="fas fa-calendar"></i>publicado em 17/06/2021</a>
            </div>
        </div>
            <p>A <strong>Magia do Atendimento</strong> é um curso onde aprendemos como a Disney, Zappos e outras empresas que atuam com base na excelência, melhoram a experiência de seus clientes.</p>
            <p>Através de algumas lições que Walt Disney nos deixou, tomamos conhecimento que independente da função ou área de atuação, devemos buscar a excelência no atendimento e encantar nossos clientes!</p>
            <p>No dia 30/5/21 os colaboradores do Beach Lounge, restaurante de Praia Grande/SP, participaram dessa magia e se tornaram Especialista em Encantamento.</p>
            <div className="card-group">
                <div className={styles.card_1}>
                    <img src={beach} className="card-img-top" alt="..."/>
                </div>
                <div className={styles.card_2}>
                    <img src={beach_lounge} className="card-img-top" alt="..."/>
                </div>
                <div className={styles.card_3}>
                    <img src={beach_treinamento} className="card-img-top" alt="..."/> 
                </div>
            </div>
        </section>
        <section className={styles.social}>
            <div className="row">
                <div className="col-4">
                    <h3>Compartilhe</h3>
                </div>
                <div className="col-4">
                    <hr />  
                </div>
                <div className="col-4">
                    <a href="https://pt-br.facebook.com/" className={styles.facebook} rel="noreferrer" target="_blank"><i className="fab fa-facebook fa-2x"/></a>
                    <a href="https://twitter.com/" className={styles.twitter} rel="noreferrer" target="_blank"><i className="fab fa-twitter fa-2x"/></a>
                    <a href="https://web.whatsapp.com/" className={styles.whatsapp} rel="noreferrer" target="_blank"><i className="fab fa-whatsapp fa-2x"/></a>  
                </div>
            </div>
        </section>
    </div>)
}

export default AMagiaDoAtendimento