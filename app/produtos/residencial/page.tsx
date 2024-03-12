import { Metadata } from "next";
import { Philosopher } from "next/font/google";
import GalleryComp from "@/components/gallery";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Residencial | Ardósia do Vale",
  description:
    "A pedra Ardósia possibilita a produção de belos móveis e objetos de decoração.",
};

export default function Residencial() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Residencial</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          A pedra Ardósia possibilita a produção de belos móveis e objetos de
          decoração. Você pode usar sua criatividade para solicitar um móvel
          conforme seu gosto ou deixar que nós ofereçamos inúmeros modelos para
          sua escolha..
        </p>
        <p>Confira alguns de nossos trabalhos na galeria abaixo:</p>
        <GalleryComp type="residencial" />
      </article>
    </section>
  );
}
