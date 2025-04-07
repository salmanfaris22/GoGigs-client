import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottontext = () => {
    return (
        <><div class="flex flex-wrap gap-1 sm:gap-3">
            <span class="text-sm text-gray-600 dark:text-neutral-400">Hire a Freelancer</span>
            <span class="text-sm font-bold text-gray-900 dark:text-white">npm</span>
        </div>
            <svg class="hidden sm:block size-5 text-gray-300 dark:text-neutral-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
            </svg>
           <Link to={"freelancer"}  className=' cursor-pointer'>
           <a class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../docs/index.html">
            Become a Freelancer
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </a>
           </Link></>
    )
}

export default HeroBottontext