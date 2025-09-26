import { Button } from "@/components/atoms/button";
import Image from "next/image";

export const LandingHeroSection = () => {
  return (
    <main
      className="flex flex-col lg:flex-row gap-10 items-center 
            justify-center my-20 px-6"
    >
      <div
        className="flex flex-col items-center lg:items-start gap-4 max-w-xl 
            text-center lg:text-start"
      >
        <p
          className="text-xs text-gray-800 font-medium
            uppercase tracking-widest"
        >
          Senior Software Engineer
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 font-mono">
          Building scalable, impactful, and reliable software solutions.
        </h1>
        <p className="text-gray-800">
          Passionate about creating systems that empower businesses to grow
          through technology.
        </p>
        <div className="flex gap-4 mt-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>

      <div
        className="w-40 h-40 lg:w-56 lg:h-56 rounded-full 
              overflow-hidden shadow-xl"
      >
        <Image
          width={224}
          height={224}
          alt="Tavares Evaristo"
          src="/developer-photo.jpeg"
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
};
