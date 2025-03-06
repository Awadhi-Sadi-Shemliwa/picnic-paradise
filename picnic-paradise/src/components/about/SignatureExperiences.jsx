const ExperienceCard = ({ image, title, description }) => (
    <article className="bg-[#222] rounded-[16px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-8">
        <h3 className="text-[24px] font-bold mb-4">{title}</h3>
        <p className="text-[#CCC]">{description}</p>
      </div>
    </article>
  );
  
  export const SignatureExperiences = () => {
    return (
      <section className="mb-32">
        <h2 className="text-[32px] font-bold mb-16 text-center">
          Our Signature Experiences
        </h2>
        <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-8">
          <ExperienceCard
            image="https://placehold.co/400x300"
            title="Sip & Paint"
            description="Combine artistic expression with premium wines in an intimate setting."
          />
          <ExperienceCard
            image="https://placehold.co/400x300"
            title="Luxury Picnics"
            description="Elevated outdoor dining experiences in breathtaking locations."
          />
          <ExperienceCard
            image="https://placehold.co/400x300"
            title="Match Screenings"
            description="Premium sports viewing events with luxury amenities."
          />
        </div>
      </section>
    );
  };
  