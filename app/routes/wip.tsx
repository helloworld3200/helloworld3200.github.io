// Temporary WIP page that says how the site is under construction before I finish the whole thing.
// #realartistsship
// Very bare-bones: just Name, "Sorry, my portfolio is under construction! Check back later."
// and a link to the source code for this repo. easy peasy!

// to be honest the main reason i made this is to test whether a deployment even works
// before i finish the whole site (and also because its been AGES and i need SOMETHING up :D)

import { Name } from "~/components/hero";

export default function WIP() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 ">
        <div className="py-5">
            <Name />
        </div>
        <h1 className="text-4xl font-bold">Sorry, my portfolio is under construction!</h1>
        <p className="text-lg">Check back later.</p>
        <a href="https://github.com/helloworld3200/helloworld3200.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Source Code
        </a>
    </div>
  )
}
