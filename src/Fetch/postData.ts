interface PostDataParams<T> {
  ruta1: string;
  data: T;
  token: string | null;
}

export const postData = async <T>({
  ruta1,
  data,
  token,
}: PostDataParams<T>): Promise<Response> => {
  console.log(data);

  const ruta = `http://98.84.147.121:3000/${ruta1}`;
  return fetch(ruta, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
