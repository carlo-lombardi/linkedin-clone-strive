export async function getAllProfiles() {
  const url = "http://localhost:3001/profile/";
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getProfileById(id) {
  const url = "http://localhost:3001/profile/";
  const response = await fetch(url + id);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getAllPosts() {
  const url = "http://localhost:3001/posts/";
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function deletePost(id) {
  const url = "http://localhost:3001/posts/";
  const response = await fetch(url + id, { method: "DELETE" });
  console.log(response);
  if (response.ok) {
    return alert("Post deleted successfully");
  }
}

export async function editPost(id, editText) {
  const payload = { text: editText };
  console.log(payload);
  const url = "http://localhost:3001/posts/";
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

export async function submitProfilePicture(file, userID) {
  const formData = new FormData();
  formData.append("profilePic", file);

  const url = `http://localhost:3001/profile/${userID}/picture`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return alert("Picture successfully changed");
  }
}

export async function submitPostPicture(postText, file, username, userId) {
  const formData = new FormData();
  formData.append("text", postText);
  formData.append("username", username);
  formData.append("PostImg", file);
  formData.append("user", userId);

  const url = `http://localhost:3001/posts/`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return;
  }
}
