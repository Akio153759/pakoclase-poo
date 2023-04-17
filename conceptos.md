# Herencia

Capacidad de heredar atributos y metodos de otra clase. para especificar que una clase va a heredar de otra, se utiliza la palabra clave `extends`

# Modificadores de acceso

## 4 modificadores de acceso

### private

Los atributos y metodos que se declaren con private no pueden ser accedidos por fuera de la clase


### public

Los atributos y metodos que se declaren con public pueden ser accedidos por fuera de la clase

### protected
-- Los atributos y metodos que se declaren con protected pueden ser accedidos (ademas de la propia clase) unica y exclusivamente por las clases que la herden


### default (es cuando no especificamos el modificador de acceso antes del atributo)

Los atributos y metodos que se declaren sin modificador pueden ser accedidos por fuera de la clase. 

Si bien en javascript o typescript no aplica, los atributos que se declaran sin modificador solo pueden ser accedidos fuera de la clase siempre y cuando el otro archivo que usa esa clase esté en la misma carpeta/paquete


## Getter y Setter

Son metodos que se declaran para obtener o setear el valor de un atributo


