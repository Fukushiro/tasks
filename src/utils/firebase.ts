// Import the functions you need from the SDKs you need
import firestore, {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  initializeFirestore,
} from 'firebase/firestore';
import 'firebase/storage';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdbxRGqs7xVTeLuKDAIWk55f7sefm_93Y',
  authDomain: 'task-ff990.firebaseapp.com',
  projectId: 'task-ff990',
  storageBucket: 'task-ff990.appspot.com',
  messagingSenderId: '816431145809',
  appId: '1:816431145809:web:838a628ca4df0045ac6970',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export const database = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});

export async function getTasks(databaseParam: Firestore) {
  const querySnapshot = await getDocs(collection(databaseParam, 'Tasks'));
  const list: any[] = [];
  querySnapshot.forEach(docs => {
    console.log(`${docs.id} => ${docs.data()}`);
    list.push({...docs.data(), id: docs.id});
  });
  return list;
}

export async function deleteTask(databaseParam: Firestore, id: string) {
  await deleteDoc(doc(databaseParam, 'Tasks', id));
}
