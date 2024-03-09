import { Metadata } from "next";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trombudo Central | Ardósia do Vale",
  description:
    "Em Trombudo Central concentra-se a maior quantidade de pedra ardósia de Santa Catarina e possuem características e resistência únicas no mundo.",
};

export default function TrombudoCentral() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Trombudo Central</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          Em Trombudo Central concentra-se a maior quantidade de pedra ardósia
          de Santa Catarina, as imensas jazidas já se tornaram uma grande
          atração ao público, além de permitirem a extração de ardósia com
          características e resistência únicas no mundo.
        </p>
        <p>
          Uma das primeiras referências ao nome Trombudo datam de 5 de maio de
          1791. Seu primeiro Prefeito eleito foi Heinz Schroeder. Cidade
          tipicamente européia, mantém raízes culturais alemãs e italianas
          através dos clubes de Caça e Tiro e Bolão, dos grupos folclóricos, da
          comida típica colonial e pelo artesanato diversificado.
        </p>
        <p>
          Localiza-se a uma latitude 27º17’57″ sul e a uma longitude 49º47’25″
          oeste, estando a uma altitude de 350 metros. Sua população estimada em
          2020 é de 7.434 habitantes.
        </p>
        <p>
          As terras onde se localiza o município de Trombudo Central pertenceram
          inicialmente ao município de Porto Belo / Itajaí, posteriormente ao
          município de Blumenau, depois passou a pertencer ao município de Rio
          do Sul, do qual se emancipou politicamente e administrativamente no
          ano de 1958.
        </p>
        <p>
          O acesso a Trombudo Central se dá na altura do km 160 da Rodovia BR470
          que liga o litoral catarinense ao planalto Serrano através do Alto
          Vale do Itajaí.
        </p>
      </article>
    </section>
  );
}
