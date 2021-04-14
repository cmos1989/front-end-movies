import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';

function App() {

  const titulo = "Peliculas IUDigital";

  return (
    <div className="container">

      <NavBar titulo= {titulo} />
      
      <Table />

    </div>
  );
}

export default App;
