import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const Training = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-title text-xl font-bold w-40">Formação</h1>
      </div>

      <h2 className="mb-2">
        <span className="text-title">Desenvolvedor Full-Stack</span> -{" "}
        <span className="text-primary">Kenzie Academy Brasil</span>
      </h2>
      <p className="text-xs tracking-widest">04/2022 - 04/2023</p>

      <p className="tracking-widest text-sm">
        <span className="text-primary font-bold text-4xl">. </span>
        Uma bootcamp de alta exigência, no qual era necessário obter uma
        <span className="text-title"> pontuação mínima de 80%</span> para evitar
        a desclassificação.
      </p>

      <p className="tracking-widest text-sm">
        <span className="text-primary font-bold text-4xl">. </span>
        Durante o programa, adquiri competências em{" "}
        <span className="text-title">
          tecnologias e ferramentas de ponta, todas alinhadas com as demandas do
          mercado atual
        </span>
        , evitando a imersão em linguagens obsoletas e sem utilidade prática.
      </p>

      <p className="tracking-widest text-sm">
        <span className="text-primary font-bold text-4xl">. </span>
        Além do desenvolvimento técnico aprimorei{" "}
        <span className="text-title">habilidades interpessoais</span>. Fui
        desafiado a aperfeiçoar minha comunicação e a colaborar efetivamente em
        equipes (com a metodologia SCRUM frequentemente empregada).
      </p>

      <RightArrow href="./Experience" />
    </div>
  );
};

export default Training;
