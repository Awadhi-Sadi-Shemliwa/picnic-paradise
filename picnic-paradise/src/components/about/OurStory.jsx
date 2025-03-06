const StatCard = ({ number, text }) => (
    <article className="bg-[#222] rounded-[16px] p-8">
      <h3 className="text-[24px] font-bold mb-4">{number}</h3>
      <p className="text-[#CCC]">{text}</p>
    </article>
  );
  
  export const OurStory = () => {
    return (
      <section className="grid max-lg:grid-cols-1 grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-[32px] font-bold mb-6">Our Story</h2>
          <p className="text-[18px] text-[#CCC] mb-6">
            Born from a passion for excellence and an eye for detail, LuxeEvents
            has grown from a boutique agency to a global leader in premium event
            experiences.
          </p>
          <p className="text-[18px] text-[#CCC]">
            We believe every moment should be memorable, every gathering should
            tell a story, and every event should exceed expectations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard number="200+" text="Events Annually" />
          <StatCard number="98%" text="Client Satisfaction" />
          <StatCard number="15+" text="Countries Served" />
          <StatCard number="50+" text="Team Members" />
        </div>
      </section>
    );
  };
  