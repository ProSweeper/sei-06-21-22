// API modules are where the code lives to communicate
// with the server via AJAX

const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make
  // requests other than GET and/or send data and/or set headers
  const res = await fetch(BASE_URL, {
    method: 'POST',
    // MIME type of application/json
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  // Check if request succeeded
  if (res.ok) {
    // Promise will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}