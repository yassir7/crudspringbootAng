Proyecto que implementa un servicio apirest construido con springboot. El cliente es un proyecto en angular que consume el api.

En este repositorio encontrará dos carpetas: 
* api: es el proyecto en java springboot.
* cliente: cliente es el proyecto construido en angular.

### Requerimiento
* Java 11 como minimo.
* Servidor mysql.
* maven.
* Eclipse con el plugin spring, o Spring Tool Suit.


### Configuracion y ejecusión.
Para compilar el proyecto api utilice maven. Puede utilizar el IDE eclipse o Spring Tool Suit para compilar o ejecutar. Este levantará el servicio por el puerto 8080. Este proyecto conectará a una base de datos Mysql.
Para compilar el proyecto cliente utilice node.


Script para crear la Base de dato y las tablas en mysql.

**Nombre de la base de datos:** codesaprueba

```sql
CREATE TABLE rol(id_rol INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(35) NOT NULL,
    PRIMARY KEY (id_rol)
);

CREATE TABLE usuario(
    id_usuario INT NOT NULL AUTO_INCREMENT,
    id_rol INT,
    nombre VARCHAR(50) NOT NULL,
    activo CHAR(1) DEFAULT('A'),
    PRIMARY KEY (id_usuario),
    INDEX roluser (id_rol),
    FOREIGN KEY(id_rol) REFERENCES rol(id_rol)
);

INSERT INTO rol VALUES(null, 'ADMINISTRADOR'),
(null,'AUDITOR'),
(null, 'AUXILIAR');
```
