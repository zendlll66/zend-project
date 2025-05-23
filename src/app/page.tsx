
import SectionInfo from "@/Components/about/SectionInfo";
import BottonSocail from "@/Components/common/BottonSocail";
import Myicon from "@/Components/common/Myicon";
import MyTool from "@/Components/common/MyTool";
import MailSender from "@/Components/contact/MailSender";
import SectionHero from "@/Components/home/SectionHero";
import ProjectInfo from "@/Components/projects/ProjectInfo";
import Spline from '@splinetool/react-spline/next';


export default function Home() {

  return (
    <div className="relative w-full min-h-screen  text-white font-mono  overflow-hidden">


      <div className="fixed inset-0 w-full h-full ">
        <Spline scene="https://prod.spline.design/tiWxr3zXMhwLVjCu/scene.splinecode" />
      </div>

      {/* 🟡 เนื้อหา home*/}
      <div id="home" className="scroll-smooth relative items-center justify-center flex flex-col w-full h-full pointer-events-none ">
        <div className="relative z-10 mt-[140px] pointer-events-none">
          <Myicon text={"ZEnd"} />
        </div>
        <div className="relative z-10 mt-[100px] pointer-events-none">
          <SectionHero />
        </div>
        <div className="relative z-10 mt-[200px] pointer-events-auto ">
          <BottonSocail />
        </div>
      </div>

      <div className="scroll-smooth relative flex flex-col mt-[200px] z-10 w-full h-full pointer-events-none gap-20  items-center ">
        {/* เนื้อหา About */}
        <div id="about" className="relative pointer-events-none  w-full flex justify-center">
          <SectionInfo />
        </div>

        {/* เนื้อหา Blog */}
        {/* <div id="blog">
          <Carousels/>
        </div> */}

        {/* เนื้อหา Project */}
        <div id="projects" className="scroll-smooth relative z-30  w-full flex justify-center   pointer-events-auto">
          <ProjectInfo />
        </div>
      </div>

      <div className="scroll-smooth relative z-10  w-full  mb-20 pointer-events-none ">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center text-white my-4 font-mono">
          My Developer Stack
        </h1>
        <div id="tool" className="relative ">
          <MyTool />
        </div>
      </div>

      <div className="scroll-smooth relative z-10  w-full  mb-20 pointer-events-none ">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center text-white my-4 font-mono">
          Contact Me
        </h1>
        <div id="contact" className="relative z-30  w-full flex justify-center   pointer-events-auto">
          <MailSender />
        </div>
      </div>



    </div>
  );
}
