
import Fslider from "@/components/Fslider";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";
import Rev from "@/components/Rev";


export default function Home() {

  return (
    <main className="">
      <Fslider />
      <Content1 />
      <Content2 />
      {/* <Review/> */}
      <Rev/>
     
    </main>
  );
}
