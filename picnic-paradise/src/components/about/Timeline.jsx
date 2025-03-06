import { milestones } from "./types";

export const Timeline = () => {
  return (
    <section className="mb-32">
      <h2 className="text-[32px] font-bold mb-16 text-center">Our Journey</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#333] transform -translate-x-1/2" />
        {milestones.map((milestone, index) => (
          <article
            key={milestone.year}
            className={`relative grid grid-cols-2 gap-8 mb-8 ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            <div className={index % 2 === 0 ? "" : "col-start-2"}>
              <h3 className="text-[24px] font-bold">{milestone.year}</h3>
              <h4 className="text-[20px] font-semibold mb-2">
                {milestone.title}
              </h4>
              <p className="text-[#CCC]">{milestone.description}</p>
            </div>
            <div
              className={`absolute left-1/2 top-4 w-4 h-4 bg-[#333] rounded-full transform -translate-x-1/2`}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
