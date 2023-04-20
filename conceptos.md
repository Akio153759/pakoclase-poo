# Herencia

Capacidad de heredar atributos y metodos de otra clase. para especificar que una clase va a heredar de otra, se utiliza la palabra clave `extends`

## Clase Base
clase a partir de la cual se va a heredar

## Clase hija
clase que hereda de una clase base

## Clase abstracta
Clase que NO SE PUEDE INSTANCIAR. Solamente se puede heredar

### Atributos y Metodos abstractos
Se utilizan unicamente en las clases abstractas. Los metodos abstractos son metodos que unicamente se declaran. No se escribe el cuerpo del metodo. Estan hechos para que la clase hija, (es decir la clase que lo vaya a heredar) se encargue de darle el cuerpo a ese metodo (es decir, de implementar el metodo)

Los atributos abstractos son atributos que unicamente se declaran. No se escribe el valor. Estan hechos para que la clase hija, (es decir la clase que lo vaya a heredar) se encargue de darle el valor a ese atributo

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


