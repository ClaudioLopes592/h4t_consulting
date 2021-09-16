import styles from './QuemSomos.module.css'
import equipe from '../../img/equipe.jpg'
import carlos from '../../img/carlos.png'
import patricia from '../../img/patricia.png'

const QuemSomos = () => {

    const handleClickCarlos = () => {
        mostrarDivCarlos();
    }

    const handleClickPatricia = () => {
        mostrarDivPatricia();
    }

    function mostrarDivCarlos() {
        if (document.getElementById('te1').style.display === 'block') {
            document.getElementById('te1').style.display = 'none';
            document.getElementById('btn1').innerHTML = 'Mostrar mais';
        } else {
            document.getElementById('te1').style.display = 'block';
            document.getElementById('btn1').innerHTML = 'Mostrar menos';
        }  
    }

    function mostrarDivPatricia() {
        if (document.getElementById('te2').style.display === 'block') {
            document.getElementById('te2').style.display = 'none';
            document.getElementById('btn2').innerHTML = 'Mostrar mais';
        } else {
            document.getElementById('te2').style.display = 'block';
            document.getElementById('btn2').innerHTML = 'Mostrar menos';
        }
    }

    return (<div>
        <section className={styles.banner}>
            <div className="card text-black">
                <img src={equipe} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Quem somos</h5>
                </div>
            </div>
        </section>
        <section className={styles.quem_somos}>
            <div className="clearfix">
                <img src={carlos} className="col-md-6 float-md-start mb-3 ms-md-3" alt="Carlos Gante"/>
                <div>
                    <h2>Carlos Gante</h2>
                    <h3>Consultor, Coach e Palestrante</h3>
                    <p>
                    Formado em Engenharia Ambiental pela Universidade São Judas e Personal Coaching e Leader Coach pela Sociedade Brasileira de Coaching, Super Leader pelo Instituo Lyouman, Practitioner em PNL pela Sociedade Brasileira de PNL, além de diversos cursos de especialização.
                    </p>
                    <div className={styles.texto} id="te1">
                    <p>Experiencia de 10 anos atuando como Líder de equipe, prestando serviço para grandes empresas como: Odebrecht, VLI Logística e Iguá Saneamento.</p>
                    <p>Ao longo da carreira apoiou e treinou novos Líderes nas empresas, potencializando as habilidades individuais dos membros da equipe. Atualmente é Sócio Fundador da H4T Consulting.</p>
                    </div>
                    <button onClick={() => {handleClickCarlos()}} type="button" className="btn btn-secondary" id="btn1">Mostrar mais</button>
                </div>
            </div>
            <div className="clearfix">
                <img src={patricia} className="col-md-6 float-md-end mb-3 ms-md-3" alt="Patricia Lopes"/>
                <div className="quemsomos">
                    <h2>Patricia Lopes</h2>
                    <h3>Consultor, Coach, Analista Comportamental e Palestrante</h3>
                    <p>
                    Formada em Recursos Humanos e Turismo, pela Universidade Bandeirante de São Paulo, com especializações em Gestão de Pessoas, pela Fundação Getúlio Vargas, Análise Comportamental, Professional, Leader &amp; Executive, pela Sociedade Latino-Americana de Coaching.
                    </p>
                    <div className={styles.texto} id="te2">
                        <p>Atuando há mais de 12 anos na área de Recursos Humanos, especificamente em T&amp;D, é especialista em Desenvolvimento, Liderança e Mapeamento de Perfil Comportamental.</p>
                        <p>Neste período já ministrou treinamento para mais de 5.000 profissionais em todos os níveis hierárquicos, apoiou diversos projetos corporativos e criou centenas de conteúdos, entre eles, “O Jeito Disney de Encantar”, curso voltado para excelência no atendimento com base em lições da Disney.</p>
                    </div>
                    <button onClick={() => {handleClickPatricia()}} type="button" className="btn btn-secondary" id="btn2">Mostrar mais</button>
                </div>
            </div>
        </section>
    </div>
    )
}

export default QuemSomos