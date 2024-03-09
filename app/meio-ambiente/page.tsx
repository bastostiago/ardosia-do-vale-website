import { Metadata } from "next";
import { Philosopher } from "next/font/google";
import Link from "next/link";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meio Ambiente | Ardósia do Vale",
  description:
    "A conservação do meio ambiente é fator indiscutível para o sucesso dos nossos negócios e é premissa para realização do nosso trabalho.",
};

export default function MeioAmbiente() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Meio Ambiente</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          A conservação do meio ambiente é fator indiscutível para o sucesso dos
          nossos negócios e é premissa para realização do nosso trabalho. A
          Ardósia do Vale tem o compromisso de utilizar da melhor forma possível
          os recursos naturais, preservando a integridade e o bem estar dele.
        </p>
        <p>Citamos abaixo algumas de nossas atividades para tal feito:</p>
        <p className="ml-6">
          <ul className="list-disc flex flex-col gap-y-1">
            <li>Possuímos tratamento dos efluentes e águas pluviais;</li>
            <li>
              Rejeitos são destinados a britagem e são utilizados para drenagem
              e calçamento de estradas do interior da região;
            </li>
            <li>
              Estamos regularizados com todos os órgãos de controle ambiental
              como FATMA e IBAMA;
            </li>
            <li>
              Investimos em pesquisa e desenvolvimento de produtos derivados dos
              rejeitos para que nada seja desperdiçado.
            </li>
          </ul>
        </p>
      </article>
    </section>
  );
}
