import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, getDoc, updateDoc, getDocs, query, where } from "firebase/firestore";

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
    if (req.method === 'GET') {
        var class_id = req.query.class_id
        const class_ref = await doc(db, "Rosters", class_id)
        console.log(`Class ID: ${class_ref.id}`)
        const student_ref = await collection(class_ref, "Students")
        console.log(`Collection ID: ${student_ref.id}`)
        const querySnapshot = await getDocs(student_ref)
        console.log(`q snapshot: ${querySnapshot.id}`)

        var roster = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            var student = {
                "Name": doc.data().Name,
                "Note": doc.data().Note,
                "clear": doc.data().clear,
                "exposed": doc.data().exposed,
                "covid": doc.data().covid
            }
            roster.push(student)
        })
        console.log(roster)
        var roster_str = JSON.stringify(roster)
        res.end(`Class: ${class_ref.id}, Students: ${roster_str}}`)
    }
}