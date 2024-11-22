import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Educations from "./pages/Educations";
import Home from "./pages/Home";


export default function APP() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Educations></Educations>
      <Footer></Footer>
    </div>
  )
}