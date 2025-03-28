import SectionInfo from "@/Components/about/SectionInfo";
import BottonSocail from "@/Components/common/BottonSocail";
import Myicon from "@/Components/common/Myicon";
import SectionHero from "@/Components/home/SectionHero";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col font-bold text-center text-white font-mono items-center justify-center">

      {/* พื้นหลัง Spline - ให้สามารถโต้ตอบได้ */}
      <div className="fixed  w-full h-full pointer-events-auto">
        <Spline scene="https://prod.spline.design/tiWxr3zXMhwLVjCu/scene.splinecode" />
      </div>

      {/* เนื้อหาของเว็บ - ไม่บัง interaction ของ Spline */}
      <div className="relative z-10 mt-[140px] pointer-events-none">
        <Myicon />
      </div>
      <div className="relative z-10 mt-[100px] pointer-events-none">
        <SectionHero />
      </div>
      <div className="relative z-10 mt-[240px] pointer-events-none">
        <BottonSocail />
      </div>
      
      {/* เนื้อหา About*/}
      <div className="relative z-10 mt-[100px] w-full h-fit pointer-events-none">
        <div className="absolute z-5 left-[50%] translate-x-[-50%]  pointer-events-none ">
          <SectionInfo />
        </div>
      </div>

    </div>
  );
}
