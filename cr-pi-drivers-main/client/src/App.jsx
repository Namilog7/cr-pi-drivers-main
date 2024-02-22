import Landing from './views/landing/Landing';
import {Route, Routes} from "react-router-dom";
import Home from './views/home/Home';
import Detail from "./views/detail/Detail"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detailPage' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
