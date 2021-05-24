const firebaseConfig = {
  apiKey: "AIzaSyBcfvd2pcMqOyRcdN-43oMcfr_FiC-3kDs",
  authDomain: "safanasirli-disney-clone.firebaseapp.com",
  projectId: "safanasirli-disney-clone",
  storageBucket: "safanasirli-disney-clone.appspot.com",
  messagingSenderId: "699098504596",
  appId: "1:699098504596:web:789636bdbd3dadc21b8381",
  measurementId: "G-KFH0RJ78CT",
};

const firebaseApp = firebase.initizalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.Google.AuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
