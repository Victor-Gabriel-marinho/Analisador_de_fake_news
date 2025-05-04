const Home = () => {
 return (
   <div className= "flex flex-col  h-screen">
      <div className="flex flex-1">
        <aside className= "">
          <img src = "front_end\src\images\logo.png" ></img>
        </aside>
        <main className= "bg-blue-500 flex-1">
              Main
        </main>
      </div>
      <footer className= "bg-red-950">
          Footer
      </footer>
   </div>
 )
};

export default Home