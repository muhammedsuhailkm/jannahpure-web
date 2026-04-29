import { playfair } from "@/lib/fonts";

const services = [
  {
    title: ["Business", "Setup"],
    description:
      "End-to-end business setup solutions including trade license, office space, and PRO services across the UAE.",
  },
  {
    title: ["Company", "Formation"],
    description:
      "Obtain a comprehensive package for Mainland LLC & Freezone Company Formation in Dubai with full legal compliance.",
  },
  {
    title: ["Document", "Clearing"],
    description:
      "Fast and reliable document clearing, attestation, and government liaison services for all your business needs.",
  },
  {
    title: ["Freezone", "Services"],
    description:
      "Strategic freezone company formation with 100% ownership, zero tax benefits, and streamlined visa processing.",
  },
];

const colors = ["#2d5a3d", "#1e3a5f", "#2d5a3d", "#1e3a5f"];

const ServicesOverview = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-background">
      <div className="max-w-[1200px] mx-auto rounded-[14px] overflow-hidden grid grid-cols-4 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
        {services.map((service, index) => (
          <div
            key={service.title.join(" ")}
            className="px-7 py-10 transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors[index] }}
          >
            <h3
              className={`text-2xl font-normal mb-4 leading-tight tracking-tight text-white ${playfair.className}`}
            >
              {service.title[0]}
              <br />
              {service.title[1]}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
