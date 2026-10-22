import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserProfileLoader, UserSession } from '@lumen/auth';
import { ApiService } from '@lumen/http';
import type { ApiResponse, PerfilResponse } from '@models';
import { toUserSession } from './user-profile.util';

@Injectable({ providedIn: 'root' })
export class UserProfileService implements UserProfileLoader<UserSession> {
  private api = inject(ApiService);

  loadProfile(): Observable<UserSession | null> {
    return this.api.get<ApiResponse<PerfilResponse>>('mi-perfil').pipe(
      map(({ content }) => toUserSession(content)),
      catchError(() => of(null)),
    );
  }
}