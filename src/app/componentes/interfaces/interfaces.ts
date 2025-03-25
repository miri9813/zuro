export interface RespuestaBD {
    Personajes: {
      datos: Personajes[];  
    
    controles: Personajes[];  
    };
  }
  
  export interface Personajes {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    movimiento: string;
  }
  
  
  