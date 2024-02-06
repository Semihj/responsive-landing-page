import Home from "./components/Home"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <div className="bg-[#204959] min-h-screen w-screen rounded-bl-[40px] rounded-br-[40px]  " >
      <Navbar/>
      <div className="min-h-screen">
      <Home/>
     </div>
      
    </div>
  )
}

export default App
