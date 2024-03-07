import LeftArrow from "@/components/LeftArrow";
import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const Training = () => {
  return (
    <div className="lg:pt-20">
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Formação
      </h1>

      <h2>
        <span className="text-title">Desenvolvedor Full-Stack</span> -{" "}
        <span className="text-primary">Kenzie Academy Brasil</span>
      </h2>

      <p className="text-sm md:text-lg mb-4">04/2022 - 04/2023</p>

      <p className="mb-4">
        <span className="text-primary">. </span>
        Uma bootcamp de alta exigência, no qual era necessário obter uma
        <span className="text-title"> pontuação mínima de 80%</span>.
      </p>

      <p className="mb-4">
        <span className="text-primary">. </span>
        Durante o programa, adquiri competências em{" "}
        <span className="text-title">
          tecnologias e ferramentas de ponta, todas alinhadas com as demandas do
          mercado atual
        </span>
        .
      </p>

      <p>
        <span className="text-primary">. </span>
        Além do desenvolvimento técnico aprimorei{" "}
        <span className="text-title">habilidades interpessoais</span>. Fui
        desafiado a aperfeiçoar minha comunicação e a colaborar efetivamente em
        equipes <span className="text-title">utilizando SCRUM</span>.
      </p>

      <LeftArrow href="./AboutMe" />
      <RightArrow href="./Experience" />
    </div>
  );
};

export default Training;
