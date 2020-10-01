import db from "./firebase/config";
import { firestore } from 'firebase';
import { retornaDocumentos } from './helpers/mostrar-documentos';




const usuariosRef = db.collection('usuarios')

usuariosRef.orderBy('salario','desc')
    .get().then( retornaDocumentos );

