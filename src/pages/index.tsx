import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  function handleTestNavigate(){
    router.push("/test-redux")
  }
  return ( 
    <>
      <button 
        className="text-green-600 bg-gray-700 rounded "
        onClick={handleTestNavigate}
      >
        test
      </button>
      <p className='text-center text-red-600'>
        styles  works so good
      </p>
    </>

  )
}
