import styles from './Home.module.css'

import Paty from '../video/paty.mp4'
import sala from '../../img/sala.jpg'
import foto1 from '../../img/foto1.png'
import foto2 from '../../img/foto2.png'
import foto3 from '../../img/foto3.png'
import foto4 from '../../img/foto4.png'

const Home = () => {
    return (<>
        <section className={styles.home_container}>
            <div>
                <video autoPlay loop muted >
                    <source src={Paty} type="video/mp4"/>
                </video>
                <div className="card text-white">
                    <img src={sala} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title">O QUE FAZEMOS ?</h5>
                      <p className="card-text">Atuamos com o desenvolvimento de talentos,<br /> sejam eles nas organizações ou<br /> individualmente.</p>
                      <button type="button" className="btn btn-warning"><a href="/o-que-fazemos">Saiba mais</a></button>
                  </div>
              </div>
                <h2>Blog</h2>
            </div>
        </section>
        <section className={styles.home_blog}>
        <div className="card-group p-3">
            <div className="card m-3 text-center border-0">
              <img src={foto1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><a href="/o-cliente-interno">O Cliente Interno e a Qualidade no Atendimento</a></h5>
              </div>
            </div>
            <div className="card m-3 text-center border-0">
              <img src={foto2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><a href="/gestao-de-pessoas">Gestão de Pessoas em Tempo de Crise</a></h5>
              </div>
            </div>
            <div className="card m-3 text-center border-0">
              <img src={foto3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><a href="/a-magia-do-atendimento">A Mágia do Atendimento</a></h5>
              </div>
            </div>
            <div className="card m-3 text-center border-0">
                <img src={foto4} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><a href="/seu-lado-sombra">Enfrentando seu Lado Sombra</a></h5>
                </div>
              </div>
          </div>
        </section>
    </>
    )
}

export default Home