import { contactMe } from "@/constants/contact.data";

export const ContactGrid = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-20 max-w-6xl">
      <h2 className="text-3xl font-bold lg:font-extrabold font-mono text-center mb-12">
        Get in Touch
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {contactMe.map((c, i) => (
          <a
            key={i}
            href={c.href || undefined}
            target={c.href ? "_blank" : undefined}
            rel={c.href ? "noopener noreferrer" : undefined}
            className={`${c.bg} p-6 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition`}
          >
            <span className={`${c.color} text-2xl mb-3`}>{c.icon}</span>
            <p className="font-mono font-bold mb-1">{c.label}</p>
            <p className="text-gray-700 text-xs font-sans">{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
