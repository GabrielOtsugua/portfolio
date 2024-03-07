import LeftArrow from "@/components/LeftArrow";
import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const Experience = () => {
  return (
    <div>
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Experiência Profissional
      </h1>

      <h2>
        <span className="text-title">Desenvolvedor Front-End Júnior</span> -
        <span className="text-primary"> Smart Hive</span>
      </h2>

      <p className="text-sm md:text-lg mb-4">02/2023 - 10/2023</p>

      <p className="mb-4">
        <span className="text-primary">. </span>A empresa tinha como principal
        desígnio a{" "}
        <span className="text-title">simplificação da rotina dos síndicos</span>
        , responsáveis pela gestão do condomínio.
      </p>

      <p>
        <span className="text-primary">. </span>
        <span className="text-title">
          Encarei o desenvolvimento Front-End de dois projetos
        </span>
        . Um deles tinha como objetivo a{" "}
        <span className="text-title">gestão de condomínios</span>, enquanto o
        outro para <span className="text-title">pedidos e entregas</span> por
        meio de um aplicativo.
      </p>

      <LeftArrow href="./Training" />
      <RightArrow href="./Knowledge" />
    </div>
  );
};

export default Experience;
