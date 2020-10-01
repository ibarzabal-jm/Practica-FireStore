#Referencias 
const usuariosRef = db.collection('usuarios');

db.collection('usuarios')
    .add( usuario )
    .then( docRef => {
        console.log(docRef)
    } )
    .catch( e => console.log('error', e))

usuariosRef
    .doc('yHzkoSbte3v1u2EoZwCh')
    .update({
        activo: false
    });

este elimina informacion anterior y agrega lo nuevo

usuariosRef
    .doc('yHzkoSbte3v1u2EoZwCh')
    .set({
        edad:50,
    })


usuariosRef
    .doc('yHzkoSbte3v1u2EoZwCh')
    .delete()


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



usuariosRef
    .onSnapshot( retornaDocumentos  )

usuariosRef
    .get().then(retornaDocumentos)

usuariosRef.where('activo','==',false).get().then( retornaDocumentos );
usuariosRef.where('salario','>=',1000).get().then( retornaDocumentos );

usuariosRef.where('salario','>=',1000)
            .where('salario','<',1200)
            .get().then( retornaDocumentos );

usuariosRef.where('salario','>=',1000)
            .where('activo','==',true)
            .get().then( retornaDocumentos );