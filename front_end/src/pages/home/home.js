import { HiArrowCircleUp } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [noticias, setnoticias] = useState([])
  const [carregando, setcarregando] = useState(false)
  const [query, setquery] = useState('')




 return (
   <div className= "flex flex-col  h-screen ">
      <div className="flex flex-1">

        <main className= "back flex-1 flex justify-center items-center">
              <div className = "flex justify-center items-center w-7/12 h-4/6 rounded-3xl bg-zinc-900 box">
                <div className = "h-full w-full flex flex-col justify-center items-center">
                      <div className=" w-full h-1/2 flex flex-col justify-center items-center">
                          <h1 className ="mudar text-7xl">Fake Analysis</h1>
                          <p className ="text-white ">Qual a analise de hoje?</p>
                      </div>
                      <div className = "bg-zinc-700 rounded-xl flex flex-row justify-between items-center w-3/4 h-1/6 bs">
                        <input className= "w-5/6 h-full outline-none bg-transparent border-none text-white pl-3 text-base" placeholder="Digite o título da notícia aqui" 
                        type="text"
                        onChange={(e) => {setquery(e.target.value)}}
                        >
                        </input>
                        <div className = "w-1/6 h-full flex items-center justify-center ">
                          <HiArrowCircleUp className= "cursor-pointer text-5xl text-zinc-500" />
                         </div>
                      </div>
                </div>
              </div>
        </main>
      </div>
   </div>
 )
};

export default Home