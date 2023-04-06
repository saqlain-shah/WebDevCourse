import logo from './logo.svg';
import './App.css';
import MyButton from './components/counter'
import img from './rinologo.PNG'
import List from './components/printArrayValue';
function App() {
  return (
   
    <div className="App">
      <header className="App-header">
     
    //<marquee><img src="jet.png" className="jet"  alt="logo" /></marquee> 
     
      <h1 className="Rinor">Rinor come fly with Us</h1>
        <img src={img}  alt="logo" />
        <p>
        
        
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          connect with our page
        </a>
    <MyButton/>
    
      </header>
     
        <List/>
    </div>
  )
 
  
}

export default App;
