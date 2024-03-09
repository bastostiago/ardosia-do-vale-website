import { Metadata } from "next";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quem Somos | Ardósia do Vale",
  description:
    "A Ardósia do Vale é uma empresa de cunho familiar, com conhecimentos passados entre as gerações, buscando constantemente ampliar a demanda.",
};

export default function QuemSomos() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Quem Somos</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          A Ardósia do Vale nasceu em 1980, fruto de um sonho de seu fundador
          Sr. Miguel. Chegando juntamente com seus irmãos ao município de
          Trombudo Central, foi um dos pioneiros na exploração da pedra ardósia
          na região. Com seu espírito empreendedor, sempre buscou formas de
          facilitar a vida de seus clientes com produtos inovadores, não ficando
          concentrado apenas em vender pedra in natura.
        </p>
        <p>
          Com muito trabalho o que era apenas um sonho tornou-se realidade. Hoje
          nossa empresa está situada às margens da BR 470, no município de
          Trombudo Central, SC – região privilegiada e abençoada com essa
          riqueza mineral. A Ardósia do Vale é uma empresa de cunho familiar,
          com conhecimentos passados entre as gerações, buscando constantemente
          ampliar a demanda visando a liderança no mercado deste segmento. Nosso
          sucesso reflete o nível de qualidade e comprometimento com os
          clientes.
        </p>
        <p>
          Nosso principal objetivo é fornecer produtos desenvolvidos em pedra
          ardósia, com a finalidade de atender as necessidades e desejos de
          nossos clientes (razão do nosso existir), oferecendo produtos da
          melhor qualidade aliados a preços competitivos e prezando pela
          agilidade nos prazos de entrega.
        </p>
        <p>
          Um dos nossos principais diferenciais, além da qualidade de nossos
          produtos, está na preocupação em atender da melhor maneira possível os
          nossos clientes, auxiliando-os desde o primeiro contato e buscando
          conhecer sua real necessidade. Dessa forma podemos oferecer um produto
          personalizado que realmente o atenda e o satisfaça.
        </p>
        <p>
          Buscamos constantemente mantermos a liderança e destaque na produção e
          comercialização de pedras e produtos acabados, baseando-nos na
          seriedade, respeito, profissionalismo e competência. Prezamos pela
          ampliação e o aperfeiçoamento de nossa gama de produtos, acompanhando
          as tendências e sonhos, fundamentando um vínculo cada vez mais amplo
          com nossos clientes e a comunidade em geral.
        </p>
      </article>
    </section>
  );
}
