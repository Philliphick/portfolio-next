import React from 'react';
import Link from 'next/link';

const MyComponent = () => {
  return (
    <>
      <div className='h-screen'> 
      
      <section className="h-full w-full pt-16 bg-gradient-to-br from-[#0a1921] via-[#0a1921] to-[#6faef8]">
      <div className='w-1/4 absolute top-0 bg-gradient-to-r from-[#659fe3] via-opacity-10 p-4 opacity-90'>
          <Link href='/'><h1 className='text-xl text-white pl-6 font-bold border-l-4 hover:scale-105 transition duration-300 dark:text-white'>Home</h1></Link>
      </div>
              <div className="container mx-auto mt-24 text-white">
                  <div className="flex flex-wrap items-center">
                      <div className="w-10/12 md:w-6/12 lg:w-6/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gradient-to-b from-[#6faef8]">
                              <img alt="codecollab" src="/weatherapp.png" className="w-full align-middle" />
                              <blockquote className="relative p-8 mb-4">
                                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">

                                  </svg>
                                  <h4 className="text-xl font-bold text-white">
                                      Weather App - with OpenWeather API
                                  </h4>
                                  <p className="text-md font-light mt-2 text-white">
                                      Weather forecast application. Users are able to search by city and recieve daily and weekly forecasts.
                                  </p>
                                  <p className="absolute right-6 bottom-0 font-bold mt-2 text-white">Duration: 1 week</p>
                              </blockquote>
                          </div>
                      </div>

                      <div className="w-full md:w-6/12 px-4">
                          <div className="flex flex-wrap">
                              <div className="w-full md:w-6/12 px-4">
                                  <div className="relative flex flex-col mt-4">
                                      <div className="px-4 py-5 flex-auto">
                                          <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full border-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

                                          </div>
                                          <h6 className="text-xl mb-1 font-semibold">Context</h6>
                                          <p className="mb-4">
                                          This was a collaboration with two other team members. We worked collectively to integrate the OpenWeather API.<br></br><br></br> My responsibility was to create the weekly forecast, which involved making multiple calls to the API to get the various data (humidity, temperature, etc.).
                                          
                                          </p>
                                      </div>
                                  </div>
                                  
                              </div>
                              <div className="w-full md:w-6/12 px-4">
                                  <div className="relative flex flex-col min-w-0 mt-4">
                                      <div className="px-4 py-5 flex-auto">
                                      <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full border-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>


                                          </div>
                                          <h6 className="text-xl mb-1 font-semibold">Tech</h6>
                                          <p className="mb-4 text-blueGray-500">
                                              Javascript // Axios // Postman // Tailwind CSS // Openweather API
                                          </p>
                                      </div>
                                  </div>
                                  <div className="relative flex flex-col min-w-0">
                                      <div className="px-4 py-5 flex-auto">
                                      <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full border-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>




                                          </div>
                                          <h6 className="text-xl mb-1 font-semibold">Features</h6>
                                          <p className="mb-4 text-blueGray-500">
                                              External API integration // Single Page Application // UI Library and Component Integration
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='w-screen flex flex-row gap-8 justify-center items-center mt-8'><a href="https://weather-app-tau-vert.vercel.app/" target="_blank"><button className="bg-[#efe6fd] hover:bg-gray-400 text-gray-600 text-center font-bold py-2 px-4 transition duration-300">Visit</button></a>
              <a href="https://github.com/pedraamchamsaz/weather-app" target="_blank"><button className="bg-[#efe6fd] hover:bg-gray-400 text-gray-600 text-center font-bold py-2 px-4  transition duration-300">GitHub</button></a>
              </div>


          </section>
          </div>
          </>
  );
}

export default MyComponent;
