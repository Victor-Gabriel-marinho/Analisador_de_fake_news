import {useState} from "react"
import axios from "axios"
import "./login.css";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [anim, setanim] = useState(false)
  const [vis, setvis] = useState(true)
  const [vis2, setvis2] = useState(false)
  const navigate = useNavigate()

  const animacao = (e) => {
    e.preventDefault();

    setvis(!vis)
    setvis2(!vis2)
    setanim(!anim)
  }
  
  const criar_usu = (event) => {
    event.preventDefault()

    const user = {
      "nome": event.target[0].value,
      "email": event.target[1].value,
      "senha": event.target[2].value,
    }
    

    axios
      .post("http://127.0.0.1:8800/criar", user)
      .then( () => {
        console.log("sucesso ao criar o usuário")
        navigate('/')
      })
      .catch( (Error) => {
        console.log("erro ao criar o usuário", Error)
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      "nome": e.target[0].value,
      "email": e.target[1].value,
      "senha": e.target[2].value,
    }
    axios
      .get("http://127.0.0.1:8800/validar", user)
      .then((response) => {
          console.log("usuario encontrado", response.data)
          navigate('/')
        })
      .catch((Error) => {
        console.log("erro ao encontrar usu", Error)
      })
  }

    return (
      <div className="App w-screen h-screen bg-fundo flex items-center justify-center">
        <div className = "flex w-auto h-5/6 items-center justify-center font-poppins">

            {vis && (<form className="flex flex-col items-center justify-center w-4/6 h-full gradient" onSubmit={handleSubmit}>
                <h2 className="text-white text-4xl">Login</h2>

                <input className="flex p-1 mt-1 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-black hover:bg-white hover:border-none hover:p-1.5" type="text" placeholder="nome"></input>
                <input className="flex p-1 mt-1 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-black hover:bg-white hover:border-none hover:p-1.5" type="email" placeholder="Email"></input>
                <input className="flex p-1 mt-1 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-black hover:bg-white hover:border-none hover:p-1.5" type="password" placeholder="Senha"></input>

                <button className= "flex items-center justify-center p-2 text-white border border-solid border-white mt-1 w-32 rounded-lg cursor-pointer" type="submite">Logar</button>
                
              <p className = "texto" >Não tem uma conta?
                <button onClick = {animacao} className ="cadastro_btn"> cadastre-se </button>
              </p>
            </form>)}

            <div className={`conteudo ${anim ? 'troca' : ''}`} >
              <h1 className="titulo"> Fake analisys </h1>
              <p className= "detalhe"> site desenvolvido para ajudar pessoas a descobrir se uma notícia é verídica ou não  </p>
            </div>

             {vis2 &&( <form className="cadastrar" onSubmit={criar_usu}>

                <h2 className="nome">Cadastre-se</h2>
                
                <input className="campo" type="text" placeholder="nome"></input>
                <input className="campo" type="email" placeholder="Email"></input>
                <input className="campo" type="password" placeholder="Senha"></input>
                <button className= "botao" type="submite">cadastrar</button>
                <p className = "texto" >ja tem uma conta? 
                  <button onClick = {animacao} className ="cadastro_btn"> login </button>
                </p>
              </form>)}
        </div>
      </div>
    );
  
}
  export default Login;