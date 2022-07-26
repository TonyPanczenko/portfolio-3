import { collection, addDoc, getFirestore } from 'firebase/firestore/lite'; 

import app from './app';

const db = getFirestore(app);

const dbClient = {
  addMessage: async (fields) => await addDoc(collection(db, 'messages'), Object.assign({}, fields))
};

export default dbClient;