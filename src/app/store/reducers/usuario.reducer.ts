import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuario from '../actions/index';

// 4.1 Aquí definimos como queremos que luzca el state
export interface UsuarioState {
  users: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

// 5.1 Inicializamos los parámetros del state
const estadoInicial: UsuarioState = {
  users: null,
  loaded: false,
  loading: false,
  error: null
};

// 6.1 Creamos el reducer
export function usuarioReducer( state = estadoInicial, action: fromUsuario.usuarioAccion ) {
  switch ( action.type ) {
    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        loading: true
      }

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: { ...action.usuario }
      }

    case fromUsuario.CARGAR_USUARIO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      }

    default:
      return state;
  }
}