import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';


/* Páginas */
import Home from './components/paginas/Home'
import SobreNos from './components/paginas/SobreNos'
import QuemSomos from './components/paginas/QuemSomos'
import OQueFazemos from './components/paginas/OQueFazemos'
import Blog from './components/paginas/Blog'
import OClienteInterno from './components/paginas/OClienteInterno';
import GestaoDePessoas from './components/paginas/GestaoDePessoas';
import AMagiaDoAtendimento from './components/paginas/AMagiaDoAtendimento';
import SeuLadoSombra from './components/paginas/SeuLadoSombra';
import Contato from './components/paginas/Contato'

import Navbar from './components/layout/Navbar';
import Contatos from './components/layout/Contatos';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sobre-nos" component={SobreNos}/>
          <Route path="/quem-somos" component={QuemSomos}/>
          <Route path="/o-que-fazemos" component={OQueFazemos}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/o-cliente-interno" component={OClienteInterno}/>
          <Route path="/gestao-de-pessoas" component={GestaoDePessoas}/>
          <Route path="/a-magia-do-atendimento" component={AMagiaDoAtendimento}/>
          <Route path="/seu-lado-sombra" component={SeuLadoSombra}/>
          <Route path="/contato" component={Contato}/>
      </Switch> 
      <Contatos/>
      <Footer />
    </Router>
  )
}

export default App;
