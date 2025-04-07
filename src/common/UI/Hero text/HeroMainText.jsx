import React from 'react'

const HeroMainText = () => {
  return (
    <>
       <div class="flex justify-center">
          <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
          Freedom to Freelance
            <span class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
            🔥
            </span>
          </a>
        </div>
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
          Get Work Done or <br/>
            <span class="bg-clip-text bg-linear-to-tl from-blue-600 to-violet-600 text-transparent"> Start Earning Today </span>
          </h1>
        </div>
        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-neutral-400">Discover reliable freelance talent to bring your projects to life. Whether you're hiring or offering services, our platform ensures quality, trust, and results every step of the way.</p>
        </div>
    </>
  )
}

export default HeroMainText
