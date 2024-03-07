import LeftArrow from "@/components/LeftArrow";
import RightArrow from "@/components/RightArrow";
import Link from "next/link";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Knowledge = () => {
  return (
    <div className="w-full lg:pt-20">
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Competências
      </h1>

      <p className="text-sm md:text-lg mb-4">
        Adquiridas por meio da formação e experiência profissional.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <AiOutlineHtml5 className="w-6 h-6 text-primary" />
          <p>html</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoCss3 className="w-6 h-6 text-primary" />
          <p>css</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoJavascript className="w-6 h-6 text-primary" />
          <p>javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoReact className="w-6 h-6 text-primary" />
          <p>react</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <SiNextdotjs className="w-6 h-6 text-primary" />
          <p>next</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoReact className="w-6 h-6 text-primary" />
          <p>react native</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoTypescript className="w-6 h-6 text-primary" />
          <p>typescript</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoNodejs className="w-6 h-6 text-primary" />
          <p>node</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoPostgresql className="w-6 h-6 text-primary" />
          <p>sql</p>
        </div>
        <div className="flex flex-col justify-center items-center border border-primary rounded p-2 ">
          <BiLogoPython className="w-6 h-6 text-primary" />
          <p>python</p>
        </div>
      </div>

      <LeftArrow href="./Experience" />
      <RightArrow href="./Projects" />
    </div>
  );
};

export default Knowledge;
