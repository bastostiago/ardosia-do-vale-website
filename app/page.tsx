import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="bg-white lg:w-8/12 w-11/12 md:mt-8 mt-4 shadow-md">
        <header className="p-8 items-center flex md:h-48 h-36">
          <div>
            <Image alt="Logo Ardósia do Vale" src={"/logo.png"} width={300} height={50}></Image>
          </div>
        </header>
      </main>
    </div>
  );
}
