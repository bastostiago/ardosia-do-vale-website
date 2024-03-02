import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="p-8 items-center flex md:h-48 h-36">
        <div>
          <Image
            alt="Logo Ardósia do Vale"
            src={"/logo.png"}
            width={300}
            height={50}
          ></Image>
        </div>
      </header>
      <Navbar />
    </>
  );
}
