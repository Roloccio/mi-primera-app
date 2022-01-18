import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import TarjetaFruta from './components/TarjetaFruta';
import ImagenesAleatorias from './components/ImagenesAleatorias'

const nombre = ["Enero", "Febrero", "Marzo", "Abril"];
function App() {
  return (
    <div className="App">
      <TarjetaFruta nombreFruta = "Fresa" precio = "2,45"/>
      <ImagenesAleatorias nombre = "lusi" />
    </div>
  );
}

export default App;
