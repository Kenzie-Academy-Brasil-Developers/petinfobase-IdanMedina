export async function login(user) {
  
  const data = await fetch(`http://localhost:3333/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) =>  res)
    .catch((error) => console.log(error));

  return data;
}

export async function register(user) {
  const data = await fetch(`http://localhost:3333/users/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function search(token) {
  const data = await fetch(`http://localhost:3333/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function update(user, token) {
  const data = await fetch(`http://localhost:3333/users/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function remove(token) {
  const data = await fetch(`http://localhost:3333/users/profile`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function post(body, token) {
  const data = await fetch(`http://localhost:3333/posts/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function searchPost(token) {
  const data = await fetch(`http://localhost:3333/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function updatePost(id, token, body) {
  const data = await fetch(`http:localhost:3333/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function removePost(id, token) {
  const data = await fetch(`http://localhost:3333/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}
