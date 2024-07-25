import React from "react";

const AlumniRelations = () => {
  return (
    <div>
      {" "}
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light mb-6">
            The Alumni Relations Office
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The Ashesi alumni relations office exists to build alumni ownership
            in the mission, vision and direction of Ashesi University by
            nurturing strong relationships in the alumni community,
            communicating needs and opportunities, and encouraging alumni
            participation in activities that help support and advance the
            university.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Your relationship with Ashesi should not end after graduation! We
            hope that together, we can build a dynamic network so we can
            continue to engage more effectively in service to each other and to
            Ashesi, the place that helped prepare us for our future and that we
            call our alma mater.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            For assistance with your alumni experience, career connections and
            other resources, please contact:{" "}
            <span className="text-au-burgundy underline hover:no-underline cursor-pointer">
              <a href="mailto:alumnioffice@ashesi.edu.gh">
                alumnioffice@ashesi.edu.gh
              </a>
            </span>{" "}
            or call:{" "}
            <span className="text-au-burgundy underline hover:no-underline cursor-pointer">
              <a href="tel:+233302610339"></a> (+233) 302 610 339
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlumniRelations;
