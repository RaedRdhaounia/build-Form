// import back ground image
import IInroduction from "@/assets/images/IInroduction ";

 /*
/  / ----- Component Introduction is based created to introduce the project
 */

export default function Introduction() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next Form constractor web site.{' '}
                <a href="https://github.com/RaedRdhaounia/build-Form" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>  
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Form-Build Application
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Form Builder App is a dynamic form builder built with nextJS  , Typescript, and Tailwind CSS. This application allows users to create custom forms and validate form submissions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/component"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="/documentation" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <IInroduction/>
        </div>
      </main>
    </div>
  )
}
