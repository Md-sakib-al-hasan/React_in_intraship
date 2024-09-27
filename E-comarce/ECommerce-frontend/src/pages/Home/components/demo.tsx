import React, { useState, FormEvent } from 'react';

// Define types for form inputs and error state
type LoginProps = {};

const  Loginssss : React.FC<LoginProps> = () => {
  // State variables to store email and password with type annotations
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // State variable to handle error messages
  const [error, setError] = useState<string>('');

  // Function to handle form submission with proper type annotation for event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form validation
    if (!email || !password) {
      setError('Please fill out all fields');
      return;
    }

    // Simulate a login process (replace with actual API call)
    console.log('Logging in with', { email, password });

    // Clear error and reset fields (for demonstration purposes)
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default  Loginssss ;
