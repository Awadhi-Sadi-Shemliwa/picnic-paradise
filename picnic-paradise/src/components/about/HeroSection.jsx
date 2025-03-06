export const HeroSection = () => {
    return (
      <section className="relative h-[600px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x600"
          alt="Luxury Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent flex items-center">
          <div className="max-w-[1200px] mx-auto px-8 w-full">
            <h1 className="text-[48px] font-bold leading-[1.2] mb-6 max-w-[600px]">
              Crafting Unforgettable Moments
            </h1>
            <p className="text-[18px] text-[#CCC] max-w-[500px] mb-8">
              Since 2018, we've been transforming ordinary occasions into
              extraordinary experiences, setting new standards in luxury event
              planning.
            </p>
          </div>
        </div>
      </section>
    );
  };
  