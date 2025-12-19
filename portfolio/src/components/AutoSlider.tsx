const AutoSlider = ({ images }: { images: string[] }) => {
  return (
    <div className="relative overflow-hidden w-full">
      
      {/* Animation definition */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="flex w-max gap-6 animate-[slide_25s_linear_infinite]
                   hover:[animation-play-state:paused]"
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="achievement"
            className="w-[260px] sm:w-[320px] md:w-[380px]
                       h-[160px] sm:h-[200px] md:h-[240px]
                       object-cover rounded-xl
                       border border-blue-700/40
                       shadow-md shadow-blue-900/40"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider