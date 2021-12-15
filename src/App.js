import BreadCrumbs from './components/breadCrumbs/breadCrumbs'
import Feature from './components/breadCrumbs/feature/feature'
import Slider from './components/slider/slider'
import './App.css'


function App() {
  return (
    <div className="App">
      <BreadCrumbs />
      <Feature />
      <Slider />

      <div>
        <div>
          <img src="" alt=""/>
          <h1>Пиджак CLASP</h1>
          <span>27 000 руб.</span>
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}

export default App;
