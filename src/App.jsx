import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home/:id' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
