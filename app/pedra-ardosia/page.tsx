import { Metadata } from "next";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedra Ardósia | Ardósia do Vale",
  description:
    "A pedra ardósia, é uma rocha negra e azulada, que se apresenta em camadas sobrepostas, possui características que a possibilita ser dividida em finas folhas...",
};

export default function PedraArdosia() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Pedra Ardósia</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          A Pedra Ardósia (folhelho ardosiano) é uma rocha sílico-argilosa
          formada pela transformação da argila sob grande pressão e temperatura,
          endurecida em finas lâminas.
        </p>
        <p>
          A pedra negra e azulada, que se apresenta em camadas sobrepostas,
          possui características que a possibilita ser dividida em finas folhas,
          além de serem muito duradouras. A Pedra Ardósia pode durar muitos e
          muitos anos quando administrada de forma correta.
        </p>
        <p>
          A Pedra Ardósia extraída em Trombudo Central possui características
          únicas, sendo que a principal diferença está em suas camadas, mais
          resistentes do que qualquer outra já encontrada do mesmo minério.
        </p>
        <p>
          Sua resistência e beleza aliadas a versatilidade e preço baixo
          possibilitam os mais diversos usos desde móveis e artefatos de
          decoração até fundamentos, estruturas industriais e jazigos para
          cemitérios verticais entre outros.
        </p>
      </article>
    </section>
  );
}
