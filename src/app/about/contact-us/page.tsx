import React from "react";

const ContactUs = () => {
  return (
    <div>
      {" "}
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px]  leading-tight sm:leading-snug md:leading-[52px] font-light">
            Maps and Contact Information
          </h1>

          <h2 className="text-xl md:text-2xl font-light mb-2">
            1 University Avenue, Berekuso <br /> PMB CT 3, Cantonments <br />{" "}
            Accra, Ghana
          </h2>

          {/* Front Office */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Front Office</h2>
            <ul className="text-xl md:text-2xl font-light">
              <li>Tel: +233 (302) 610 330</li>
              <li>Tel: +233 302 974 980</li>
              <li>
                <a href="mailTo:info@ashesi.edu.gh">
                  Email:{" "}
                  <span className="text-au-burgundy underline hover:no-underline">
                    info@ashesi.edu.gh
                  </span>
                </a>{" "}
              </li>
            </ul>
          </div>

          {/*Undergraduate Admissions Office */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Undergraduate Admissions Office
            </h2>
            <ul className="text-xl md:text-2xl font-light">
              <li>Tel: +233 20 437 4374</li>
              <li>Tel: +233 50 131 8961</li>
              <li>Tel: +233 50 131 9264 </li>
              <li>
                <a href="mailTo:admissions@ashesi.edu.gh">
                  Email:{" "}
                  <span className="text-au-burgundy underline hover:no-underline">
                    admissions@ashesi.edu.gh
                  </span>
                </a>{" "}
              </li>
            </ul>
          </div>

          {/* Graduate Admissions Office */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Graduate Admissions Office
            </h2>
            <ul className="text-xl md:text-2xl font-light">
              <li>Tel: +233 20 231 9725</li>
              <li>Tel: +233 20 231 9733</li>
              <li>
                <a href="mailTo:graduate.admissions@ashesi.edu.gh ">
                  Email:{" "}
                  <span className="text-au-burgundy underline hover:no-underline">
                    graduate.admissions@ashesi.edu.gh
                  </span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
