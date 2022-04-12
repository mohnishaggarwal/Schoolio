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
        const task_ref = await collection(db, "Tasks")
        const querySnapshot = await getDocs(task_ref)

        var tasks = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            var zoom_data = {
                name: doc.data().name,
                desc: doc.data().description
            }
            tasks.push(zoom_data)
        })
        console.log(tasks)
        var tasks_str = JSON.stringify(tasks)
        res.end(`Tasks: ${tasks_str}}`)
    }
}