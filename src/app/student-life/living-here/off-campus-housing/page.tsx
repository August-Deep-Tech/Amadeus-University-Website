import React from 'react'

const OffCampusHousing = () => {
  const housingListings = [
    {
      name: " Dufie Platinum Hostel",
      imageSrc: "/assets/studentlife/studentaffairs/livinghere/offcampushousing/offcampushousing-1.jpg",
      amenities: ["Water", "Parking", "Stand-by Generator", "Security", "Janitorial Service"],
      email: "dphostels@yahoo.com",
      phone: "+233.201323058",
      locationUrl: "#"
    },
    {
      name: "Charlotte Courts",
      imageSrc: "/assets/studentlife/studentaffairs/livinghere/offcampushousing/offcampushousing-2.jpg",
      amenities: ["Water", "Parking", "Stand-by Generator", "Security", "Janitorial Service"],
      email: "esenvool@yahoo.com",
      phone: "0261446762/0266384177",
      locationUrl: "#"
    },
  ];
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light ">
            Off-campus Housing Options
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            While Ashesi continues to expand on-campus housing, there are several options near campus for students to explore.
            Check with the Student Affairs Office if you decide to choose off-campus housing and need guidance on available options
          </p>
        </div>
      </div>

      {/* off campus */}
      <div className='ContentContainer'>
        <div className='flex flex-col gap-[20px]'>
          {housingListings.map((listing, index) => (
            <div key={index} className="bg-white text-au-100-black text-xl sm:text-lg md:text-[24px] font-light mb-8 border-t border-au-light-grey pt-[20px]">
              <h2 className="text-3xl font-bold mb-4">{listing.name}</h2>

              <img src={listing.imageSrc} alt={`${listing.name} housing`} className="w-full rounded-lg mb-6" />

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Amenities</h3>
                <ul className="list-disc pl-5 flex flex-col gap-[5px]">
                  {listing.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Contact</h3>
                <a href={`mailto:${listing.email}`} className="transition duration-300 block">{listing.email}</a>
                <a href={`tel:${listing.phone}`} className="transition duration-300 block">{listing.phone}</a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p>
                  Click <a href={listing.locationUrl} className="transition duration-300 text-au-burgundy">here</a> to view location from campus
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OffCampusHousing