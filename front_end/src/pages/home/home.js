import { HiArrowCircleUp } from "react-icons/hi";
import { AiOutlineLoading } from "react-icons/ai";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [noticias, setnoticias] = useState([])
  const [active,setactive] = useState(false)
  const [erro,seterro] = useState(false)
  const [ openmodal, setopenmodal] = useState(false)
  const [carregando, setcarregando] = useState(false)

const active_btn = (e) => {
  const text = e.target.value;
  if (text) {
  setactive(true)
  } else{
    setactive(false)
  }
}

const check_news = () => {
    setopenmodal(true)
    setcarregando(true)
    const news = document.querySelector('#get_value_input').value.trim()
    axios 
    .get("http://127.0.0.1:8800/noticias", {
      params: {
        q: news
      }
    })
    .then((response) => {
        setnoticias(response.data.claims)
        setcarregando(false)
        console.log(response.data.claims)
    })
      .catch((error) => {
        setcarregando(false)
        seterro(true)
        console.error('Erro detalhado:', {
            status: error.response?.status,
            message: error.response?.data?.message || error.message,
            details: error.response?.data
        });
      })
}

 return (
   <div className= "w-screen h-screen">

     { openmodal && (
      <div className="absolute h-full w-full bg-black/50 flex justify-center items-center z-50">
        <div className="bg-zinc-900 w-[65%] h-[75%] rounded-xl flex items-center shadow-2xl shadow-gray-900 flex-col">
        <div className="flex items-center justify-between  w-full h-12">

            <h2 className="ml-4 text-3xl text-white">Notícias</h2>

            <button
              onClick={() => setopenmodal(false)}
              className="text-white bg-red-500 border-none mr-4 hover:bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                X
            </button>

        </div>
        <div className="flex-1 flex w-full items-center justify-center">
            {carregando ? (
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 text-white">
                    <AiOutlineLoading className = "text-5xl" />
                </div>
            ): erro ? (
              <h3 className="text-white">Não encontrei nenhuma noticia sobre isso :/</h3>
            ) : noticias ? (
              <div className="flex items-center justify-evenly h-full w-full ">
                <div className="bg-white flex items-center justify-center rounded-lg w-10 h-10 hover:bg-slate-200"><SlArrowLeft /></div>
                  <div className="bg-white h-[30%] w-[60%] p-2 rounded-lg text-center font-medium flex items-center justify-center shadow-lg ">
                      {noticias[0].claimReview[0].textualRating}
                  </div>
                <div className="bg-white flex items-center justify-center rounded-lg w-10 h-10 hover:bg-slate-200"><SlArrowRight /></div>
              </div>
            ) : ""}
        </div>
      </div>
    </div>
  )}

       <main className= "back fixed h-full w-full flex justify-center items-center z-10">
              <div className = "flex justify-center items-center w-7/12 h-4/6 rounded-3xl bg-zinc-900 box">
                <div className = "h-full w-full flex flex-col justify-center items-center">
                      <div className=" w-full h-1/2 flex flex-col justify-center items-center">
                          <h1 className ="mudar text-7xl">Fake Analysis</h1>
                          <p className ="text-white ">Qual a analise de hoje?</p>
                      </div>
                      <div className = "bg-zinc-700 rounded-xl flex flex-row justify-between items-center w-3/4 h-1/6 bs">
                        <input className= "w-5/6 h-full outline-none bg-transparent border-none text-white pl-3 text-base" placeholder="Digite o título da notícia aqui" 
                        type="text"
                        onChange={active_btn}
                        id="get_value_input"
                        >
                        </input>
                        <div className = "w-1/6 h-full flex items-center justify-center ">
                          <HiArrowCircleUp 
                          className= {`cursor-pointer text-5xl ${active ? "text-white" : " text-zinc-500 "}`}
                          onClick= {check_news}
                          />
                         </div>
                      </div>
                </div>
              </div>
        </main>

   </div>
 )
};

export default Home