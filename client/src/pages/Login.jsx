const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5001/user/login', {  // 👈 updated
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    if (data.message === 'Invalid credentials') {
      throw new Error('Invalid email or password');
    }

    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
export default login;