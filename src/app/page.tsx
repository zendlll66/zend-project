import BottonSocail from "@/Components/common/BottonSocail";
import Myicon from "@/Components/common/Myicon";
import SectionHero from "@/Components/home/SectionHero";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="text-4xl w-full h-screen flex flex-col font-bold text-center text-white  font-mono items-center justify-center">
      <div className="absolute top-0 mt-[140px]">
        <Myicon />
      </div>
      <div className="absolute top-0 mt-[240px]">
        <SectionHero />
      </div>
      <div className="absolute top-0 mt-[640px] ">
        <BottonSocail />
      </div>
      <Spline
        scene="https://prod.spline.design/tiWxr3zXMhwLVjCu/scene.splinecode"
      />
    </div>
  )
}