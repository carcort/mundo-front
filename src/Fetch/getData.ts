interface GetDataParams {
  token: string | null;
  ruta1: string;
}

export const getData = async <T = unknown>({
  token,
  ruta1,
}: GetDataParams): Promise<T> => {
  const ruta = `http://localhost:3000/${ruta1}`;
  const response = await fetch(ruta, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data: unknown = await response.json();

  return data as T;
};
