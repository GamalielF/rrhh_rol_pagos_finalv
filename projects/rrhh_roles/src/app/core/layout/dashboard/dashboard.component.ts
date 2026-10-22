import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LumenDashboardComponent } from '@lumen/base';
import { DropdownItem } from '@lumen/ui';
import { AuthService } from '@lumen/auth';
import { buildNavItems } from './dashboard-nav.util';

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [CommonModule, LumenDashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardShellComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  readonly navItems = toSignal(
    this.authService.user$.pipe(map((user) => buildNavItems(user?.roles ?? []))),
    { initialValue: buildNavItems([]) },
  );

  readonly userMenuItems: DropdownItem[] = [
    { id: 'profile', label: 'Mi Perfil', icon: '@tui.user', onClick: () => this.router.navigate(['/home']) },
    { divider: true },
    {
      id: 'logout',
      label: 'Cerrar sesión',
      icon: '@tui.log-out',
      variant: 'danger',
      onClick: () => {
        this.authService.logout();
        this.router.navigate(['/login']);
      },
    },
  ];
}