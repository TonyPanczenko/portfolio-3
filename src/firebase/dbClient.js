import { collection, addDoc, getFirestore, serverTimestamp } from 'firebase/firestore/lite'; 

import app from './app';

const db = getFirestore(app);

const dbClient = {
  addMessage: async (fields) => await addDoc(
    collection(db, 'messages'), 
    Object.assign({ dateAdded: serverTimestamp() }, fields)
  )
};

export default dbClient;