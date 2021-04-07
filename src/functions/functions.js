export async function getAllProfiles(auth) {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const response = await fetch(url, { headers: { Authorization: auth } });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getProfileById(id, auth) {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const response = await fetch(url + id, { headers: { Authorization: auth } });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}
