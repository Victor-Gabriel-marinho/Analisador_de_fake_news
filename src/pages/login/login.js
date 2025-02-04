import "./login.css";

function App() {
    return (
      <div className="App">
        <container className = "container">
            <form className="form">
                <h2 className="nome">Login</h2>
                <input className="campo" type="email" placeholder="Email"></input>
                <input className="campo" type="password" placeholder="Senha"></input>
                <button className= "butao" type="button">Logar</button>
              <p className = "texto" >Não tem uma conta? <spa className ="cadastro"> cadastre-se </spa></p>
            </form>
            <div className="conteudo">
              <div className ="circulo"></div>
              <div className="circulo"></div>
              <div className="circulo"></div>
              <div className="circulo"></div>
              <div className="circulo"></div> 
              <h1 className="titulo"> Fake analisys </h1>
              <p className= "detalhe"> site desenvolvido para ajudar pessoas a descobrir se uma notícia é verídica ou não  </p>
            </div>
        </container>
      </div>
    );
  }
  
  export default App;  