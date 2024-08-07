import { useState } from "react"
import { useAPI, useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const [showPasswordFirst, setShowPasswordFirst] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  const togglePasswordVisibility = () => {
      setShowPasswordFirst(!showPasswordFirst);
  };

  return (   
    <div className="flex items-center justify-center pt-20 ">
      <form className="w-96 sm:bg-offwhite px-8 pt-6 pb-8 sm:border-2 sm:shadow-[5px_5px_rgba(66,_66,_66,_0.4),_10px_10px_rgba(66,_66,_66,_0.3),_15px_15px_rgba(66,_66,_66,_0.2),_20px_20px_rgba(66,_66,_66,_0.1),_25px_25px_rgba(66,_66,_66,_0.05)]" onSubmit={handleSubmit}>
        <h3 className="text-4xl font-bold mb-4 text-gray">Log In</h3>

        <label className="block text-gray text-sm font-bold mb-2">Email address:</label>
        <input
          type="email"
          className="border bg-nicewhite w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="block text-gray text-sm font-bold mt-4 mb-2">Password:</label>
        <div className="relative">
          <input
            type={showPasswordFirst ? 'text' : 'password'}
            className="border bg-nicewhite w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="button"
            className="absolute right-0 top-0 mt-3 mr-4 text-sm text-gray-500 cursor-pointer"
            onClick={() => togglePasswordVisibility('first')}
          >
            {showPasswordFirst ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <button
            className="custom-btn"
            type="submit"
            disabled={isLoading}
          > 
            Log in
          </button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <a href="signup" className="justify-center"> Sign up</a>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
    
  )
}

export default Login