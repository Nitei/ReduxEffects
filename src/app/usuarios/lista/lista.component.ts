import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as usuarioActions from '../../store/actions';

@Component( {
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: [ './lista.component.scss' ]
} )
export class ListaComponent implements OnInit {

  usuarios: Usuario[];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.dispatch( new usuarioActions.CargarUsuarios() );
    this.store.select( 'usuarios' )
      .subscribe( ( response: any ) => this.usuarios = response.users );
  }

}
