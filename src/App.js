import './App.css';
// import {Link, NavLink} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FuncUsersPage from "./pages/funcUsersPage/FuncUsersPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import MainPage from "./pages/mainPage/MainPage";
import PostsPage from "./pages/usersPage/UsersPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/user' element={<FuncUsersPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/posts' element={<PostsPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
