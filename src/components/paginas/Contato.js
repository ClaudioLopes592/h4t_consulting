import styles from './Contato.module.css'
import equipe from '../../img/equipe.jpg'

const Contato = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black">
                <img src={equipe} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Contato</h5>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.form_contato}>
                <h1 className="display-4"><i className="fa fa-paper-plane" aria-hidden="true"></i>Fale conosco</h1>
                <p>Possui alguma dúvida ou gostaria de nos enviar uma mensagem? Fique à vontade!</p>
                <div className="row justify-content-center">
                    <form action="">
                        <div className="form-row">
                            <div className="form-group col-sm">
                                <input type="text" className="form-control" placeholder="Digite seu nome" />
                            </div>
                            <div className="form-group col-sm">
                                <input type="text" className="form-control" placeholder="Digite seu email" />
                            </div>
                            <div className="form-group col-sm">
                                <input type="phone" className="form-control" placeholder="Digite seu telefone" />     
                            </div>
                            <div className="form-group col-sm">
                                <textarea name="mensagem" placeholder="Digite sua mensagem" cols="50" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" id="btn-enviar">Enviar Mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
        
    )
}

export default Contato