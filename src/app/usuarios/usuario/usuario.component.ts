import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { CargarUsuario } from '../../store/actions/usuario.actions';

@Component( {
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [ './usuario.component.scss' ]
} )
export class UsuarioComponent implements OnInit {

  user;

  constructor( private route: ActivatedRoute, private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select( 'usuario' )
      .subscribe( usuario => this.user = usuario[ 'user' ] )
    this.route.params
      .subscribe( params => {
        this.store.dispatch( new CargarUsuario( params[ 'id' ] ) );
      } )
  }

}
