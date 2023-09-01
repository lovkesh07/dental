import React from 'react'


const Content2 = () => {

    const people = [
        {
          name: "Porcelain",
          // role: "connect within 60 secs",
          imageUrl:"https://m.economictimes.com/thumb/msid-78398032,width-1200,height-900,resizemode-4,imgsize-463212/online-consultations-have-gone-up-by-200-per-cent-in-the-same-period-showing-that-there-has-been-a-clear-shift-towards-teleconsultations-.jpg" ,
          
        },

        {
            name: "Metal Free Porcelain ",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://www.enukesoftware.com/blog/wp-content/uploads/2017/02/pharmacist-gives-bag-with-antibiotic-drugs-according-recipe-hands-patient-pharmacy-vector-concept_53562-7866-1200x900.jpg" ,
            
          },
          {
            name: "Flexible Partial",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/522/2022/06/iStock-1174677845.jpg" ,
            
          },
          {
            name: "Chorme Nickel",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://www.apollospectra.com/backend/web/uploads/1293843317.jpg" ,
            
          },
          {
            name: "Cast Partial Dentures",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://theavenuesinsider.com/storage/app/public/post/QZWxKz2EWaLU6Nlb7LzECYXCPFgZgcktXUe7LmFf.jpg" ,
            
          },
          {
            name: "Zirconia Metal Free",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://as1.ftcdn.net/v2/jpg/04/55/65/62/1000_F_455656223_zbyAL00KpAzbR47PVbz3wQLuCO04QN9N.jpg" ,
            
          },
          {
            name: "All Acrylic Work",
            // role: "Stay informed with the latest medical updates ",
            imageUrl:"https://dentistmissionviejooc.com/wp-content/uploads/2022/12/when-do-i-replace-dental-fillings.jpg" ,
            
          },
          
          

        // More people...
      ];

      
  return (
    <>
    <div id="team">
      {/* Team section */}

      <div className=" py-8 pt-16 lg:pt-16 bg-[url('https://dentistwhittierca.com/wp-content/uploads/2023/05/Dentist.jpg')] bg-cover bg-fixed bg-top bg-no-repeat">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto  max-w-2xl  text-center">
            <h2
              className="text-4xl text-center tracking-tight backdrop-brightness-50 p-6 text-white sm:text-4xl lg:text-6xl font-extrabold"
              data-aos="fade-up"
            >
              Accessories
            </h2>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="fade-up"
            >
              We’re a group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <ul className="p-2 mx-auto mt-16 grid max-w-2xl  grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => (
              <li className="rounded-2xl bg-white shadow-xl hover:shadow-gray-500" key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[14/13] w-full rounded-t-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  // data-aos="fade-up" data-aos-duration="1500"
                />
                <div className="px-6 py-2">
                <h3 className=" mt-2  sm:text-md font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p className=" text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content2