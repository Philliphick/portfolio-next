"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 text-white flex justify-center items-center align-middle'>
        <div className="absolute right-10 top-6 flex flex-row space-x-4 text-2xl">
        <Link href={"/"}><button className="border border-white px-4 py-2 hover:bg-black hover:text-white hover:border-black transition duration-300">Home</button></Link>
        <button className="border border-white px-4 py-2 hover:bg-black hover:text-white hover:border-black transition duration-300">GitHub</button>
        <button className="border border-white px-4 py-2 hover:bg-black hover:text-white hover:border-black transition duration-300">Resume</button>
        </div>
        {/* svg tech icon */}
       
{/* <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 75"><path fill="#000000" d="M254.114 9.182v60.165l-6.557 5.282v-50.05h-12.343l18.9-15.397ZM481.537 0c5.492 0 10.59.828 15.297 2.484c4.528 1.564 8.433 3.323 11.717 5.275l.573.347l-6.799 12.943c-.62-.507-1.496-1.088-2.627-1.741l-.643-.364l-.693-.378l-.743-.393c-2.092-1.133-4.576-2.092-7.453-2.876a30.487 30.487 0 0 0-8.89-1.308c-8.193 0-12.29 2.31-12.29 6.93c0 2.701 1.482 4.619 4.445 5.752l.676.245l.717.249l.76.253l.804.256l.846.261l.888.265c.152.045.305.09.46.134l.953.27l.995.276l1.038.278l1.08.283l1.124.287l1.765.438l1.23.297c5.142 1.307 9.588 2.789 13.336 4.445c3.675 1.587 6.51 3.694 8.504 6.322l.255.346c2.092 2.702 3.138 6.275 3.138 10.72c0 5.404-1.395 9.762-4.184 13.075c-2.702 3.224-6.275 5.578-10.72 7.06c-4.446 1.394-9.24 2.091-14.382 2.091c-5.927 0-11.81-.828-17.65-2.484c-5.562-1.577-10.53-3.707-14.906-6.391l-.652-.407l7.06-13.728c1.133 1.133 3.007 2.397 5.622 3.791c2.702 1.395 5.84 2.572 9.413 3.53c3.574.96 7.365 1.439 11.375 1.439c8.018 0 12.028-2.136 12.028-6.407c0-2.876-1.874-4.924-5.622-6.144l-.901-.317l-.947-.321l-.991-.326l-1.037-.332l-1.082-.336l-1.127-.342l-.58-.172l-1.195-.349l-1.24-.354l-1.286-.359l-1.33-.364l-2.08-.555l-.716-.188c-7.496-1.917-13.074-4.358-16.735-7.321c-3.574-3.051-5.36-7.41-5.36-13.075c0-5.055 1.263-9.282 3.79-12.681c2.616-3.4 6.102-5.971 10.46-7.714C471.47.872 476.308 0 481.537 0ZM360.292.13c5.531 0 10.581 1.008 15.146 3.023l.545.246c4.707 2.092 8.716 4.925 12.028 8.498c3.4 3.487 6.012 7.453 7.842 11.898c1.83 4.445 2.748 8.977 2.748 13.597c0 4.794-.958 9.413-2.876 13.859c-1.917 4.358-4.622 8.28-8.109 11.766c-3.399 3.4-7.449 6.101-12.156 8.106c-4.706 2.005-9.849 3.007-15.427 3.007c-5.753 0-10.982-1.002-15.689-3.007c-4.707-2.092-8.762-4.88-12.162-8.367c-3.399-3.574-6.014-7.583-7.844-12.028c-1.828-4.446-2.746-9.022-2.746-13.728c0-4.794.96-9.414 2.877-13.859a36.412 36.412 0 0 1 7.638-11.3l.47-.467c3.487-3.486 7.58-6.232 12.287-8.236c4.707-2.005 9.85-3.007 15.428-3.007ZM44.844.524l31.77 73.084H59.88L52.558 56.48H24.187l-7.321 17.127H0L31.9.523h12.944Zm93.58 0L158.56 26.41L178.693.523h17.127l-28.894 37l27.979 36.084h-17.127l-19.22-24.84l-19.087 24.84h-17.389l28.11-36.084l-29.025-37h17.258ZM266.106.188v48.905h12.689L259.56 64.877V4.744l6.544-4.556Zm93.928 14.063c-4.794 0-8.893 1.133-12.292 3.399c-3.313 2.266-5.84 5.142-7.583 8.629c-1.744 3.486-2.615 7.104-2.615 10.852c0 3.922.918 7.67 2.748 11.243c1.828 3.487 4.399 6.32 7.711 8.498c3.4 2.18 7.452 3.269 12.159 3.269c4.794 0 8.847-1.133 12.159-3.4c3.315-2.353 5.84-5.273 7.583-8.76c1.743-3.573 2.617-7.233 2.617-10.981c0-3.922-.915-7.627-2.745-11.113c-1.83-3.487-4.445-6.276-7.847-8.368c-3.313-2.179-7.276-3.268-11.895-3.268ZM38.438 19.74L27.717 42.753h21.05l-10.33-23.01Z"/></svg>         */}
        <div className="object-cover w-2/3 pb-10 border-2 border-white flex flex-col hover:bg-black hover:scale-125 transition duration-500">

            <h1 className="text-6xl font-bold text-white p-12 z-10">Hi, I'm Phillip</h1>
            <p className='mt-16 mx-24 text-center text-2xl leading-8 text-justify'>I'm a <span className='font-bold'>passionate software developer</span> who loves learning new things. I'm about to finish an intensive 4 month Software Development Bootcamp
            with <a>The Developer Academy</a>. I've always loved anything creative, and bringing ideas to life through the medium of code has become a passion of mine. <br></br><br></br>
            <span className="font-bold">Tech Stack:<br></br> Javascript, React, Next.js, Node.js, Express.js, and Tailwind CSS.</span><br></br>
            
            <br></br> Going forward I am open to a new opportunity in a junior / entry-level role working for a great company with like minded people. </p>
        </div>
        
    </div>
  )
}

export default page