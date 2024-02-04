import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="home">
         <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
    </div>
  )
}

export default Home