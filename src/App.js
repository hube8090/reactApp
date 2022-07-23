import './App.css';
import AboutPage from './pages/AboutPage/AboutPage';
import AboutUs from './pages/AboutUs/AboutUs';



function App() {
  
  const info = {
    title: "I am TITLE",
    body: "Lorem ipsum bla bla bla"
  }
  
  return (
    <div className="App">
      <h1>Мое приложение</h1>
      <AboutUs title= "Заголовок"/>
      <AboutPage title={info.title} body = {info.body}/>
    </div>
  );
}

export default App;
