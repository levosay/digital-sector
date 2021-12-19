import React, {useState} from 'react'
import BreadCrumbs from './components/breadCrumbs/BreadCrumbs'
import Feature from './components/feature/Feature'
import Slider from './components/slider/Slider'
import Description from './components/description/Description'
import DataSize from '../src/components/select/dataSelect'
import './components/breadCrumbs/bread-crumbs.css'
import './components/feature/feature.css'
import './components/description/description.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './components/slider/slider.css'
import './fonts/styleFonts.css'
import './App.css'


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
