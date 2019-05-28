import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';

// 10 Creamos un array con todos los efectos y lo servimos
export const effectsArr: any[] = [
  UsuariosEffects,
  UsuarioEffects
];

export * from './usuarios.effects';
export * from './usuario.effects';
