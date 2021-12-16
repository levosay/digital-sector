import pants1 from  '../../img/pants/pants_1.png'
import pants2 from  '../../img/pants/pants_2.png'
import pants3 from  '../../img/pants/pants_3.png'
import pants4 from  '../../img/pants/pants_4.png'
import pants5 from  '../../img/pants/pants_5.png'
import pants6 from  '../../img/pants/pants_6.png'

const DataSlider = [
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants1,
    title: 'XS'
  },
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants2,
    title: 'S'
  },
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants3,
    title: 'M'
  },
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants4,
    title: 'L'
  },
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants5,
    title: 'XL'
  },
  {
    id: new Date().valueOf() / 1000 / 60 / Math.random() ,
    url: pants6,
    title: 'XXL'
  },
]

export default DataSlider
