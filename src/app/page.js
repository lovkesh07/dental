import Image from "next/image";
import Slider from "@/components/Slider";
import Fslider from "@/components/Fslider";

import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";

export default function Home() {
  return (
    <main className="">
      <Fslider />
      <Content1 />
      <Content2 />
    </main>
  );
}
