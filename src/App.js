import BreadCrumbs from './components/breadCrumbs/breadCrumbs'
import Feature from './components/feature/feature'
import Slider from './components/slider/slider'
import './App.css'
import Description from './components/description/description'
import {useState} from 'react'
import DataSize from '../src/components/select/dataSelect'



function App() {

  const [dataSize, setDataSize] = useState(DataSize)


  return (
    <div className="App">
      <BreadCrumbs />
      <Feature />
      <Slider />
      <Description
        dataSize={dataSize}
        setDataSize={setDataSize}
      />


    </div>
  );
}

export default App;
