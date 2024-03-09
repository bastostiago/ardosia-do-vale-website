import { Metadata } from "next";
import { Philosopher } from "next/font/google";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contato | Ardósia do Vale",
  description:
    "Entre em contato com a Ardósia do Vale, ficaremos felizes em atendê-lo.",
};

export default function Contato() {
  return (
    <section className="pr-5 pl-5 pt-10 md:pr-20 md:pl-20 border-gray-200 border-t-[1px]">
      <h1 className={philosopher.className + " text-2xl"}>Contato</h1>
      <article className="flex flex-col gap-4 text-sm mt-4">
        <p>
          Envie sua mensagem ou solicite seu orçamento agora mesmo,
          responderemos o mais rápido possível.
        </p>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=55047988131671&text=Gostaria+de+conversar+a+respeito+dos+seus+produtos.&type=phone_number&app_absent=0"
          }
          className="bg-green-500 text-white w-44 rounded-lg p-0 text-base font-medium shadow-sm hover:bg-green-400"
          target="_blank"
        >
          <SocialIcon
            network="whatsapp"
            style={{ height: 50 }}
            bgColor="transparent"
            className="ml-2"
            as="div"
          ></SocialIcon>
          <span>Whatsapp</span>
        </Link>
        <p>Você pode entrar em contato também pelos telefones:</p>
        <p className="font-semibold">
          (47) 3544-0444 / 98835-0061 / 98813-1671
        </p>
        <p>Ou ainda:</p>
        <a
          href={"mailto:vendas@ardosiadovale.com.br"}
          className="bg-gray-500 text-white w-44 rounded-lg p-0 text-base font-medium shadow-sm hover:bg-gray-400"
          target="_blank"
        >
          <SocialIcon
            network="email"
            style={{ height: 50 }}
            bgColor="transparent"
            className="ml-2"
          ></SocialIcon>
          <span>Enviar E-mail</span>
        </a>
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2121.538291004389!2d-49.801323!3d-27.284984!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sus!4v1710013676818!5m2!1spt-BR!2sus"
          loading="lazy"
        ></iframe>
      </article>
    </section>
  );
}
