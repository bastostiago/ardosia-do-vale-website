import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <>
      <header className="p-8 items-center flex md:h-48 h-36">
        <div className="w-11/12">
          <Image
            alt="Logo Ardósia do Vale"
            src={"/logo.png"}
            width={300}
            height={50}
          ></Image>
        </div>
        <div className="md:flex md:gap-x-2 hidden">
          <SocialIcon
            href="https://www.facebook.com/ardosiadovale"
            network="facebook"
            style={{ height: 30, width: 30 }}
            className="transition ease-out duration-300 hover:scale-125"
          />
          <SocialIcon
            href="https://www.instagram.com/ardosiadovale/"
            network="instagram"
            style={{ height: 30, width: 30 }}
            className="transition ease-out duration-300 hover:scale-125"
          />
        </div>
      </header>
      <Navbar />
      <Carousel />
    </>
  );
}
