import './App.css'
import { Routes , Route } from "react-router-dom"
import Navbar from './Navbar'

function App() {
 

  return (
    <>
<Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="article/*" element={<ArticleDetails />}></Route>
      <Route path='/music' element={<ArticleList category={`music`} />}></Route>
      <Route path='/sports' element={<ArticleList category={`sports`} />}></Route>
      <Route path='/games' element={<ArticleList category={`games`} />}></Route>
      <Route path='/travel' element={<ArticleList category={`travel`} />}></Route>
     </Routes>
     </>
  )
}

export default App
