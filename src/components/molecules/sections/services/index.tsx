import { myServices } from "@/constants/services.data";

export const ServicesList = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20 max-w-4xl">
      <h2 className="text-3xl font-bold lg:font-extrabold font-mono text-center mb-15">
        See my Services
      </h2>
      <div className="space-y-8">
        {myServices.map((service, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1">{service.icon}</div>
            <div>
              <h3 className="font-mono font-bold text-lg">{service.title}</h3>
              <p className="font-sans text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
