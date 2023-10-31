const baseUrl = "http://arenecelsia.hecamacb.com/celsia/visitbj/public/api/";


export async function request(url, method, data) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const reference = localStorage.getItem("reference");
  if (reference) {
    requestOptions.headers.Authorization = reference;
  }

  const response = await fetch(`${baseUrl}${url}`, requestOptions);
  if (!response.ok) {
    console.log(response);
    throw new Error("Erreur lors de la requête");
  }

  return response.json();
}
