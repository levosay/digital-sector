import BreadCrumbs from './components/breadCrumbs/breadCrumbs'
import Feature from './components/feature/feature'
import Slider from './components/slider/slider'
import './App.css'
import Button from './components/btn/button'
import SelectSize from './components/select/selectSize'


function App() {
  return (
    <div className="App">
      {/*<BreadCrumbs />*/}
      {/*<Feature />*/}
      {/*<Slider />*/}

      <Button>в корзину</Button>

      <SelectSize />

    </div>
  );
}

export default App;
