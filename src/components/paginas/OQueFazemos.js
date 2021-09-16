import styles from './OQueFazemos.module.css'
import equipe from '../../img/equipe.jpg'
import brasao from '../../img/Brasao.jpeg'
import slac from '../../img/SLAC.jpeg'

const OQueFazemos = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black">
                <img src={equipe} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">O Que Fazemos</h5>
                </div>
            </div>
        </section>
        <section className={styles.o_que_fazemos}>
            <p>Atuamos com o desenvolvimento de talentos, sejam eles nas organizações ou individualmente. Proporcionamos capacitações através de cursos online ou EAD (ensino à distância com instrutor ao vivo), treinamentos customizados de acordo com a necessidade de cada equipe, mentoria online individual ou em grupo, assessments para o mapeamento de perfil comportamental e Coaching para o desenvolvimento de competências e comportamentos.</p>
        </section>
        <section className={styles.accordion}>
            <div className="accordion">
                <div className="accordion-item border bg-light">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="fas fa-comment fa-2x"></i>Cursos
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body"><p>Oferecemos cursos Comportamentais, Liderança, Atendimento ao Cliente e muitos outros. Conteúdos dinâmicos, exclusivos e atuais, que atende a necessidade de qualquer público, sem a necessidade de um pré-requisito. Os cursos são entregues em formato de Curso Online, EAD (Ensino à Distância), Palestras e Workshops.</p></div>
                    <button type="button" className={styles.botao1}><i className="fas fa-book fa-2x"></i><p>Cursos Online</p></button>
                    <button type="button" className={styles.botao2}><i className="fas fa-calendar-alt fa-2x"></i><p>Agenda de Cursos</p></button>
                    </div>
                </div>
                <div className="accordion-item border bg-light">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-book fa-2x"></i>Treinamentos
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                    <div className="accordion-body"><p>Construímos o treinamento de acordo com as necessidades da demanda. Focamos no comportamental, pois acreditamos que é o aspecto que sustenta a competência dos profissionais. Trabalhamos apoiados na metodologia 6D’s trazendo alinhando os conceitos a prática, por isso trazemos os resultados à organização.</p>
                    <h5>Desenvolvemos:</h5>
                    <ul>
                        <li>Treinamentos Comportamentais</li>
                        <li>Liderança</li>
                        <li>Vendas</li>
                    </ul>
                    <h5>Temas que são customizados a sua realidade:</h5>
                    <ul>
                        <li>Comunicação Não-Violenta</li>
                        <li>Feedback Assertivo</li>
                        <li>Inteligência Emocional</li>
                        <li>Estilos Comportamentais</li>
                        <li>Gestão de Conflitos</li>
                        <li>Gestão do Tempo</li>
                        <li>Atendimento ao Cliente</li>
                        <li>Entre muitos outros</li>
                    </ul>
                    <h5>Apresentamos o programa de maneira presencial ou à distância, nos formatos:</h5>
                    <ul>
                        <li>Team Building</li>
                        <li>Curso</li>
                        <li>Workshop</li>
                        <li>Palestras</li>
                        <li>Focus Group</li>
                    </ul>
                    <h4>COMO TRABALHAMOS</h4>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 textos">
                        <div className="col">
                            <div className={styles.um}>
                                <span>1.</span>
                                <p>Entendimento da demanda</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.um}><p>Alinhamento das necessidades de Treinamento a Estratégia</p><span>2.</span></div>
                        </div>
                        <div className="col">
                            <div className={styles.um}><span>3.</span><p>Produção do material (e-book, apresentações, pocket guide, etc)</p></div>
                        </div>
                        <div className="col">
                            <div className={styles.um}><p>Aplicação do Treinamento</p><span>4.</span></div>
                        </div>
                        <div className="col">
                            <div className={styles.um}><span>5.</span><p>Avaliação de Resultados e entrega de relatório final</p></div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="accordion-item border bg-light">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <i className="fas fa-globe fa-2x"></i>Mentoria OnLine
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <p>Ter um mentor ou mentores é muito importante em nossas vidas em todos os âmbitos. Os mentores são pessoas que já trilharam caminhos semelhantes aos que planejamos para nós. Eles podem nos ajudar, pois já conhecem os obstáculos e desafios que podem surgir ao longo dessa trilha.</p>
                        <p>Essa relação entre mentores e mentorados traz muitos benefícios aos profissionais que buscam se preparar para enfrentar os desafios da carreira de Líder, entre eles:</p>
                        <ul>
                            <li>Receber respostas e orientações sensatas de pessoas com expertise no assunto;
                            </li>
                            <li>Ampliar o conhecimento em métodos e estratégias de aperfeiçoamento de carreira, voltado para o perfil de cada profissional, considerando suas necessidades e objetivos;</li>
                            <li>Conhecer novos profissionais, aumentando sua rede de contatos;</li>
                            <li>Ter uma perspectiva diferente e um olhar mais abrangente da carreira, ou seja, alguém de fora para propor reflexões e até soluções, até então impensadas.</li>
                        </ul>
                        <p>Nossa mentoria online destina-se a pessoas que gostariam de apoio em sua carreira como líder. Trabalhamos em formato 100% online em duas divisões, mentorias individuais ou em grupos com o mesmo objetivo.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item border bg-light">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <i className="fas fa-map-marked-alt fa-2x"></i>Mapeamento de Perfil Comportamental
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <p>A análise comportamental é o levantamento dos comportamentos predominantes de um indivíduo, bem como de seus motivadores. Estuda as características presentes em cada um de nós e a forma como reagimos a estímulos e agimos diante das mais variadas situações da vida.</p>
                        <h5>O Mapeamento comportamental vai além da análise, ele envolve:</h5>
                        <ol>
                            <li>Definição do objetivo;</li>
                            <li>Aplicação dos assessments (testes para avaliar os perfis predominantes);</li>
                            <li>Devolutiva, ou seja, o entendimento das informações que estão no relatório. Compreensão dos pontos fortes e das oportunidades de melhoria;</li>
                            <li>Elaboração de um Plano de Desenvolvimento Individual.</li>
                        </ol>
                        <h5>No Mapeamento Comportamental é possível identificar:</h5>
                        <ul>
                            <li>Comportamentos e emoções observáveis;</li>
                            <li>Tendência de “como” fazer as coisas e reagir a pressão;</li>
                            <li>Forma de se expressar e preferências relacionais;</li>
                            <li>Necessidade emocionais, possíveis medos e situações desmotivadoras;</li>
                            <li>Fatores de motivação tanto profissionais como pessoais;</li>
                            <li>Ambientes e atividades favoráveis para o melhor desempenho;</li>
                            <li>Pontos fortes e de melhoria.</li>
                        </ul>
                        <h5>Por que realizar um Mapeamento de Perfil Comportamental?</h5>
                        <p>Porque é o primeiro passo de qualquer processo de desenvolvimento, é natural do ser humano querer saber sobre si de uma forma rápida e efetiva.</p>
                        <p>Índice de validação dos assessments: 97%</p>
                        <span>*Estudo feito pela Universidade Federal de Minas Gerais - UFMG</span>
                    </div>
                    </div>
                </div>
                <div className="accordion-item border bg-light">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    <i className="fas fa-user-tie fa-2x"></i>Coaching
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <p>Somos apaixonados pelo desenvolvimento de pessoas e o Coaching apoia nesse processo.</p>
                        <p>Aumentar sua autoconfiança, desenvolver a competência de liderança, romper crenças limitantes, potencializar habilidades, estimular a resiliência e apoiar a transição de carreira, são alguns dos campos que será trabalhado no Coaching.</p>
                        <p>Utilizamos a metodologia de duas instituições renomadas a Sociedade Latino-Americana de Coaching e a Sociedade Brasileira de Coaching, ambas com certificações internacionais.</p>
                        <img className={styles.brasao} src={brasao} alt="logotipo Brasão" />
                        <img className={styles.slac} src={slac} alt="logotipo SLAC" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>  
    )
}

export default OQueFazemos