import { useState } from "react"
import { useAPI } from '../hooks/useAPI';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useAPI()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="flex items-center justify-center pt-20 ">
      <form className="w-96 bg-cream px-8 pt-6 pb-8 border-2 shadow-[5px_5px_rgba(66,_66,_66,_0.4),_10px_10px_rgba(66,_66,_66,_0.3),_15px_15px_rgba(66,_66,_66,_0.2),_20px_20px_rgba(66,_66,_66,_0.1),_25px_25px_rgba(66,_66,_66,_0.05)]" onSubmit={handleSubmit}>
        <h3 className="text-4xl font-bold mb-4 text-gray">Sign Up</h3>

        <label className="block text-gray text-sm font-bold mb-2">Email address:</label>
        <input
          type="email"
          className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="block text-gray text-sm font-bold mt-4 mb-2">Password:</label>
        <input
          type="password"
          className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex items-center justify-center pt-5">
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
          > 
            Sign up
          </button>
        </div>
        
        
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  )
}

export default Signup