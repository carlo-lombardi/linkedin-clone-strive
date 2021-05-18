export async function getAllProfiles() {
  const url = `${process.env.REACT_APP_API_URL}/profile/`;
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getProfileById(id) {
  const url = `${process.env.REACT_APP_API_URL}/profile/`;
  const response = await fetch(url + id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function getMyProfile() {
  try {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/profile/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      let myProfile = await response.json();

      return myProfile;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  const url = `${process.env.REACT_APP_API_URL}/posts/`;
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export async function deletePost(id) {
  const url = `${process.env.REACT_APP_API_URL}/posts/`;
  const response = await fetch(url + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log(response);
  if (response.ok) {
    return alert("Post deleted successfully");
  }
}

export async function editPost(id, editText) {
  const payload = { text: editText };
  console.log(payload);
  const url = `${process.env.REACT_APP_API_URL}/posts/`;
  const response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.ok) {
    return alert("Post edited successfully");
  }
}

export async function submitProfilePicture(file, userID) {
  const formData = new FormData();
  formData.append("profilePic", file);

  const url = `${process.env.REACT_APP_API_URL}/profile/${userID}/picture`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
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

  const url = `${process.env.REACT_APP_API_URL}/posts/`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (response.ok) {
    return;
  }
}

export async function getUserExperiences(userId) {
  const url = `${process.env.REACT_APP_API_URL}/profile/${userId}/experiences`;
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  }
}

export async function editProfile(
  id,
  name,
  surname,
  email,
  username,
  bio,
  title,
  area
) {
  const payload = {
    name: name,
    surname: surname,
    email: email,
    username: username,
    bio: bio,
    title: title,
    area: area,
  };
  console.log(payload);
  const url = `${process.env.REACT_APP_API_URL}/profile/`;
  const response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    return alert("Profile edited successfully");
  }
}
