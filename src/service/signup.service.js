import { request } from "./request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function signup(data) {
  return request("auth/register-user", "POST", data);
}
