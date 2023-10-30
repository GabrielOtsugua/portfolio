import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-title text-xl font-bold w-40">Sobre Mim</h1>
      </div>

      <p className="mb-6">
        Meu primeiro contato com a programação ocorreu em um app de estudos.
        Posteriormente, passei pela{" "}
        <span className="text-title">
          Kenzie Academy Brasil, onde me formei como programador
        </span>
        . Desde então, venho aprimorando minhas habilidades e adquirindo{" "}
        <span className="text-primary">experiência profissional</span>.
      </p>

      <p className="mb-6">
        Em minha posição mais recente,{" "}
        <span className="text-title">
          fui responsável pelo desenvolvimento de um aplicativo robusto para
          condomínios
        </span>
        , focado em facilitar pedidos e entregas, de maneira semelhante ao
        aplicativo Ifood.
      </p>

      <p className="mb-3">
        Aqui estão{" "}
        <span className="text-title">algumas tecnologias e ferramentas</span>{" "}
        com as quais tenho trabalhado recentemente:
      </p>

      <div className="flex">
        <div className="w-1/2">
          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            JavaScript (ES6+)
          </p>
          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            React Native
          </p>
          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            Tailwind
          </p>
        </div>

        <div className="w-1/2">
          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            Axios
          </p>

          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            Amazon AWS
          </p>

          <p className="tracking-widest text-sm">
            <span className="text-primary font-bold text-4xl">. </span>
            .NET
          </p>
        </div>
      </div>

      <RightArrow href="./Training" />
    </div>
  );
};

export default AboutMe;
