import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    public US: UsuarioService
  ) { }

  // 9 Creamos el efecto que escuchará los dispatchs
  @Effect()
  cargarUsuarios$ = this.actions$
    .pipe(
      ofType( usuariosActions.CARGAR_USUARIOS ),
      switchMap( () => this.US.getUser() ),
      map( ( users: any[] ) => new usuariosActions.CargarUsuariosSuccess( users ) ),
      catchError( error => of( new usuariosActions.CargarUsuariosFail( error ) ) )
    )
}