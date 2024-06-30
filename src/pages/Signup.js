import { useState } from "react";
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [passwordFirst, setPasswordFirst] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [noMatch, setNoMatch] = useState(false);
  const [showPasswordFirst, setShowPasswordFirst] = useState(false); // State to toggle password visibility
  const [showPasswordSecond, setShowPasswordSecond] = useState(false); // State to toggle password visibility
  const {signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordSecond !== passwordFirst) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
      await signup(email, passwordFirst);
    } 
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'first') {
      setShowPasswordFirst(!showPasswordFirst);
    } else if (field === 'second') {
      setShowPasswordSecond(!showPasswordSecond);
    }
  };

  return (
    <div className="flex items-center justify-center pt-20 ">
      <form className="w-96 sm:bg-offwhite px-8 pt-6 pb-8 sm:border-2 sm:shadow-[5px_5px_rgba(66,_66,_66,_0.4),_10px_10px_rgba(66,_66,_66,_0.3),_15px_15px_rgba(66,_66,_66,_0.2),_20px_20px_rgba(66,_66,_66,_0.1),_25px_25px_rgba(66,_66,_66,_0.05)]" onSubmit={handleSubmit}>
        <h3 className="text-4xl font-bold mb-4 text-gray text-center">Sign Up</h3>

        <label className="block text-gray text-sm font-bold mb-2">Email address:</label>
        <input
          type="email"
          className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="block text-gray text-sm font-bold mt-4 mb-2">Password:</label>
        <div className="relative">
          <input
            type={showPasswordFirst ? 'text' : 'password'}
            className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPasswordFirst(e.target.value)}
            value={passwordFirst}
          />
          <button
            type="button"
            className="absolute right-0 top-0 mt-3 mr-4 text-sm text-gray-500 cursor-pointer"
            onClick={() => togglePasswordVisibility('first')}
          >
            {showPasswordFirst ? 'Hide' : 'Show'}
          </button>
        </div>

        <label className="block text-gray text-sm font-bold mt-4 mb-2">Re-Enter Password:</label>
        <div className="relative">
          <input
            type={showPasswordSecond ? 'text' : 'password'}
            className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPasswordSecond(e.target.value)}
            value={passwordSecond}
          />
          <button
            type="button"
            className="absolute right-0 top-0 mt-3 mr-4 text-sm text-gray-500 cursor-pointer"
            onClick={() => togglePasswordVisibility('second')}
          >
            {showPasswordSecond ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="flex items-center justify-center pt-5">
          <button
            className="custom-btn"
            type="submit"
            disabled={isLoading}
          > 
            Sign up
          </button>
        </div>
        <a href="login">Log in</a>
        {noMatch && <div className="text-red-500 mt-2 text-center">Passwords do not match</div>}
        {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
