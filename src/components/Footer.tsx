import Link from 'next/link';
import { Key } from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-au-burgundy  text-au-white py-[42px]'>
      <div className='2xl:w-[1440px] 2xl:mx-auto py-2.5 px-5 2xl:px-0'>
        {/* Quick Links */}
        <div>
          <h1 className='text-4xl py-[30px]'>Ouick Links</h1>
          <div className='footer-text'>
            <div className={` grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] lg:gap-0`}>
              {[
                {
                  categoryName: "University",
                  children: [
                    { text: "Webmail", linkTo: "#" },
                    { text: "Student Information", linkTo: "#" },
                    { text: "Academic Calender", linkTo: "#" },
                    { text: "Institutional Repository", linkTo: "#" },
                  ],
                },
                {
                  categoryName: "New Here?",
                  children: [
                    {
                      text: "Our Campus",
                      linkTo: "/",
                      ext: false,
                    },
                    {
                      text: "Alumni Stories",
                      linkTo: "/",
                      ext: false,
                    },
                    {
                      text: "Campus Life Blog",
                      linkTo: "/",
                      ext: false,
                    },
                    {
                      text: "Awards & Recognition",
                      linkTo: "/",
                      ext: false,
                    },
                  ],
                },
                {
                  categoryName: "For Businesses",
                  children: [
                    {
                      text: "Career Services Office",
                      linkTo: "",
                      ext: true,
                    },
                    {
                      text: "Recruit Ashesi Students",
                      linkTo: "",
                      ext: true,
                    },
                    {
                      text: "Job Openings",
                      linkTo: "",
                      ext: true,
                    },
                    {
                      text: "Support Amadeus",
                      linkTo: "",
                      ext: true,
                    },
                  ],
                },
              ].map((e, id) => {
                return (
                  <section
                    key={e.categoryName}
                    className={
                      e.categoryName === "Support"
                        ? "-translat-y-5 sm:translae-y-0 md:-translat-x-4 lg:translat-x-0 px-0 md:px-4 text-redish-20"
                        : "px-0 md:px-0"
                    }
                  >
                    <ul className="space-y-3">
                      <div
                        className={` font-heading text-[24px]`}
                      >
                        {e.categoryName}
                      </div>
                      <div className='space-y-1'>
                        {e.children.map((item: any, idx: Key | null | undefined) => {
                          return (
                            <li
                              key={idx}
                              className={`block text-sm lg:text-[16px] leading-[21px] text-redish-20`}
                            >
                              {item.isLink ? (
                                !item?.ext ? (
                                  <Link
                                    href={item?.linkTo}
                                    className="hover:underline text-redish-20"
                                  >
                                    <p>{item.text}</p>
                                  </Link>
                                ) : (
                                  <Link
                                    href={item.linkTo ?? "#"}
                                    target="_blank"
                                    className="hover:underline text-redish-20"
                                    passHref
                                  >
                                    <p>{item.text}</p>
                                  </Link>
                                )
                              ) : (
                                <div>
                                  <h1 className="text-greyish-10 pb-[4px]">
                                    {item.text}
                                  </h1>
                                  <p>{item.textTwo}</p>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  </section>
                );
              })}
            </div>

          </div>

        </div>
        {/* Contact Us */}
        <div className='pt-[50px] lg:pt-0'>
          <h1 className='text-4xl py-[30px]'>Contact Us</h1>
          <div className='footer-text'>
            <div className={` grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] lg:gap-0`}>
              {[
                {
                  categoryName: "Street Address",
                  children: [
                    {
                      text: "1 University Avenue,",
                      textTwo: " Berekuso, E/R (See Map Here)",
                      linkTo: "",
                    }
                  ],
                },
                {
                  categoryName: "Postal Address",
                  children: [
                    {
                      text: "PMB CT3",
                      textTwo:
                        "Cantonments, Accra.",
                      linkTo: "",
                    },
                  ],
                },
                {
                  categoryName: "Phone & Email",
                  children: [
                    {
                      text: "(T) +233 302 610 330",
                      ext: true,
                    },
                    {
                      text: "(E) info@ashesi.edu.gh",
                      ext: true,
                    },
                  ],
                },
                {
                  categoryName: "See Also",
                  children: [
                    {
                      text: "+ Ashesi Foundation",
                      ext: true,
                    },
                    {
                      text: "+ Climate Innovation Centre",
                      ext: true,
                    },
                    {
                      text: "+ Education Collaborative",
                      ext: true,
                    },
                  ],
                },
              ].map((e, id) => {
                return (
                  <section
                    key={e.categoryName}
                    className={
                      e.categoryName === "Support"
                        ? "-translat-y-5 sm:translae-y-0 md:-translat-x-4 lg:translat-x-0 px-0 md:px-4 text-redish-20"
                        : "px-0 md:px-0"
                    }
                  >
                    <ul className="space-y-3">
                      <div
                        className={` font-heading text-[24px]`}
                      >
                        {e.categoryName}
                      </div>
                      <div className='space-y-1'>
                        {e.children.map((item: any, idx: Key | null | undefined) => {
                          return (
                            <li
                              key={idx}
                              className={`block text-sm lg:text-[16px] leading-[21px] text-redish-20`}
                            >
                              {item.isLink ? (
                                !item?.ext ? (
                                  <Link
                                    href={item?.linkTo}
                                    className="hover:underline text-redish-20"
                                  >
                                    <p>{item.text}</p>
                                  </Link>
                                ) : (
                                  <Link
                                    href={item.linkTo ?? "#"}
                                    target="_blank"
                                    className="hover:underline text-redish-20"
                                    passHref
                                  >
                                    <p>{item.text}</p>
                                  </Link>
                                )
                              ) : (
                                <div>
                                  <h1 className="text-greyish-10 pb-[4px]">
                                    {item.text}
                                  </h1>
                                  <p>{item.textTwo}</p>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  </section>
                );
              })}
            </div>

          </div>

        </div>
        {/* Footer end */}
        <div className='flex justify-between items-center'>
          <div className='flex gap-[20px] items-center w-[100%]'>
            <div className="relative h-48 w-48">
              <Image
                src="/assets/au-web-logo-d.png"
                fill
                alt={"Logo preview"}
                className='object-center'
              />
            </div>

            <h1>© Ashesi University. Est. 2002.  All rights reserved.</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer