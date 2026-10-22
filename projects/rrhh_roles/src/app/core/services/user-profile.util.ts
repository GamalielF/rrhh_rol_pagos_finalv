import { UserSession } from '@lumen/auth';
import type { PerfilResponse } from '@models';

export function toUserSession(perfil: PerfilResponse): UserSession {
    return {
        id: perfil.username,
        username: perfil.username,
        name: perfil.nombre ?? perfil.username,
        roles: perfil.roles,
        cargo: perfil.cargo,
        permisos: perfil.permisos,
        puedeConsultarSuRol: perfil.puedeConsultarSuRol,
        cedulaEnmascarada: perfil.cedulaEnmascarada,
    };
}