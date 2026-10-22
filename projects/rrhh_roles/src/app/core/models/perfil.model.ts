export interface PerfilResponse {
    username: string;
    nombre: string | null;
    cargo: string | null;
    cedulaEnmascarada: string | null;
    puedeConsultarSuRol: boolean;
    roles: string[];
    permisos: string[];
}