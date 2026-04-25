export default function RotatingText({
  containerClassName = "w-[200px] h-[200px]",
  textClassName = "text-[40px]",
}: {
  containerClassName?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center bg-[#111] rounded-full text-white shadow-2xl ${containerClassName}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full animate-[spin_10s_linear_infinite]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>

        <text fill="white" fontSize="19">
          <textPath
            href="#circlePath"
            startOffset="0%"
            textLength="471"
            lengthAdjust="spacing"
          >
            OWN &amp; GROW YOUR BUSINESS IN UAE •
          </textPath>
        </text>
      </svg>

      <div className={`${textClassName} font-light`}>100%</div>
    </div>
  );
}
