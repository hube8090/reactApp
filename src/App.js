import './App.css';
import List from './components/List';
import Names from './components/Names';
import AboutPage from './pages/AboutPage/AboutPage';
import AboutUs from './pages/AboutUs/AboutUs';



function App() {
  
  
  const names = ["Dastan", "Ali", "Amir"]
  
  const info = {
    title: "I am TITLE",
    body: "Lorem ipsum bla bla bla"
  }
  
  return (
    <div className="App">
      <h1>Мое приложение</h1>
      <AboutUs title= "Заголовок"/>
      <AboutPage title={info.title} body = {info.body}/>
      <List todo={names} />
      <Names todo= {names}/>

    </div>
  );
}

export default App;
