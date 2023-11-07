import LeftArrow from "@/components/LeftArrow";
import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Sobre Mim
      </h1>

      <p className="mb-4">
        Me formei como{" "}
        <span className="text-title">
          Web Full-Stack na Kenzie Academy Brasil{" "}
        </span>
        e, desde então, venho aprimorando minhas competências e adquirindo{" "}
        <span className="text-primary">experiência profissional</span>.
      </p>

      <p className="mb-4">
        Cumprindo minha trajetória profissional, concentrei meus esforços no{" "}
        <span className="text-title">
          domínio do desenvolvimento Front-End.
        </span>
      </p>

      <p>
        Em minha posição mais recente,{" "}
        <span className="text-title">
          tive participação no desenvolvimento de um aplicativo robusto
        </span>
        , focado em facilitar pedidos e entregas, de maneira semelhante ao
        aplicativo Ifood.
      </p>

      <LeftArrow href="./" />
      <RightArrow href="./Training" />
    </div>
  );
};

export default AboutMe;
