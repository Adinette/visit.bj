import { request } from "./request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function reset(data) {
  return request("auth/send-reset-code", "POST", data);
}
