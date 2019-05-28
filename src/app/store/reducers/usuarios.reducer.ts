import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions/index';

// 3 Aquí definimos como queremos que luzca el state
export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

// 4 Inicializamos los parámetros del state
const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

// 5 Creamos el reducer
export function usuariosReducer( state = estadoInicial, action: fromUsuarios.usuarioAcciones ) {
  switch ( action.type ) {
    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true
      }

    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [ ...action.usuarios ]
      }

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        users: action.payload
      }

    default:
      return state;
  }
}