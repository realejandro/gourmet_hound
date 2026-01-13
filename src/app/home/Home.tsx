//import { Noto_Sans_Thai } from "next/font/google";
import { SectionCategories, SectionInfo, SectionTotal } from "@/components/home";
import Carousel from "@/components/home/Carousel";
import BasicLayout from "@/layouts/basic/BasicLayout";


const Home = () => {
  return (
    <BasicLayout>
        <div className="font-serif">
            <Carousel/>
            <SectionInfo/>
            <SectionTotal/>
            <SectionCategories/>
        </div>
    </BasicLayout>
  );
}

export default Home;