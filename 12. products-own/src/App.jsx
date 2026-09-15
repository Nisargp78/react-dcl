import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsList from './components/ProductsList'
import AccordianContainer from './accordianComponents/AccordianContainer'
import AccordionContainer2 from './accordianComponents/AccordianContainer2'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <ProductsList /> */}
      {/* <AccordianContainer /> */}
      <AccordionContainer2 />
      <Footer />
    </div>
  )
}

export default App