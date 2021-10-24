import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/models/usuario';
import { UsuarioService } from 'app/servicio/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[];
  usuarioSelected: Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios(null);
    this.usuarioService.buscarSuscriber$.subscribe((data: string) => {
      this.usuarioSelected = null;
      this.getUsuarios(data);
    });
  }

  getUsuarios(nombre: string): void {
    this.usuarioService
      .buscar(nombre)
      .subscribe((res) => (this.usuarios = res));
  }

  crear(): void {
    this.usuarioSelected = {
      id: -1,
      nombre: '',
      id_rol: -1,
      rol: { id: 0, nombre: '' },
      activo: '',
    };
  }

  seleccionar(usuarioSeleccionado: Usuario): void {
    this.usuarioSelected = usuarioSeleccionado;
  }
}
