export interface RespuestaPage {
    content:          Respuesta[];
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

export interface Respuesta {
    id:               number;
    mensajeRespuesta: string;
    temaId:           number;
    usuarioId:        number;
    activo:           boolean;
    createdAt:        Date;
    updatedAt:        Date | null;
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
