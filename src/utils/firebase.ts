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
import Config from 'react-native-config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(Config);

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDING_ID,
  appId: Config.APP_ID,
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
