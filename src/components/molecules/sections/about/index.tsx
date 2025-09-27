export const AboutSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto mt-20 mb-15 px-6
                max-w-3xl text-center lg:text-left"
    >
      <h2 className="text-2xl lg:text-3xl font-bold lg:font-extrabold font-mono text-gray-900 mb-6">
        About Me
      </h2>
      <p className="text-gray-700 text-sm leading-relaxed mb-6 font-sans">
        I’m a Senior Software Engineer with a passion for turning complex
        problems into simple, elegant solutions. My mission is to create
        software that drives business growth and empowers people.
      </p>

      <div className="grid grid-cols-1 gap-4 text-sm font-mono text-gray-800">
        <span>✔ Full-Stack Development</span>
        <span>✔ Scalable Architecture</span>
        <span>✔ Cloud & DevOps</span>
        <span>✔ Mentorship & Leadership</span>
      </div>
    </section>
  );
};
