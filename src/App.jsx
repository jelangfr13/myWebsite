import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Educations from "./pages/Educations";
import Home from "./pages/Home";
import Work from "./pages/Work";


export default function APP() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Educations></Educations>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}