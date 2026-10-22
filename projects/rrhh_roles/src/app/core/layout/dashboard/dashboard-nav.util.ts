import { NavItem } from '@lumen/ui';

const INICIO: NavItem = { label: 'Inicio', icon: '@tui.house', route: '/home' };
const MI_ROL: NavItem = { label: 'Mi rol de pago', icon: '@tui.file-text', route: '/mi-rol' };
const RRHH: NavItem[] = [{ label: 'Períodos', icon: '@tui.calendar', route: '/rrhh/periodos' }];
const ADMIN: NavItem[] = [
    { label: 'Usuarios y roles', icon: '@tui.users', route: '/admin/usuarios' },
    { label: 'Auditoría', icon: '@tui.shield', route: '/admin/auditoria' },
];

export function buildNavItems(roles: string[]): NavItem[] {
    const esAdmin = roles.includes('ADMIN');
    const esRrhh = roles.includes('RRHH');
    return [INICIO, MI_ROL, ...(esRrhh || esAdmin ? RRHH : []), ...(esAdmin ? ADMIN : [])];
}