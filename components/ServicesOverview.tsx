import { playfair } from "@/lib/fonts";

const services = [
  {
    title: ["فلاتر", "المطابخ"],
    description:
      "تنقية موثوقة من 5 و 7 مراحل مع إثراء بالمعادن لمياه شرب نقية وآمنة وصحية أكثر.",
  },
  {
    title: ["فلتر", "الغسيل العكسي"],
    description:
      "نظام تنقية عالي السعة مزود بتقنية التنظيف الذاتي للغسيل العكسي، مما يضمن عمرًا أطول وصيانة أقل.",
  },
  {
    title: ["فلاتر", "متعددة المراحل"],
    description:
      "حلول مرنة لتلبية الاحتياجات المتنوعة، وإزالة الرواسب والكلور والمعادن الثقيلة بفعالية.",
  },
  {
    title: ["فلتر", "جامبو"],
    description:
      "فلتر عالي السعة مصمم للمنازل والمطاعم والمرافق التي تتطلب تنقية مياه عالية الأداء.",
  },
];

const colors = ["#1e3a8a", "#1e40af", "#1e3a8a", "#1e40af"];

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
              className={`text-2xl font-bold mb-4 leading-tight tracking-tight text-white ${playfair.className}`}
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
