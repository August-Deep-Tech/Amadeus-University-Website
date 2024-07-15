export const menuData = [
    {
        name: 'About',
        link: '/about',
        submenu: [
            { name: 'Overview', link: '/about' },
            {
                name: 'Facts and Data', link: '/about/facts-and-data/quick-facts', submenu: [
                    { name: 'Quick Facts', link: '/about/facts-and-data/quick-facts' },
                    { name: 'Mission and History', link: '/about/facts-and-data/quick-facts' }
                ]
            },
            {
                name: 'Leadership', link: '/about/leadership/governance', submenu: [
                    { name: 'Governance', link: '/about/leadership/governance' },
                    { name: "President's Office", link: '/about/leadership/' }
                ]
            },
            { name: 'Our Campus', link: '/about/our-campus' },
            { name: 'Alumni', link: '/about/alumni' },
            { name: 'Amadeus Next Decade', link: '/about/amadeus-next-decade' },
            { name: 'Contact Us', link: '/about/contact-us' },
        ]
    },
    {
        name: 'Admission',
        link: '/admission',
        submenu: [
            { name: 'Overview', link: '/admission' },
            {
                name: 'Amadeus Advantage', link: '/admission/amadeus-advantage/explore-amadeus', submenu: [
                    { name: 'Explore Amadeus', link: '/admission/amadeus-advantage/explore-amadeus' },
                    { name: 'Graduate Outcomes', link: '/admission/amadeus-advantage/graduate-outcomes' }
                ]
            },
            {
                name: 'Undergraduate Programs', link: '/admission/undergraduate-programs/admissions-process', submenu: [
                    { name: 'Admissions Process', link: '/admission/undergraduate-programs/admissions-process' },
                    { name: 'Fees', link: '/admission/undergraduate-programs/fees' }
                ]
            },
            { name: 'Our Campus', link: '#' },
            { name: 'Job Openings', link: '#' },
            { name: 'Contact Us', link: '#' },
        ]
    },
    {
        name: 'Academics',
        link: '/academics',
        submenu: [
            { name: 'Overview', link: '#' },
            { name: 'Support', link: '#' },
            { name: 'Custom Development', link: '#' }
        ]
    },
    {
        name: 'Student Life',
        link: '/student-life',
        submenu: [
            { name: 'Consulting', link: '#' },
            { name: 'Support', link: '#' },
            { name: 'Custom Development', link: '#' }
        ]
    },
    {
        name: 'News',
        link: '/news',
        submenu: [
            { name: 'Consulting', link: '#' },
            { name: 'Support', link: '#' },
            { name: 'Custom Development', link: '#' }
        ]
    },
    {
        name: 'Useful Links',
        link: '/useful-links',
        submenu: [
            { name: 'Consulting', link: '#' },
            { name: 'Support', link: '#' },
            { name: 'Custom Development', link: '#' }
        ]
    },
    { name: 'Job Openings', link: '/job-openings', submenu: [] }
];