export interface Usuario {
  id_usuario: string;
  nombre: string;
  apellido: string;
  cargo: string;
  email: string;
}

export type NuevoUsuario = Usuario;

export interface Producto {
  id_producto: number;
  nombre_producto: string;
  cantidad_producto: number;
  dinero?: number;
}

export type NuevoProducto = Pick<
  Producto,
  "nombre_producto" | "cantidad_producto"
>;

export interface PaisCiudad {
  pais: string;
  ciudad: string;
}
