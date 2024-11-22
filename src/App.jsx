import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

export default function APP() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}