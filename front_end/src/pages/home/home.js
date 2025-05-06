import { GoArrowRight } from "react-icons/go";
import { HiArrowCircleUp } from "react-icons/hi";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
 return (
   <div className= "flex flex-col  h-screen">
      <div className="flex flex-1">
        <aside className= "flex flex-col justify-between w-16 bg-zinc-800">
            <div className="flex flex-col items-center justify-center">
                <div className ="text-zinc-400 w-full h-20 flex justify-center items-center cursor-pointer text-4xl"><FaMagnifyingGlass /></div>
                <div className ="flex justify-center items-center h-24 w-14 text-3xl cursor-pointer text-zinc-500"><GoArrowRight /></div>
            </div>
            <div className = "bg-white h-16 rounded-[100%] z-0">
              
            </div>
        </aside>
        <main className= "bg-zinc-900 flex-1 flex justify-center items-center">
              <div className = "w-7/12 h-3/6 flex flex-col justify-center items-center">
                    <div className=" w-full h-1/2 flex flex-col justify-center items-center">
                        <h1 className ="mudar text-7xl">Fake Analisys</h1>
                        <p className ="text-white">Qual a analise de hoje?</p>
                    </div>
                    <div className = "bg-zinc-700 rounded-xl flex flex-row justify-between items-center w-3/4 h-1/4">
                      <input className= "w-5/6 h-1/2 outline-none bg-transparent border-none text-white m-1" type="text"></input>
                      <div className = "w-1/6 flex items-center justify-center "> <HiArrowCircleUp className= "cursor-pointer text-5xl text-zinc-500" /> </div>
                    </div>
              </div>
        </main>
      </div>
   </div>
 )
};

export default Home