import React, {useState} from 'react'
import BreadCrumbs from './components/breadCrumbs/BreadCrumbs'
import Feature from './components/feature/Feature'
import Slider from './components/slider/Slider'
import Description from './components/description/Description'
import DataSize from '../src/components/select/dataSelect'
import './components/breadCrumbs/bread-crumbs.sass'
import './components/feature/feature.sass'
import './components/description/description.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './components/slider/slider.sass'
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
