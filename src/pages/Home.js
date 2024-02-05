import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="w-20 h-300 bg-red">

    </div>
  )
}

export default Home