export default function RotatingText({
  containerClassName = "w-[200px] h-[200px]",
  textClassName = "text-[40px]",
}: {
  containerClassName?: string;
  textClassName?: string;
}) {
  const rotatingText = "تنقية متطورة • نقاء لا مثيل له في قطر • ";
  const letters = Array.from(rotatingText);

  return (
    <div
      className={`relative flex items-center justify-center bg-[#111] rounded-full text-white shadow-2xl overflow-hidden ${containerClassName}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]"
        aria-hidden="true"
      >
        {letters.map((letter, index) => (
          <text
            key={`${letter}-${index}`}
            x="50"
            y="9"
            fill="currentColor"
            fontSize="7.2"
            fontWeight="500"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${(360 / letters.length) * index} 50 50)`}
          >
            {letter}
          </text>
        ))}
      </svg>

      <div className={`relative z-10 ${textClassName} font-light`}>100%</div>
    </div>
  );
}
