import { Metadata } from "next";
import { Philosopher } from "next/font/google";
import GalleryComp from "@/components/gallery";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jazigos | Ardósia do Vale",
  description:
    "Utilizamos a pedra Ardósia para estrutura de jazigos, cemitérios verticais, gavetas, entre outros.",
};

export default function Jazigos() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Jazigos</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          Utilizamos a pedra Ardósia para estrutura de jazigos, cemitérios
          verticais, gavetas, entre outros. Depois revestimos a estrutura com
          granito, dessa forma oferecemos um preço acessível com um resultado
          muito bonito.
        </p>
        <p>Confira a galeria abaixo:</p>
        <GalleryComp type="jazigos" />
      </article>
    </section>
  );
}
