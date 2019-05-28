import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component( {
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: [ './lista.component.scss' ]
} )
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( public usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarioService.getUser()
      .subscribe( ( data: Usuario[] ) => {
        this.usuarios = data;
        console.log( this.usuarios );
      } );
  }

}
