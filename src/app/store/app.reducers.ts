import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';


// 7 Como queremos que luzca el store
export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: reducers.UsuarioState;
}

// 8 Combinacion de todos los reducers que usa la interface de AppState
export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer
}