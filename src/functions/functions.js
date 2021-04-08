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

export async function getAllPosts(auth) {
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url, { headers: { Authorization: auth } });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function deletePost(id, auth) {
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url + id, { method: "DELETE", headers: { Authorization: auth } });
  console.log(response);
  if (response.ok) {
    return alert("Post deleted successfully");
  }
}

export async function editPost(id, auth, editText) {
  const payload = { text: editText };
  console.log(payload);
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { Authorization: auth, "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    return alert("Post edited successfully");
  }
}
