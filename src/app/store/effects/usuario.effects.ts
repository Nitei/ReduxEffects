import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuarioAction from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    public US: UsuarioService
  ) { }

  // 9 Creamos el efecto que escuchará los dispatchs
  @Effect()
  cargarUsuario$ = this.actions$
    .pipe(
      ofType( usuarioAction.CARGAR_USUARIO ),
      switchMap( accion => this.US.getUserById( accion[ 'id' ] ) ),
      map( ( user: any ) => new usuarioAction.CargarUsuarioSuccess( user ) ),
      catchError( error => of( new usuarioAction.CargarUsuarioFail( error ) ) )
    )
}