import { GoArrowRight } from "react-icons/go";
import { HiArrowCircleUp } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

const Home = () => {
  const [openside, setopenside] = useState(false)

  const sidebar =  (e) => {
    const click = e.tartget
    console.log(click)
    setopenside(!openside)
  }
 return (
   <div className= "flex flex-col  h-screen">
      <div className="flex flex-1">

        <aside className= {`flex items-center flex-col justify-between w-16 bg-zinc-800 ${openside ? 'abrir w-64' : 'fechar'}`}>
            <div className="flex flex-col items-center justify-center">
                <div className ="text-[#ffa304] w-full h-20 flex justify-center items-center cursor-pointer text-4xl" onClick={sidebar}><FaMagnifyingGlass /></div>
                <div className ={`flex justify-center items-center h-24 w-14 text-3xl cursor-pointer text-zinc-500 ${openside ? 'rotate-180' : ''}`} onClick={sidebar}><GoArrowRight /></div>
            </div>
            <div className = "flex justify-center items-center bg-zinc-400 h-10 w-10 mb-2 rounded-[100%] z-0">
              <FaRegUser className = "text-3xl" />
            </div>
        </aside>

        <main className= "bg-zinc-900 flex-1 flex justify-center items-center">
              <div className = "w-7/12 h-3/6 flex flex-col justify-center items-center">
                    <div className=" w-full h-1/2 flex flex-col justify-center items-center">
                        <h1 className ="mudar text-7xl">Fake Analisys</h1>
                        <p className ="text-white">Qual a analise de hoje?</p>
                    </div>
                    <div className = "bg-zinc-700 rounded-xl flex flex-row justify-between items-center w-3/4 h-1/4">
                      <input className= "w-5/6 h-full outline-none bg-transparent border-none text-white m-1 text-base" placeholder="Digite o título da notícia aqui" type="text"></input>
                      <div className = "w-1/6 h-full flex items-center justify-center "> 
                        <HiArrowCircleUp className= "cursor-pointer text-5xl text-zinc-500" />
                       </div>
                    </div>
              </div>
        </main>
      </div>
   </div>
 )
};

export default Home