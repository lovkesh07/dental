
import Fslider from "@/components/Fslider";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";
import Rev from "@/components/Rev";
import Whatsapp from "@/components/Whatsapp";
import Supportfaq from "./faq/Supportfaq";


export default function Home() {

  return (
    <main className="">
      <Fslider />
      <Content1 />
      <Content2 />
      {/* <Review/> */}
      <Supportfaq/>
      <Whatsapp/>
      <Rev/>
     
    </main>
  );
}
