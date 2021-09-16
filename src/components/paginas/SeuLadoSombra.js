import styles from './SeuLadoSombra.module.css'
import sombra from '../../img/Design-sem-nome-7.png'

const SeuLadoSombra = () => {
    return (<div>
        <section className={styles.banner}>
            <div className="card text-black border-0">
                <img src={sombra} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">ENFRENTANDO SEU LADO SOMBRA</h5>
                </div>
            </div>
        </section>
        <section className={styles.sombra}>
        <div className="row">
            <div className="col-6">
            <a href="/#" className={styles.icone_1}><i className="fas fa-podcast"></i>por H4T Consulting</a>
            </div>
            <div className="col-6">
            <a href="/#" className={styles.icone_2}><i className="fas fa-calendar"></i>publicado em 05/05/2021</a>
            </div>
        </div>
            <p>Você já deve ter ouvido falar que todas as pessoas possuem um lado agre e outro doce, ou um lado sol e outro sombra, não é mesmo?</p>
            <p>Pois é, estes termos servem apenas para nos dizer aquilo que já sabemos: Todos nós temos qualidades e defeitos. Possuímos pontos fortes e comportamentos bons, mas temos oportunidades de melhorar nossa conduta e ações.</p>
            <p>Nosso lado sombra nada mais é do que aquilo que não queremos ver. Nossos complexos, medos e tudo que escondemos consciente e inconscientemente, para nos sentirmos amados, aceitos, sociáveis, de acordo com aquilo que idealizamos para sermos “perfeitos”.</p>
            <p>A questão que prevalece é como lidamos com aquilo que nos incomoda, e como enfrentaremos estas sombras que nos acompanham diariamente.</p>
            <p>Esse lado sombra nos assusta, não gostamos de fraquezas e evitamos de todas as maneiras enfrentá-las. Ás vezes nos questionamos sobre o motivo que algo não dar certo, ou porque não atingimos nossos objetivos da maneira que esperávamos, mas não nos damos conta de que muitas vezes são nossas sombras que estão nos impedindo de evoluir.</p>
            <p>“Seu melhor amigo e seu pior inimigo moram aí, dentro de você”. Branca Barão</p>
            <p>Quando falamos de sombra, a primeira questão a ser tratada é a aceitação. Perceber que elas existem e sempre permanecerão em nossas vidas, é o primeiro passo para reconhecer que você também tem oportunidades de melhorias. Esconder as sombras é o mesmo que deixá-las na escuridão, enquanto o que trará resultados em sua vida é trazê-la para luz, ou seja, ter consciência de sua existência e trabalhar em seu desenvolvimento.</p>
            <p>Faça uma reflexão: Qual comportamento ou ação você deve ter, diferente do que já tem hoje, para atingir seus objetivos de maneira mais rápida e assertiva?</p>
            <p>Quando enxergamos a sombra e trabalhamos com ela ao invés de ir contra, brigando ou negando-a, começamos um processo interno de mudança.</p>
            <p>“É impossível haver progresso sem mudança e, quem não consegue mudar a si mesmo, não muda coisa alguma”. George Bernard Shaw</p>
            <p>Saber que dias bons e dias ruins sempre existirão em nossas vidas e, que provavelmente, serão nos dias ruins que as sombras aparecerão com facilidade, nos ajuda a entender que muitas vezes tomamos decisões precipitadas, em que depois ficamos nos perguntando por que fizemos isso e como agimos de tal forma.</p>
            <p>Precisamos entender que todas as emoções são importantes em nossa vida, e não podemos deixar de sentir raiva ou tristeza, pois são elas que nos ajudam a superar situações e caminhar para nosso desenvolvimento.</p>
            <p>O que precisamos fazer é controlar estas emoções para que elas não nos dominem, e assim minimizar os impactos das sombras em nossas ações nos tais dias ruins.</p>
            <p>Fazendo esta análise também é possível entender que não é porque temos um lado sombra que somos maus. Enfrentar a escuridão é aceitar o que somos aquilo que não gostaríamos de ser, mas somos! E o único meio de estarmos em harmonia com o que somos é nos conhecendo, perdoando e buscando a evolução.</p>
            <p>Você precisa identificar, assumir-se, adaptando-se as mudanças que quer realizar. É necessário saber para onde quer ir, sendo apenas você mesmo!</p>
            <h5>Por Patricia Lopes</h5>
        </section>
        <section className={styles.social}>
            <div className="row" id="texto-compartilhe">
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

export default SeuLadoSombra