function getSession() {
  const id = JSON.parse(sessionStorage.getItem("cbid"));
  const token = JSON.parse(sessionStorage.getItem("token"));

  return { token, id };
}

export async function getUser() {
  const { token, id } = getSession();
  

  const requestOptions = {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/600/users/${id}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  

  return  data ;
}

export async function getUserOrder() {
  const { token, id } = getSession();

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/660/orders?user.id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}

export async function createOrder(cartList, total, user) {
  const { token, id } = getSession();

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/660/orders`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}
