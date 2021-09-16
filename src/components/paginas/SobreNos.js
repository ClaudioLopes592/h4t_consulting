import styles from './SobreNos.module.css'
import equipe from '../../img/equipe.jpg'

const SobreNos = () => {
    return(<div>
            <section className={styles.banner}>
                <div className="card border-0">
                        <img src={equipe} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Sobre nós</h5>
                    </div>
                </div>
            </section>
            <section className={styles.banner}>
                <p>Será que foi o destino? Talvez! Iniciamos nossa trajetória com a certeza de que tudo foi pensado e cada detalhe ajustado milimetricamente. Queremos elevar o patamar do atendimento, para que pessoas e organizações possam trabalhar seu projeto com qualidade e clareza, através da parceria e envolvimento seguiremos juntos de mãos dadas nessa jornada.</p>
                <p>Oferecemos serviços customizados para os nossos clientes, afinal acreditamos que entendendo a sua necessidade, conseguimos nos adequar ao seu projeto – propondo a melhor solução.</p>
                <p>Todos os dias milhares de clientes precisam de serviços para suprir uma necessidade ou uma dor. Há um tempo percebemos que o nosso propósito está na visão humanizada nas relações interpessoais, e isso é colocado em prática todos os dias. A partir dessa ideia surge a H4T Consulting, empresa que nasceu grande pela expertise e propósito dos seus fundadores. Acreditamos na transformação através da humanização, por isso apoiamos na mudança de mindset e comportamento.</p>
                <h4>Propósito</h4>
                <p>Apoiamos pessoas e organizações a alcançarem seus resultados através de uma transformação humanizada, com o despertar da consciência, das competências e dos comportamentos que levem a esse patamar.</p>
                <h4>Para quem fazemos:</h4>
                <ul>
                    <li>Pessoas que procurem desenvolvimento pessoal</li>
                    <li>Para profissionais e organizações que busquem transformação através das pessoas.</li>
                    <li>Potencializar as habilidades de nossos clientes.</li>
                </ul>
                <p>Portanto, onde há pessoas e relacionamentos, há espaço para uma transformação humanizada!</p>
            </section>
        </div>
    )
}

export default SobreNos