// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, getDoc, updateDoc, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtU2kZg0SG2M27nctV-TiOOP3EoYhhHQU",
    authDomain: "schoolio-9afd5.firebaseapp.com",
    projectId: "schoolio-9afd5",
    storageBucket: "schoolio-9afd5.appspot.com",
    messagingSenderId: "271954664092",
    appId: "1:271954664092:web:b40d7d96cef373eb5c2b59",
    measurementId: "G-BCSEJ4MWGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        var name = req.body.name
        var desc = req.body.desc
        console.log(`Name: ${name}, Desc: ${desc}`)
        const docRef = await addDoc(collection(db, "Tasks"), {
            name: name,
            description: desc
        });

        res.end(`${docRef.id}`)
    }
}

// curl -X POST http://localhost:3000/api/other/add_task  -H "Content-Type: application/json"  -d '{"name": "grade", "desc": "finish grading test"}'