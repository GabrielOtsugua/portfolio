import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-title text-xl font-bold">
          Experiência Profissional
        </h1>
      </div>

      <h2 className="mb-2">
        <span className="text-title">Desenvolvedor Front-End</span> -
        <span className="text-primary"> Smarthive</span>
      </h2>
      <p className="text-xs tracking-widest">02/2023 - 10/2023</p>

      <p className="tracking-widest text-sm">
        <span className="text-primary font-bold text-4xl">. </span>A empresa
        tinha como principal desígnio a{" "}
        <span className="text-title">simplificação da rotina</span> dos seus
        utilizadores que residem{" "}
        <span className="text-title">em condomínios</span>.
      </p>

      <p className="tracking-widest text-sm">
        <span className="text-primary font-bold text-4xl">. </span>
        No âmbito das minhas responsabilidades,{" "}
        <span className="text-title">
          encarei o desenvolvimento Front-End de dois projetos
        </span>
        . Um deles tinha como objetivo a{" "}
        <span className="text-title">gestão de condomínios</span>, enquanto o
        outro para <span className="text-title">pedidos e entregas</span> por
        meio de um aplicativo.
      </p>

      <RightArrow href="./Knowledge" />
    </div>
  );
};

export default Experience;
