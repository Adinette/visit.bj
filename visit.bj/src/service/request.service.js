const baseUrl = " arenecelsia.hecamacb.com/celsia/visitbj/public/api/";

export async function request(url, method, data) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const token = localStorage.getItem("token");
  if (token) {
    requestOptions.headers.Authorization = token;
  }

  const response = await fetch(`${baseUrl}${url}`, requestOptions);
  if (!response.ok) {
    console.log(response);
    throw new Error("Erreur lors de la requête");
  }

  return response.json();
}
// arenecelsia.hecamacb.com/celsia/visitbj/public/api/auth/register-user
// Exemple de parametre pour le register{
//     "last_name" :"celsia",
//     "first_name" :"MOUFTAOU",
//      "password" :"12334556",
//      "email":"mouftaouhanbbn@gmail.com",
//      "phone":"+22997986041"

// }
// arenecelsia.hecamacb.com/celsia/visitbj/public/api/auth/login-user (pour le login)
// Exemple de paramètre pour le login:{"email":"mouftaouhanbbn@gmail.com","password" :"12334556"}