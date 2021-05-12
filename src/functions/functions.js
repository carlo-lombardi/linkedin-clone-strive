export async function getAllProfiles() {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getProfileById(id) {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const response = await fetch(url + id);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}
// /* --------------------------- experience API -------------------------------------- */
// export async function getExperience(id, auth) {
//   const url = "https://striveschool-api.herokuapp.com/api/profile/";
//   const response = await fetch(url + id, { headers: { Authorization: auth } });
//   const data = await response.json();
//   if (response.ok) {
//     return data;
//   }
// }

export async function getAllPosts() {
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function deletePost(id, auth) {
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url + id, {
    method: "DELETE",
    headers: { Authorization: auth },
  });
  console.log(response);
  if (response.ok) {
    return alert("Post deleted successfully");
  }
}

export async function editPost(id, editText) {
  const payload = { text: editText };
  console.log(payload);
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    return alert("Post edited successfully");
  }
}

export async function submitPost(postText) {
  const payload = { text: postText };
  console.log(payload);
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (response.ok) {
    alert("Post successfully submitted");
    return data._id;
  }
}

export async function submitProfilePicture(userID, file) {
  const formData = new FormData();
  formData.append("profile", file);
  const url = `https://striveschool-api.herokuapp.com/api/profile/${userID}/picture`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return alert("Picture successfully changed");
  }
}

export async function submitPostPicture(postID, file) {
  const formData = new FormData();
  formData.append("post", file);
  const url = `https://striveschool-api.herokuapp.com/api/posts/${postID}`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return;
  }
}
