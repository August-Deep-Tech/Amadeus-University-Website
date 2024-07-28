import React from 'react';

export interface LecturerProfileProps {
    name: string;
    slug: string;
    position: string;
    department: string;
    email: string;
    education: string[];
    photoUrl: string;
    teachingStatement?: string;
    professionalbiography?: string;
    CoursesTaught?: string[];
    researchStatement?: string;
    research?: string
}

const LecturerProfile: React.FC<LecturerProfileProps> = ({
    name,
    position,
    department,
    email,
    education,
    photoUrl,
    professionalbiography,
    teachingStatement,
    CoursesTaught,
    researchStatement,
    research
}) => {
    return (
        <div className="bg-white mb-6">
            <h2 className="text-2xl sm:text-3xl mb-4 font-light">{name}</h2>
            <div className="flex flex-col-reverse sm:flex-row gap-[50px]  w-[100%] mb-10">
                <div className="text-xl font-light">
                    <p className="mb-1">{position}</p>
                    <p className="">{department}</p>
                    <p className="mb-4 text-au-burgundy"><a href={`mailto:${email}`}>{email}</a></p>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Education</h3>
                        <ul className="list-disc list-inside">
                            {education.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[100%] h-fit">
                    <img src={photoUrl} alt={name} className="" />
                </div>
            </div>
            <div className='flex flex-col gap-[30px]'>
                {professionalbiography && <div>
                    <h3 className="text-xl font-semibold pb-[10px]">Professional Biography</h3>
                    <hr />
                    <p className="text-xl font-light pt-[10px]">{professionalbiography}</p>
                </div>}

                {teachingStatement && <div>
                    <h3 className="text-xl font-semibold pb-[10px]">Teaching Statement</h3>
                    <hr />
                    <p className="text-xl font-light pt-[10px]">{teachingStatement}</p>
                </div>}
            </div>
        </div>
    );
};

export default LecturerProfile;


export const lecturers: LecturerProfileProps[] = [
    {
        name: 'Ekua Mensimah Thompson Kwaffo',
        slug: 'ekua-mensimah-thompson-kwaffo',
        position: 'Lecturer',
        department: 'Humanities and Social Science',
        email: 'mensima.thompson@ashesi.edu.gh',
        education: [
            'MPhil, French Linguistics and Didactics, University of Cape Coast',
            'BA (Hons), French and Sociology, University of Ghana'
        ],
        photoUrl: '/assets/academics/people/people-1.jpg', // Replace with the actual path to the photo
        teachingStatement: 'Nelson Mandela put it right when he said, “Education is the most powerful weapon which can be used to change the world.” This reflects, to a large extent, my passion for education. I believe good and quality education is a powerful tool that can shift paradigms of an entire generation.',
        CoursesTaught: [],
        researchStatement: '',
        professionalbiography: '',
        research: ''
    },
    {
        name: 'Ebenezer Obiri Addo, Ph.D.',
        slug: 'ebenezer-obiri-addo',
        position: 'Associate Professor',
        department: 'Humanities and Social Science',
        email: 'ebenezer.obiri@ashesi.edu.gh',
        education: [
            'MPhil, French Linguistics and Didactics, University of Cape Coast',
            'BA (Hons), French and Sociology, University of Ghana'
        ],
        photoUrl: '/assets/academics/people/people-2.jpg', // Replace with the actual path to the photo
        teachingStatement: 'Nelson Mandela put it right when he said, “Education is the most powerful weapon which can be used to change the world.” This reflects, to a large extent, my passion for education. I believe good and quality education is a powerful tool that can shift paradigms of an entire generation.',
        CoursesTaught: [],
        researchStatement: '',
        research: '',
        professionalbiography: 'Ebenezer Obiri Addo is Associate Professor of Africana Studies at Ashesi University. He received a M.Phil. and Ph.D. from Drew University in Madison, New Jersey; M. A. from Princeton Theological Seminary, B. A. (Hons.) from the University of Ghana, Legon, and a Diploma in Theology from Trinity College, Legon. He has been a Fellow at Princeton University’s African and African American Studies Program, and the Center for the Study of Religion. He has taught at Drew University, Seton Hall University, Rutgers University STEPS program, Lafayette College, and Bates College. He is the author of Kwame Nkrumah: A Case Study of Religion and Politics in Ghana, and co-author (with Lillie J. Edwards) of A Teacher’s Guide to Chinua Achebe’s Things Fall Apart.'
    },
]