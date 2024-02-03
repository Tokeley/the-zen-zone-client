import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="home">
        <h1>HOMEPAGE</h1>
    </div>
  )
}

export default Home