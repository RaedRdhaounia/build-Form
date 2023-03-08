// -- components imports 
import IDocument from '@/assets/images/IDocument '
import { Header, Footer, ImageDescription, JoinUs } from '@/components/view/documentation '

 /*
/  / ----- Component index is main component of the documentation page at the path /documentation to show the list of details of the application
 */

export default function index() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <IDocument/>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <Header/>
        <ImageDescription/>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <JoinUs/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
