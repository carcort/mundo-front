interface DeleteDataParams {
  ruta1: string;
  token: string | null;
  id: string | number;
}

export const deleteData = async ({
  ruta1,
  token,
  id,
}: DeleteDataParams): Promise<Response> => {
  console.log("ruta1", ruta1);
  console.log("token", token);
  console.log("id", id);

  const ruta = `http://localhost:3000/${ruta1}/${id}`;
  return fetch(ruta, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
