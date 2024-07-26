export const menuData = [
  {
    name: "About",
    link: "/about",
    submenu: [
      // {name: "Overview", link: "/about"},
      {
        name: "Vision, Mission and History",
        link: "/about/vision-mission-and-history",
      },
      {
        name: "Logo and Identity",
        link: "/about/logo-and-identity",
      },
      {
        name: "Leadership",
        link: "/about/leadership/trustees",
        submenu: [
          { name: "Trustees", link: "/about/leadership/trustees" },
          {
            name: "Governing Council",
            link: "/about/leadership/governing-council",
          },
          {
            name: "University Management",
            link: "/about/leadership/university-management",
          },
          {
            name: "Student Leadership",
            link: "/about/leadership/student-leadership",
          },
        ],
      },
      { name: "Recognition", link: "/about/recognition" },
      {
        name: "University Policies",
        link: "/about/university-policies",
      },
      { name: "Reports", link: "/about/reports" },
      // {
      //   name: "Facts and Data",
      //   link: "/about/facts-and-data/quick-facts",
      //   submenu: [
      //     {name: "Quick Facts", link: "/about/facts-and-data/quick-facts"},
      //   ],
      // },
      { name: "Our Campus", link: "/about/our-campus" },
      {
        name: "Job Openings",
        link: "https://recruitment.amadeusuniversity.org/",
      },
      {
        name: "Alumni",
        link: "/about/alumni",
        submenu: [
          { name: "Alumni Relations", link: "/about/alumni/alumni-relations" },
          { name: "Alumni Council", link: "/about/alumni/alumni-council" },
          { name: "Alumni Resources", link: "/about/alumni/alumni-resources" },
          { name: "Make a Gift", link: "/about/alumni/make-a-gift" },
        ],
      },
      { name: "Contact Us", link: "/about/contact-us" },
    ],
  },
  {
    name: "Admission",
    link: "/admission/overview",
    submenu: [
      { name: "Overview", link: "/admission/overview" },
      {
        name: "Choose Amadeus",
        link: "/admission/choose-amadeus/graduate-outcomes",
        submenu: [
          {
            name: "Graduate Outcomes",
            link: "/admission/choose-amadeus/graduate-outcomes",
          },
          {
            name: "Our Campus & Student Life",
            link: "/admission/choose-amadeus/our-campus"
          },
        ],
      },
      {
        name: "Undergraduate Programmes",
        link: "/admission/undergraduate-programmes/tuition-and-fees",
        submenu: [
          {
            name: "Tuition & Fees",
            link: "/admission/undergraduate-programmes/tuition-and-fees",
          },
          {
            name: "Scholarships and Financial Aid",
            link: "/admission/undergraduate-programmes/scholarships-and-financial-aid",
          },
          {
            name: "How to Apply",
            link: "/admission/undergraduate-programmes/how-to-apply",
          },
        ],
      },
    ],
  },
  // academics nav menu
  {
    name: "Academics",
    link: "/academics",
    submenu: [
      {
        name: "Faculties",
        link: "/academics/faculties",
        submenu: [
          // faculty of social and managemwnt sciences
          {
            name: "Faculty of Social and Management Sciences",
            link: "/academics/faculties/faculty-of-social-and-management-sciences",
            submenu: [
              {
                name: "People",
                link: "/academics/faculties/faculty-of-social-and-management-sciences/people",
              },
              {
                name: "Programmes",
                link: "/academics/faculties/faculty-of-social-and-management-sciences/programmes/description",
                submenu: [
                  {
                    name: "Description",
                    link: "/academics/faculties/faculty-of-social-and-management-sciences/programmes/description",
                  },
                  {
                    name: "Entry Requirements",
                    link: "/academics/faculties/faculty-of-social-and-management-sciences/programmes/entry-requirements",
                  },
                ],
              },
            ],
          },
          // faculty of science
          {
            name: "Faculty of Science",
            link: "/academics/faculties/faculty-of-science",
            submenu: [
              {
                name: "People",
                link: "/academics/faculties/faculty-of-science/people",
              },
              {
                name: "Programmes",
                link: "/academics/faculties/faculty-of-science/programmes/description",
                submenu: [
                  {
                    name: "Description",
                    link: "/academics/faculties/faculty-of-science/programmes/description",
                  },
                  {
                    name: "Entry Requirements",
                    link: "/academics/faculties/faculty-of-science/programmes/entry-requirements",
                  },
                ],
              },
            ],
          },
          // faculty of engineering
          {
            name: "Faculty of Engineering",
            link: "/academics/faculties/faculty-of-engineering",
            submenu: [
              {
                name: "People",
                link: "/academics/faculties/faculty-of-engineering/people",
              },
              {
                name: "Programmes",
                link: "/academics/faculties/faculty-of-engineering/programmes/description",
                submenu: [
                  {
                    name: "Description",
                    link: "/academics/faculties/faculty-of-engineering/programmes/description",
                  },
                  {
                    name: "Entry Requirements",
                    link: "/academics/faculties/faculty-of-engineering/programmes/entry-requirements",
                  },
                ],
              },
            ],
          },
          // faculty of allied health sciences
          {
            name: "Faculty of Allied Health Sciences",
            link: "/academics/faculties/faculty-of-allied-health-sciences",
            submenu: [
              {
                name: "People",
                link: "/academics/faculties/faculty-of-allied-health-sciences/people",
              },
              {
                name: "Programmes",
                link: "/academics/faculties/faculty-of-allied-health-sciences/programmes/description",
                submenu: [
                  {
                    name: "Description",
                    link: "/academics/faculties/faculty-of-allied-health-sciences/programmes/description",
                  },
                  {
                    name: "Entry Requirements",
                    link: "/academics/faculties/faculty-of-allied-health-sciences/programmes/entry-requirements",
                  },
                ],
              },
            ],
          },
          // {name: "Humanities", link: "/academics/programmes/humanities"},
          // {
          //   name: "Economic & Business",
          //   link: "/academics/programmes/economics-and-business",
          // },
          // {
          //   name: "Computer Science",
          //   link: "/academics/programmes/computer-science",
          // },
          // {name: "Engineering", link: "/academics/programmes/engineering"},
        ],
      },
      // {
      //   name: "Programmes",
      //   link: "/academics/programmes",
      //   submenu: [
      //     {
      //       name: "Overview",
      //       link: "/academics/programmes",
      //     },
      //     {name: "Humanities", link: "/academics/programmes/humanities"},
      //     {
      //       name: "Economic & Business",
      //       link: "/academics/programmes/economics-and-business",
      //     },
      //     {
      //       name: "Computer Science",
      //       link: "/academics/programmes/computer-science",
      //     },
      //     {name: "Engineering", link: "/academics/programmes/engineering"},
      //   ],
      // },
      { name: "Learning Goals", link: "/academics/learning-goals" },
      { name: "Academic Registry", link: "/academics/academic-registry" },
      // {name: "Calendar", link: "#"},
      {
        name: "Library",
        link: "https://library.amadeusuniversity.org/#/app/landing",
      },
      // {name: "Academic Affairs", link: "#"},
    ],
  },
  // student life nav menu
  {
    name: "Student Life",
    link: "/student-life/overview",
    submenu: [
      { name: "Overview", link: "/student-life/overview" },
      {
        name: "Student Affairs",
        link: "/student-life/student-affairs",
        submenu: [
          {
            name: "Student Handbook",
            link: "/student-life/student-affairs/student-handbook",
          },
          {
            name: "Honour Code",
            link: "/student-life/student-affairs/honour-code",
          },
          {
            name: "Clubs and Societies",
            link: "/student-life/student-affairs/clubs-and-societies",
          },
        ],
      },
      {
        name: "Living Here",
        link: "/student-life/living-here",
        submenu: [
          {
            name: "On-campus Housing",
            link: "/student-life/living-here/on-campus-housing",
          },
          {
            name: "Off-campus Housing",
            link: "/student-life/living-here/off-campus-housing",
          },
        ],
      },
      {
        name: "Student Services",
        link: "/student-life/student-services",
        submenu: [
          {
            name: "Coaching, Counseling & Advising",
            link: "/student-life/student-services/coaching-counseling-advising",
          },
          {
            name: "Diversity & International Programs",
            link: "/student-life/student-services/diversity-international-programs",
            submenu: [
              {
                name: "International Programs",
                link: "/student-life/student-services/diversity-international-programs/international-programs",
              },
              {
                name: "Diversity & Inclusion",
                link: "/student-life/student-services/diversity-international-programs/diversity-inclusion",
              },
              {
                name: "Sexual Misconduct Prevention",
                link: "/student-life/student-services/diversity-international-programs/sexual-misconduct-prevention",
              },
            ],
          },
          {
            name: "Career Services",
            link: "/student-life/student-services/career-services",
            submenu: [
              {
                name: "For Students",
                link: "/student-life/student-services/career-services/for-students",
              },
              {
                name: "For Recruiters",
                link: "/student-life/student-services/career-services/for-recruiters",
              },
              {
                name: "Postgraduate Placement",
                link: "/student-life/student-services/career-services/postgraduate-placement",
              },
              {
                name: "Recruiting Partners",
                link: "/student-life/student-services/career-services/recruiting-partners",
              },
            ],
          },
          {
            name: "Health and Wellbeing",
            link: "/student-life/student-services/health-and-wellbeing",
          },
        ],
      },
    ],
  },
  {
    name: "News",
    link: "/news",
    submenu: [
      { name: "Consulting", link: "#" },
      { name: "Support", link: "#" },
      { name: "Custom Development", link: "#" },
    ],
  },
  {
    name: "Useful Links",
    link: "/useful-links",
    submenu: [
      { name: "Consulting", link: "#" },
      { name: "Support", link: "#" },
      { name: "Custom Development", link: "#" },
    ],
  },
  // { name: 'Job Openings', link: '/job-openings', submenu: [] }
];
