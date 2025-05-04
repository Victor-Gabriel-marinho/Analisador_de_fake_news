import {useState} from "react"
import axios from "axios"
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
        <div className = "flex w-auto h-5/6 items-center justify-center font-poppins font-medium bg-white">

            {vis && (<form className="flex flex-col items-center justify-center w-4/6 h-full gradient" onSubmit={handleSubmit}>
                <h2 className="text-white text-4xl font-semibold">Login</h2>

                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-white hover:opacity-70" type="text" placeholder="nome"></input>
                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-white hover:opacity-70" type="email" placeholder="Email"></input>
                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-white hover:opacity-70" type="password" placeholder="Senha"></input>

                <button className= "flex items-center justify-center p-2 bg-transparent text-white border border-solid border-white mt-1 w-32 rounded-lg cursor-pointer hover:opacity-70" type="submite">Entrar</button>
                
              <p className = "flex text-white p-2 gap-2" >Não tem uma conta?
                <button onClick = {animacao} className ="bg-transparent border-none text-white hover:underline"> cadastre-se </button>
              </p>
            </form>)}

            <div className={`flex items-center justify-center flex-col w-4/6 h-full bg-white mover ${anim ? 'troca' : ''}`} >
              <h1 className="text-red-600 text-6xl font-semibold mudar"> Fake analisys </h1>
              <p className= "text-center text-zinc-800 mt-3"> site desenvolvido para ajudar pessoas a descobrir se uma notícia é verídica ou não  </p>
            </div>

             {vis2 &&( <form className="flex flex-col items-center justify-center w-4/6 h-full gradient" onSubmit={criar_usu}>

                <h2 className="text-white text-4xl">Cadastre-se</h2>
                
                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-zinc-200 hover:bg-white hover:border-none hover:p-1.5" type="text" placeholder="nome"></input>
                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-zinc-200 hover:bg-white hover:border-none hover:p-1.5" type="email" placeholder="Email"></input>
                <input className="flex p-1 mt-2 rounded-lg border-2 border-solid decoration-none outline-none bg-transparent text-zinc-200 hover:bg-white hover:border-none hover:p-1.5" type="password" placeholder="Senha"></input>
                
                <button className= "flex items-center justify-center p-2 bg-transparent text-white border border-solid border-white mt-1 w-32 rounded-lg cursor-pointer hover:opacity-70" type="submite">cadastrar</button>
                
                <p className = "flex text-white p-2 gap-2" >ja tem uma conta? 
                  <button onClick = {animacao} className ="bg-transparent border-none text-white hover:underline"> login </button>
                </p>
              </form>)}
        </div>
      </div>
    );
  
}
  export default Login;