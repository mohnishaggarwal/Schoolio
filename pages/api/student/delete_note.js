// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, getDoc, updateDoc } from "firebase/firestore";

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
    const student_id = req.query.student
    const class_id = req.query.class
    console.log(student_id)
    console.log(class_id)
    if (req.method === 'POST') {
        var classRef = doc(collection(db, "Rosters"), class_id)
        var studentRef = doc(collection(classRef, "Students"), student_id)
        updateDoc(studentRef, {
            "Note": null
        })

        res.end(`Deleted note: ${student_id}, class id: ${class_id}`)
    }
}