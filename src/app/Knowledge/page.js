import RightArrow from "@/components/RightArrow";
import Link from "next/link";

const Knowledge = () => {
  const work = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind",
    "Bootstrap",
    "React Query",
    "Amazon AWS",
    ".NET",
    "Git",
    "Github",
    "Axios",
  ];

  const studies = ["TypeScript", "Node Js", "SQL", "Python", "C#"];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-title text-xl font-bold w-[270px]">Competências</h1>
      </div>

      <h2 className="mb-2">
        <span className="text-title">Trabalho</span>
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {work.map((item, i) => (
          <div key={i} className="text-sm">
            <p>
              <span className="text-primary font-bold text-4xl">. </span>
              {item}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mb-2 mt-9">
        <span className="text-title">Estudos</span>
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {studies.map((item, i) => (
          <div key={i} className="text-sm">
            <p>
              <span className="text-title font-bold text-4xl">. </span>
              {item}
            </p>
          </div>
        ))}
      </div>

      <RightArrow href="./Projects" />
    </div>
  );
};

export default Knowledge;
