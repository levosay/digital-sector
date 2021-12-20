import React, {useState} from 'react'
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import Feature from './components/Feature/Feature'
import Slider from './components/Slider/Slider'
import Description from './components/Description/Description'
import DataSize from './components/SelectSize/dataSelect'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './fonts/styleFonts.css'
import './App.sass'


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
      <div className="description-info">
        <p className="info-text">Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию Прекрасно комбинируется с остальными изделиями из коллекции.</p>
        <p className="info-text">Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, остановив его в расстегнутом виде</p>
      </div>
    </div>
  )
}

export default App
