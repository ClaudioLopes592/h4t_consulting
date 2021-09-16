import { Link } from "react-router-dom"
import styles from './Blog.module.css'
import equipe from '../../img/equipe.jpg'
import design3 from '../../img/Design-sem-nome-3.png'
import design6 from '../../img/Design-sem-nome-6.png'
import design4 from '../../img/Design-sem-nome-4.png'
import design7 from '../../img/Design-sem-nome-7.png'

const Blog = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black">
                <img src={equipe} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Blog</h5>
                </div>
            </div>
        </section>
        <section className={styles.blog}>
            <div className="row">
                <div className="col-6">
                    <figure className="figure">
                        <img src={design3} className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption text-center">
                            <Link to="/o-cliente-interno" className={styles.link}><h4>O Cliente Interno e a Qualidade no Atendimento</h4></Link>
                            <span>24 de agosto de 2021</span>
                            <p>Na busca pela excelência do atendimento aos clientes, as empresas, primeiro precisam aprender a trabalhar com seu cliente interno. Mas quem é o cliente interno?...</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="figure">
                        <img src={design6} className="figure-img img-fluid rounded" alt="..." />
                        <figcaption className="figure-caption text-center">
                            <Link to="/gestao-de-pessoas" className={styles.link}><h4>Gestão de Pessoas em Tempos de Crise</h4></Link>
                            <span>28 de julho de 2021</span>
                            <p>Toda crise, não importa a natureza, quase sempre é mais humana que material e mais psicológica que real, isso porque nasce, de alguma forma, do...</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <figure className="figure">
                        <img src={design4} className="figure-img img-fluid rounded" alt="..." />
                        <figcaption className="figure-caption text-center">
                            <Link to="/a-magia-do-atendimento" className={styles.link}><h4>A Magia do Atendimento</h4></Link>
                            <span>17 de junho de 2021</span>
                            <p>A Magia do Atendimento é um curso onde aprendemos como a Disney, Zappos e outras empresas que atuam com base na excelência, melhoram a experiência...</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="figure">
                        <img src={design7} className="figure-img img-fluid rounded" alt="..." />
                        <figcaption className="figure-caption text-center">
                            <Link to="/seu-lado-sombra" className={styles.link}><h4>Enfrentando seu Lado Sombra</h4></Link>
                            <span>5 de maio de 2021</span>
                            <p>Você já deve ter ouvido falar que todas as pessoas possuem um lado agre e outro doce, ou um lado sol e outro sombra, não...</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Blog