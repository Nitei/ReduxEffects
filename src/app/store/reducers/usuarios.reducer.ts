import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions/index';

// Aquí definimos como queremos que luzca el state
export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

// Inicializamos los parámetros del state
const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}
