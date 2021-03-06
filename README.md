# Practica FireStore
 Basicamente son pruebas y como utilizar Firebase. 


### Anotaciones

Los querys son mejor en cloud firestore.  

* Cuando lo creo es lo mismo que crear en mysql create database sql-demos.
* Las tablas se llaman colecciones.
* Trabaja en base a documentos, mas bien Json.



### Habilitar que todo el mundo pueda escribir y editar. 
1. Vas a reglas y cambiar el if por true.

# Comenzando || Codigo básico
1. Ajustes, configuracion de proyecto, web.
2. Me da la configuracion necesaria para la aplicacion.
3. Usar npm install firebase

```
import firebase from  'firebase/app'
import 'firebase/firestore'

copiar aca la configuracion

export default firebase.firestore();
```



## Insertar data

En firestore no hay sintaxis en cuanto a la creacion de tablas.
En sql es un insert, acá lo unico que hay que hacer es la referencia a la base de datos.

```
db.collection('usuarios')
    .add( usuario )
```

Y paso el objeto usuario, simple iteral sin funciones. Regresa una promesa: 

```
.then ( data => { clg (data ) })
```
## Actualizar data

puedo hacer referencia a la tabla usuarios:

```
const usarios ref = db.collection('usuarios')

usuarioRef
    .doc('idusuario')
    .update({
        activo: true,
    })
```


El .set borra todo y agrega lo que mandas.

```
usuarioRef
    .doc('idusuario')
    .set({
        edad: 50,
        nombre: roberto
       })
```


## Borrar data


```
usuarioRef
    .doc('idusuario')
    .delete()
```

No devuelve una respuesta si fue exitoso


## Select


Siempre que haya un cambio en la base de datos:

```
usuariosRef
    .onSnapshot( snap => {
        
        snap.forEach( snaphijo =>{
            console.log(snaphijo.data(), snaphijo.id )
        })   
    })

usuariosRef
    .onSnapshot( snap => {

        const usuarios: any[] = [];

        snap.forEach( snapHijo => {
            usuarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
             })
        })   
        
        console.log(usuarios);
    })
```


- Creacion de una funcion que me devuelve los documentos
```
import firebase from 'firebase';

export const retornaDocumentos = ( snapshot: firebase.firestore.QuerySnapshot ) => {

    const documentos: any[] = [];

    snapshot.forEach( snapHijo => {
        documentos.push({
            id: snapHijo.id,
            ...snapHijo.data()
         })
    })   

    console.log(documentos);

    return documentos;

}
```



Si quiero no estar dependiente del obs

```
usuarioRef
    .get().then( snap => retornaDocumentos(snap) )
```

## Select con condiciones o where

```
usuariosRef.where('activo','==',false).get().then( retornaDocumentos );
usuariosRef.where('salario','>=',1000).get().then( retornaDocumentos );
```
No funciona con dos indices. Hay que crearlo
```
usuariosRef.where('salario','>=',1000)
            .where('salario','<',1200)
            .get().then( retornaDocumentos );
```



Forma lenta: ir a firebase, => indices, crear un indice, nombre de coleccion y los campos.
Forma rapida: fijarte el error por consola ir al link y crearlo.

```
usuariosRef.where('salario','>=',1000)
            .where('activo','==',true)
            .get().then( retornaDocumentos );
```


## OrderBy 

No muestra los registros que no existe, si no tiene salario y ordeno por dicho campo no muestra ese usuario.

```
usuariosRef
    .orderBy('nombre')
    .orderBy('salario','desc')
    .get().then( retornaDocumentos );
```

Necesito que cree el indice justamente.


## Limites
```
usuariosRef
    .limit(5).get().then( retornaDocumentos );
```
