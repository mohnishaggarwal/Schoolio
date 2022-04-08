import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, getDoc, updateDoc, getDocs, addDoc } from "firebase/firestore";

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


export default function handler(req, res) {
    if (req.method === 'POST') {
        var class_name = req.query.class_name
        var list = req.body.list // comma separated list of students
        const class_ref = await addDoc(collection(db, "Rosters"), {
            "name": class_name,
        })

        created_students = []
        for (let i = 0; i < list.length; i++) {
            const student_ref = await addDoc(collection(class_ref, "Student"), {
                "name": list[i],
                "Note": null,
                "clear": true,
                "covid": false,
                "exposed": false
            })
            created_students.push(student_ref.id)
        }


        res.end(`Class: ${class_ref.id}, Students: ${created_students}`)
    }
}