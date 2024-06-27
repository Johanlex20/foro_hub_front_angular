export interface TemaPage {
    content:          Tema[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Tema {
    id:            number;
    titulo:        string;
    mensaje:       string;
    genero:        Genero;
    usuarioId:     number;
    usuarioNombre: string;
    createdAt:     Date;
    updatedAt:     Date | null;
    activo:        boolean;
    respuestas:    Respuesta[];
}

export enum Genero {
    Cocina = "COCINA",
    Deporte = "DEPORTE",
    Tecnologia = "TECNOLOGIA",
}

export interface Respuesta {
    id:               number;
    mensajeRespuesta: string;
    usuarioId:        number;
    usuarioNombre:    string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
