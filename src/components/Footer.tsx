import Link from 'next/link';
import { Key } from 'react';

const Footer = () => {
  return (
    <footer className='bg-au-light-purple py-[42px]'>
      <div className='container mx-auto '>
        <div className='footer-text'>
          <div className={` grid grid-cols-2 flex-row gap-[28px] gap-y-[35px] sm:flex lg:mt-0`}>
            {[
              {
                categoryName: "University",
                children: [
                  { text: "Webmail", linkTo: "/shop/all-products" },
                  { text: "Best Sellers", linkTo: "/shop/all-products" },
                  { text: "New in Stock", linkTo: "/shop/all-products" },
                  { text: "Book A Consultation", linkTo: "https://www.instagram.com/direct/t/17850628700735861", ext: true },
                ],
              },
              {
                categoryName: "Help",
                children: [
                  {
                    text: "Terms of Service",
                    linkTo: "/",
                    ext: false,
                  },
                  {
                    text: "Refund Policy",
                    linkTo: "/",
                    ext: false,
                  },
                  {
                    text: "Legal",
                    linkTo: "/",
                    ext: false,
                  },
                ],
              },
              {
                categoryName: "Community",
                children: [
                  {
                    text: "Instagram",
                    linkTo: "https://www.instagram.com/theskintyshop.ng/",
                    ext: true,
                  },
                  {
                    text: "Facebook",
                    linkTo: "https://web.facebook.com/profile.php?id=100083236395301",
                    ext: true,
                  },
                  {
                    text: "Twitter",
                    linkTo: "",
                    ext: true,
                  },
                  {
                    text: "Tiktok",
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
                      : "px-0 md:px-4"
                  }
                >
                  <ul className="space-y-3 md:space-y-4">
                    <span
                      className={` font-heading text-[24px] text-au-white`}
                    >
                      {e.categoryName}
                    </span>
                    {e.children.map((item: any, idx: Key | null | undefined) => {
                      return (
                        <li
                          key={idx}
                          className={`block text-[16px] md:text-[20px] leading-[21px] text-redish-20`}
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
                  </ul>
                </section>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer