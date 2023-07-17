import ProductCard from './components/ProductCard';
import chairImg from '../public/chair.png'
import sofaImg from '../public/sofa.png'
import TextInput from './components/TextInput';
import FeaturedCard from './components/FeaturedCard';

function App() {

  return (
    <>
      <FeaturedCard
          icon={"./public/icons/Delivery.svg"}
          header={"Next day as standard"}
          body={"Order before 3pm and get your order the next day as standard"} />
      <TextInput />
      <ProductCard type="portrait" image={chairImg} />
      <ProductCard type="landscape" image={sofaImg} />
    </>
  )
}

export default App
