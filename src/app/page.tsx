import SectionInfo from "@/Components/about/SectionInfo";
import BottonSocail from "@/Components/common/BottonSocail";
import Myicon from "@/Components/common/Myicon";
import MyTool from "@/Components/common/MyTool";
import SectionHero from "@/Components/home/SectionHero";
import ProjectInfo from "@/Components/projects/ProjectInfo";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col font-bold text-center text-white font-mono items-center justify-center overflow-hidden">
      <div className="fixed inset-0 w-full h-full ">
        <Spline scene="https://prod.spline.design/tiWxr3zXMhwLVjCu/scene.splinecode" />
      </div>

      {/* 🟡 เนื้อหาของเว็บ */}
      <div className="relative z-10 mt-[140px] pointer-events-none">
        <Myicon />
      </div>
      <div className="relative z-10 mt-[100px] pointer-events-none">
        <SectionHero />
      </div>
      <div className="relative z-10 mt-[340px] pointer-events-none">
        <BottonSocail />
      </div>
      <div className="relative z-10 mt-20  pointer-events-none">
        <MyTool />
      </div>



      <div className="relative flex flex-col z-10 w-full h-full pointer-events-none gap-20 mt-20 items-center ">
        {/* เนื้อหา About */}
        <div className="relative  pointer-events-none">
          <SectionInfo />
        </div>

        {/* เนื้อหา Project */}
        <div className="relative  pointer-events-none">
          <ProjectInfo />
        </div>
      </div>

    </div>
  );
}
