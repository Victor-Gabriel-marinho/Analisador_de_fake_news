import {useState} from "react"
import "./login.css";

function App() {
  const [anim, setanim] = useState(false)
  const [vis, setvis] = useState(true)
  const [vis2, setvis2] = useState(false)
  const animacao = (e) => {
    e.preventDefault();

    setvis(!vis)
    setvis2(!vis2)

    setanim(true);
    if (anim) setanim(false)
  }


    return (
      <div className="App">
        <div className = "container">

            {vis && (<form className="form" >
                <h2 className="nome">Login</h2>
                <input className="campo" type="email" placeholder="Email"></input>
                <input className="campo" type="password" placeholder="Senha"></input>
                <button className= "butao" type="button">Logar</button>
              <p className = "texto" >Não tem uma conta? <button onClick = {animacao} className ="cadastro_btn"> cadastre-se </button>  </p>
            </form>)}

            <div className={`conteudo ${anim ? 'troca' : ''}`} >
              <h1 className="titulo"> Fake analisys </h1>
              <p className= "detalhe"> site desenvolvido para ajudar pessoas a descobrir se uma notícia é verídica ou não  </p>
            </div>

             {vis2 &&( <form className="cadastrar">
                <h2 className="nome">Cadastre-se</h2>
                <input className="campo" type="email" placeholder="Email"></input>
                <input className="campo" type="password" placeholder="Senha"></input>
                <button className= "butao" type="button">cadastrar</button>
                <p className = "texto" >ja tem uma conta? <button onClick = {animacao} className ="cadastro_btn"> login </button>  </p>
              </form>)}
        </div>
      </div>
    );
  }
  
  export default App;  