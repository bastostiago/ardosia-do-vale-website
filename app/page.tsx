import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import { Philosopher } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Slide } from "@/models/website";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

const slides: Slide[] = [
  {
    image: "/quem_somos_principal-1038x460.jpg",
    title: "Quem Somos",
    text: "A Ardósia do Vale nasceu em 1980, fruto de um sonho de seu fundador Sr. Miguel. Chegando juntamente com seus irmãos ao município de Trombudo Central, foi um dos pioneiros na exploração da pedra ardósia na região. Com seu espírito…",
    path: "/quem-somos",
  },
  {
    image: "/pedra_ardosia-1038x460.jpg",
    title: "Pedra Ardósia",
    text: "A Pedra Ardósia (folhelho ardosiano) é uma rocha sílico-argilosa formada pela transformação da argila sob grande pressão e temperatura, endurecida em finas lâminas. A pedra negra e azulada, que se apresenta em camadas sobrepostas, possui características que a possibilita ser…",
    path: "/pedra-ardosia",
  },
  {
    image: "/trombudo_central1-1038x460.jpg",
    title: "Trombudo Central",
    text: "Em Trombudo Central concentra-se a maior quantidade de pedra ardósia de Santa Catarina, as imensas jazidas já se tornaram uma grande atração ao público, além de permitirem a extração de ardósia com características e resistência únicas no mundo. Uma das…",
    path: "/trombudo-central",
  },
  {
    image: "/produtos-1038x460.jpg",
    title: "Produtos",
    text: "Nossos produtos contam com o que há de melhor em matéria prima, resultando em um produto final da melhor qualidade e com preço justo. Todo processo de produção é fiscalizado por um rigoroso controle de qualidade interno, assim garantimos o…",
    path: "/produtos",
  },
];

const cards = [
  {
    image: "/meioambiente.jpg",
    title: "Meio Ambiente",
    path: "/meio-ambiente",
  },
  {
    image: "/residencial.jpg",
    title: "Residencial",
    path: "/produtos/residencial",
  },
  {
    image: "/produto_tumulo-474x342.jpg",
    title: "Jazigos",
    path: "/produtos/jazigos",
  },
  {
    image: "/contato.jpg",
    title: "Contato",
    path: "/contato",
  },
];

export default function Home() {
  return (
    <>
      <header className="p-8 items-center flex md:h-48 h-36">
        <div className="w-11/12">
          <Image
            alt="Logo Ardósia do Vale"
            src={"/logo.png"}
            width={300}
            height={50}
          ></Image>
        </div>
        <div className="md:flex md:gap-x-2 hidden">
          <SocialIcon
            href="https://www.facebook.com/ardosiadovale"
            network="facebook"
            style={{ height: 30, width: 30 }}
            className="transition ease-out duration-300 hover:scale-125"
          />
          <SocialIcon
            href="https://www.instagram.com/ardosiadovale/"
            network="instagram"
            style={{ height: 30, width: 30 }}
            className="transition ease-out duration-300 hover:scale-125"
          />
        </div>
      </header>
      <Navbar />
      <Carousel slides={slides} />
      <div className="pr-5 pl-5 md:pr-20 md:pl-20">
        <section className="flex flex-wrap gap-6 w-full justify-center items-center mt-20">
          {cards.map((item, index) => (
            <Link key={index} href={item.path}>
              <div className="flex flex-col w-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={474}
                  height={342}
                ></Image>
                <p
                  className={
                    "text-xl text-center mt-2 hover:text-[#e58b00] " +
                    philosopher.className
                  }
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section>
          <div className="flex gap-6 w-full justify-center items-start mt-10">
            <Image
              src="/testimonial-icon.png"
              width={25}
              height={20}
              alt="Testimonial"
            />

            <div className="bg-gray-100 border-gray-200 border-2 p-8 shadow-inner rounded-xl text-3xl italic overflow-hidden">
              Eu gosto de saber onde o cliente vai usar o meu produto pra poder
              ajudar a fazer a melhor escolha, não quero que ele simplesmente
              compre e vá embora, quero ajudar a resolver o problema dele.
            </div>
          </div>
          <p className="text-end text-sm font-bold mt-3">Ângela Fachini</p>
          <p className="text-end text-sm">Sócia da Ardósia do Vale</p>
        </section>

        <section>
          <div className="flex gap-5 items-center">
            <Image alt="Quem Somos" src="/quem_somos_principal-1038x460.jpg" width={50} height={50} className="rounded-full w-10 h-10"></Image>
            <div className={philosopher.className + " text-xl"}>Quem Somos</div>
          </div>
        </section>

        {/* <div className="flex flex-wrap gap-6 w-full justify-center items-center mt-20">
          {slides.map((item, index) => (
            <Link key={index} href={item.path}>
              <div className="flex flex-col w-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={474}
                  height={342}
                ></Image>
                <p
                  className={
                    "text-xl text-center mt-2 hover:text-[#e58b00] " +
                    philosopher.className
                  }
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}
