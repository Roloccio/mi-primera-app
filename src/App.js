import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
const nombre = ["Enero", "Febrero", "Marzo", "Abril"];
function App() {
  return (
    <div className="App">
      <Componente nombre = {nombre}/>
    </div>
  );
}

export default App;
