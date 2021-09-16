import styles from './OClienteInterno.module.css'
import cliente from '../../img/Design-sem-nome-3.png'

const OClienteInterno = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black border-0">
                <img src={cliente} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">O CLIENTE INTERNO E A QUALIDADE NO ATENDIMENTO</h5>
                </div>
            </div>
        </section>
        <section className={styles.cliente}>
        <div className="row">
            <div className="col-6">
            <a href="/#" className={styles.icone_1}><i className="fas fa-podcast"></i>por H4T Consulting</a>
            </div>
            <div className="col-6">
            <a href="/#" className={styles.icone_2}><i className="fas fa-calendar"></i>publicado em 24/08/2021</a>
            </div>
        </div>
            <p>Na busca pela excelência do atendimento aos clientes, as empresas, primeiro precisam aprender a trabalhar com seu cliente interno. Mas quem é o cliente interno? O cliente interno são todos os colaboradores (trabalhadores da empresa) e mais os representantes e fornecedores dos produtos que serão comercializados ou revendidos nessa empresa, como lojas, restaurantes e etc.</p>
            <p>Vocês com certeza já ouviram a expressão máxima, até como uma certa regra nos meios comerciais de que “O cliente tem sempre a razão”, desde que o cliente tenha razão, é claro.</p>
            <p>Esta máxima vem da necessidade de uma verdadeira melhora contínua no resultado final da satisfação do cliente com o produto que esta consumindo, e isto esta ligado diretamente com o atendimento do cliente interno para o cliente externo, ou seja, dos funcionários da empresa para os visitantes do comércio, os clientes.</p>
            <p>Para se obter este resultado é muito importante que o cliente interno esteja satisfeito com o seu trabalho e empenhado em conseguir bons números para sua empresa. Espírito de equipe e respeito mútuo também são fundamentais para o sucesso deste time. Quando todos estão trabalhando em equipe e focados num bom resultado final, os números positivos com certeza aparecem.</p>
            <p>Mas não é tão simples assim, pois em um ambiente de trabalho onde muitas pessoas desenvolvem suas tarefas, é normal que existam conflitos e desencontros de ideias, mas como contornar isso?</p>
            <p>Primeiramente necessita que cada colaborador tenha bem claro em sua mente suas funções e reais objetivos, sem egocentrismo e/ou individualismo. Quando o ambiente de trabalho é bom isso reflete no atendimento ao cliente, onde todos estão empenhados em solucionar problemas e devolver em satisfação total ao cliente final.</p>
            <p>Então por isso trate bem seu companheiro de trabalho com respeito e empatia, para que ai sim conquiste sua confiança estabelecendo um real espírito de equipe e obtenha sucesso no atendimento ao cliente.</p>
            <h5>Por Rogério Ramos</h5>
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

export default OClienteInterno