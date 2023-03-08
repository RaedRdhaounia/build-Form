// -- import components
import { Introduction, LogoList, Quote } from "@/components/home "

 /*
/  / ----- Component Home is main component of the initial page at the path to introfuce the app to the user
 */

export default function Home() {
  return ( 
    <>
      <Introduction/>
      <Quote/>
      <LogoList/>
    </>

  )
}
