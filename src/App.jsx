import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Educations from "./pages/Educations";
import Home from "./pages/Home";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Work from "./pages/Work";


export default function APP() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Educations></Educations>
      <Work></Work>
      <MySkills></MySkills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}