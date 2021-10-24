import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'app/models/rol';
import { Usuario } from 'app/models/usuario';
import { RolserviceService } from 'app/servicio/rolservice.service';
import { UsuarioService } from 'app/servicio/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() usuarioSelected: Usuario;

  roles: Rol[];
  constructor(
    private usuarioService: UsuarioService,
    private rolService: RolserviceService
  ) {}

  ngOnInit(): void {
    this.rolService.consultarRoles().subscribe((roles) => {
      this.roles = roles;
      console.log(this.roles);
    });
  }

  guardar(): void {
    this.usuarioSelected.id_rol = this.usuarioSelected.rol.id;
    this.usuarioService.agregar(this.usuarioSelected).subscribe((res) => {
      this.cerrarFormulario();
    });
  }

  editar(): void {
    this.usuarioSelected.id_rol = this.usuarioSelected.rol.id;
    this.usuarioService.actualizar(this.usuarioSelected).subscribe((res) => {
      this.cerrarFormulario();
    });
  }

  eliminar(): void {
    this.usuarioService.eliminar(this.usuarioSelected).subscribe((res) => {
      this.cerrarFormulario();
    });
  }

  private cerrarFormulario(): void {
    this.usuarioService.enviarBusqueda(null);
    this.usuarioSelected = null;
  }
}
