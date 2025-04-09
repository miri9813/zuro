export interface RespuestaBD {
  Personajes: {
    datos: Personajes[];  
    contenido: Personajes[];
  controles: Personajes[];  
  hostoria: Personajes[];

  };
}
export interface Personajes {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  movimiento: string;
  contenido: string;
  texto: string;

}

export interface RespuestaDetalle {
  datos: Detalle;
  support: InfGeneral;
  }
  export interface InfGeneral{
  url: string;
  text: string;
  }
  export interface Detalle{
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    movimiento: string;
    contenido: string;

  }
