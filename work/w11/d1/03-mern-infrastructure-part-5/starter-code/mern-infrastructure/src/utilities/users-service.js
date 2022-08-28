import * as usersAPI  from './users-api';

export async function signUp(userData) {
  // Delete the network request code to the 
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  return token;
}