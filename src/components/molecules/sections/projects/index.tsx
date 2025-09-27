import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto my-20 px-6">
      <h2 className="text-2xl lg:text-3xl font-bold lg:font-extrabold font-mono text-center mb-12">
        {/* Featured Projects */}
        {"What I've been doing"}
      </h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {/*  main featured project */}
        <div className="rounded-xl shadow-lg overflow-hidden bg-white">
          <div className="h-60 relative">
            <Image
              src="/about/image-1.jpeg"
              alt="Featured Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 font-sans text-sm">
            <h3 className="font-mono font-bold text-2xl">Enterprise CRM</h3>
            <p className="text-gray-700 mt-2">
              Robust CRM solution for managing clients, sales pipeline, and
              analytics.
            </p>
            <div className="flex gap-4 mt-4 font-mono">
              <a href="#" className="text-indigo-600 hover:underline">
                Demo
              </a>
              <a href="#" className="text-gray-700 hover:underline">
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {["Mobile Banking App", "Analytics Dashboard"].map((title, i) => (
            <div key={i} className="rounded-lg shadow bg-white p-4">
              <h4 className="font-mono font-bold text-lg mb-2">{title}</h4>
              <p className="text-gray-700 text-sans text-sm">
                Short description about this project and its main features.
              </p>
              <a
                href="#"
                className="text-indigo-600 text-sm mt-2 inline-block hover:underline"
              >
                See more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
