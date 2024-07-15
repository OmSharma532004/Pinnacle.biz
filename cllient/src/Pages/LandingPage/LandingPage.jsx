import {Navbar, Header, About, Work, Footer} from './Components/index'
// import Footer from '../../components/Footer/Footer'
import "../../App.scss"

const LandingPage = () => {
  return (
    <div className="app mt-[67px] lg:mt-[60.8px]">
      <Navbar />
      <Header />
      <About />
      <Work />
      
      <Footer />
      <div style={{position: 'fixed', bottom: '150px', right: '10px'}}>
        <a 
        className=' text-lg font-semibold hover:bg-green-800 font-sans bg-[#B1C000] rounded-xl p-5 text-white '
          href="https://calendly.com/contact-pinnacle/book-a-meeting" 
             >
          Schedule a Meeting
        </a>
      </div>
    </div>
  )
}

export default LandingPage
