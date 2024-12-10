import Mainpage from "./Components/Mainpage/page";
import Mainpage2 from "./Components/Mainpage2/page";
import Mainpage3 from "./Components/Mainpage3/page";
import Mainpage5 from "./Components/Mainpage5/page";
import Image from "next/image";
import Mainpage6 from "./Components/Mainpage6/page";

export default function Home() {
  return (
    <div>
    <Mainpage />
    <Mainpage2 />
    <Mainpage3 />
    <Image src={"/pic5.png"} alt="" width={1950} height={350} className="w-[450] h-[450]"/>     
    <Mainpage5 />
    <Mainpage6 />
    </div>
  );
}
