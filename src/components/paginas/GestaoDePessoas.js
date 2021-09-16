import styles from './GestaoDePessoas.module.css'
import gestao from '../../img/Design-sem-nome-6.png'

const GestaoDePessoas = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black border-0">
                <img src={gestao} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">GESTÃO DE PESSOAS EM TEMPOS DE CRISE</h5>
                </div>
            </div>
        </section>
        <section className={styles.gestao}>
            <div className="row">
                <div className="col-6">
                <a href="/#" className={styles.icone_1}><i className="fas fa-podcast"></i>por H4T Consulting</a>
                </div>
                <div className="col-6">
                <a href="/#" className={styles.icone_2}><i className="fas fa-calendar"></i>publicado em 28/07/2021</a>
                </div>
            </div>
                <p>Toda crise, não importa a natureza, quase sempre é mais humana que material e mais psicológica que real, isso porque nasce, de alguma forma, do confronto de valores humanos”. Então, não há como separar dela o homem e suas condições, por isso quando uma crise chega a uma organização, antes de fazer estragos financeiros, afeta primeiramente as pessoas.</p>
                <p>Durante este período de instabilidade é um momento delicado, muitas vezes com demissões, cortes de custos e otimização nos processos de trabalho, o gerenciamento de pessoas surge como uma ferramenta importante para reduzir os impactos desta situação.</p>
                <p>Então, quais são os desafios na Gestão de Pessoas em tempos de crise?</p>
                <h4>GESTÃO HUMANIZADA</h4>
                <p>O primeiro desafio está em promover uma gestão humanizada. Isso significa que, além do foco estratégico, deve-se levar em consideração os relacionamentos dentro da organização.</p>
                <p>Em tempos de crise, isso torna-se ainda mais importante, afinal as pessoas estão mais fragilizadas, precisando de conforto e compreensão. É nesse momento, que o gestor precisa conhecer seu time e entender a real necessidade de cada um.</p>
                <p>Uma gestão humanizada não é gerenciar a equipe, mas gerenciar as pessoas que a compõe.</p>
                <h4>MOTIVAÇÃO SEM CUSTO EXTRA</h4>
                <p>A maioria dos gestores acreditam que para manter seu time engajado e motivado, precisam dar aumentos de salário, bonificações ou benefícios extras. Tudo isso é muito importante, mas nem sempre é o que vai melhorar a performance do colaborador.</p>
                <p>No momento em que a crise se instala e com ela vem a redução de custos, o gestor se vê impossibilitado de motivar seu time, e, é aí que a empresa perde seus talentos!</p>
                <p>Por isso, a gestão de pessoas ideal está no envolver, capacitar, conscientizar e evidenciar o potencial da equipe. Palavras e gestos simples, como uma conversa aberta e clara, fazem toda a diferença no momento de tantas incertezas. E acredite, é possível motivar sem custos extras, basta mudar o <em>mindset</em> e reorganizar os processos.</p>
                <h4>RESILIÊNCIA É FUNDAMENTAL</h4>
                <p>O cenário de instabilidade política e econômica que vivemos pode ser como uma venda nos olhos das organizações, que acabam não sabendo direito para qual rumo as mudanças as levarão, e por isso a necessidade de resiliência, que é a capacidade de retorno ao estado original, ou seja, no universo corporativo significa até que ponto as pessoas que compõe a organização conseguem superar uma crise e se adaptar às mudanças impostas por ela, sendo agentes transformadores do meio em que estão inseridos.</p>
                <p>Diante disso, o gerenciamento de pessoas precisa que haja a estruturação de um bom ambiente organizacional, onde o líder é o primeiro a ser resiliente e assim dar exemplo ao time.</p>
                <h4>RELAÇÃO DE TRANSPARÊNCIA</h4>
                <p>Outro grande desafio é manter uma relação de transparência e confiança entre gestores e equipe. Ao construir essa relação, todos entendem o que a companhia espera de cada um e podem ajudar em momentos difíceis. Por natureza, em tempos de crise, facilmente as <em>fake news</em> se espalham e o clima pesado se estabelece, por isso a transparência na divulgação das informações é essencial. A omissão de momentos difíceis, gera desconfiança e tensão entre as pessoas, prejudicando o bom desempenho das funções, além de afetar a imagem da organização diante de outros públicos.</p>
                <p>Neste momento é fundamental a propagação de uma boa cultura organizacional, onde todos entendem o propósito e valores da companhia, e estão alinhados com ele, é o primeiro passo.</p>
                <h4>INOVAR É PRECISO</h4>
                <p>O receio da crise engaja as pessoas, essa é a hora de aproveitar os talentos!</p>
                <p>Colaboradores com receio de perder seus empregos saem da zona de conforto e realizam um algo a mais, a fim de evidenciar a sua importância para a empresa. Mudar processos, eliminar retrabalhos e redefinição de tarefas, costumam ser bem aceitos neste momento.</p>
                <p>A crise faz as organizações olharem para dentro e identificar o que pode ser otimizado nos processos e melhorado.</p>
                <p>Implante mudanças!</p>
                <h4>NÃO EVITAR O INEVITÁVEL</h4>
                <p>Em um cenário de crise, poderá ser necessário tomar medidas drásticas como promover férias coletivas, remanejo interno e, provavelmente, corte de pessoas.</p>
                <p>Fique atento para que a comunicação com a equipe seja clara e não tome essas medidas por etapas, isso causa pânico e o clima de terror se instala na companhia. Escolha um determinado dia ou semana, analise bem quem são as pessoas chaves do negócio e utilize critério. Após as implantações, reúna a equipe e reforce a importância do engajamento de todos os profissionais.</p>
                <p>Tempos de crise sempre existiram e continuaram a existir, sendo assim, o desespero e a falta de preparo faz com que ações erradas causem danos, muitas vezes irreversíveis na organização.</p>
                <p>Para evitar isso, é preciso uma gestão focada em ações estratégicas que mantenham a saúde financeira da empresa, mas sem esquecer das pessoas. É importante olhar para os colaboradores como indivíduos que também estão sofrendo com a crise, humanizar esse processo faz toda a diferença para superar mais esta etapa!</p>
                <h5>Por Patricia Lopes</h5>
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

export default GestaoDePessoas