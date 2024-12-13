// import React from "react";
// import Card from "./Card";
// import Header from "./Header";
// import ButtonGroup from "./ButtonGroup";

// const KettleOn = () => {
//   return (
//     <>
//       <div className="h-full w-screen">
//         <section className="h-full w-full pt-16 bg-gradient-to-br from-[#266260] via-[#266260] to-[#faf2f0]">
//           {/* Header Section */}
//           <Header />

//           {/* Main Content */}
//           <div className="container mx-auto mt-24 text-white">
//             <div className="flex flex-wrap items-center">
//               {/* Left Image Section */}
//               <div className="w-10/12 md:w-6/12 lg:w-6/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
//                 <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gradient-to-b from-[#faf2f0]">
//                   <img
//                     alt="codecollab"
//                     src="/KettleOn.png"
//                     className="w-full align-middle"
//                   />
//                   <blockquote className="relative p-8 mb-4">
//                     <h4 className="text-xl font-bold text-white">
//                       KettleOn - A team building platform for remote working
//                       teams
//                     </h4>
//                     <p className="text-md font-light mt-2 text-white">
//                       Compete against fellow team members on fun quizzes and
//                       games and keep track of the weekly leaderboard. In the
//                       near future, KettleOn will be deployed for use within a
//                       company's internal teams.
//                     </p>
//                     <p className="absolute right-6 bottom-0 font-bold mt-2 text-white">
//                       Duration: 1 month
//                     </p>
//                   </blockquote>
//                 </div>
//               </div>

//               {/* Right Card Sections */}
//               <div className="w-full md:w-6/12 px-4">
//                 <div className="flex flex-wrap">
//                   <div className="w-full md:w-6/12 px-4">
//                     {/* Card Component 1 */}
//                     <Card
//                       icon={
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-6 h-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
//                           />
//                         </svg>
//                       }
//                       title="Frontend"
//                       content="Next.js, Tailwind, Vercel, Shadcn, Aceternitiy"
//                     />
//                   </div>

//                   <div className="w-full md:w-6/12 px-4">
//                     {/* Card Component 2 */}
//                     <Card
//                       icon={
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-6 h-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
//                           />
//                         </svg>
//                       }
//                       title="Features"
//                       content="Whole team registration, Passwordless auth, Interactive games, Leaderboard"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Button Section */}
//           <ButtonGroup
//             visitUrl="https://kettle-on.vercel.app/"
//             githubUrl="https://github.com/phianova/KettleOn"
//           />
//         </section>
//       </div>
//     </>
//   );
// };

// export default KettleOn;
