import { myServices } from "@/constants/services.data";
import { ServicesCard } from "@/components/atoms/services-card";

export const ServicesList = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20 max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold lg:font-extrabold font-mono text-center mb-15">
        See my Services
      </h2>
      <div className="space-y-8">
        {myServices.map((service, i) => (
          <ServicesCard key={i} item={service} />
        ))}
      </div>
    </section>
  );
};
