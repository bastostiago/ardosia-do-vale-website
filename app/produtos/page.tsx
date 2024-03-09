import { Metadata } from "next";
import { Philosopher } from "next/font/google";
import Link from "next/link";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Produtos | Ardósia do Vale",
  description:
    "Nossos produtos contam com o que há de melhor em matéria prima, resultando em um produto final da melhor qualidade e com preço muito acessível.",
};

export default function Produtos() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Produtos</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          Nossos produtos contam com o que há de melhor em matéria prima,
          resultando em um produto final da melhor qualidade e com preço justo.
        </p>
        <p>
          Todo processo de produção é fiscalizado por um rigoroso controle de
          qualidade interno, assim garantimos o atendimento por completo da
          necessidade do nosso cliente.
        </p>
        <p>Nossos principais produtos são divididos em duas linhas:</p>
        <p className="ml-4">
          <ul className="list-disc text-[#e58b00] flex flex-col gap-y-4 font-semibold">
            <li>
              <Link href="/residencial">Residencial</Link>
            </li>
            <li>
              <Link href="/jazigos">Jazigos</Link>
            </li>
          </ul>
        </p>
        <p>
          Além das linhas citadas, a pedra Ardósia possibilita a produção de
          inúmeros outros produtos, que também produzimos sob encomenda. Entre
          eles podemos citar: brita, fundamento, meio fio, calçadas, pisos
          industriais, mesas, palanques para cercas e parreirais, móveis, mesa
          de bilhar, tijolos para muros, pontes, muro de contenção,
          revestimentos, objetos decorativos, caixa de decantação, entre outros.
        </p>
        <p>
          Não deixe de conhecer nossos produtos. Fornecemos para todo sul do
          Brasil.
        </p>
      </article>
    </section>
  );
}
