import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import CustomComponent from '../components/CustomComponent';
export default function Home(){
    return(  
        <> 
        <Navbar />
      <div className="pt-16">
        <Hero />
        <Features /> 
        <CustomComponent/>
        <Contact />
        <Footer />
      </div>
        </>
    )
}