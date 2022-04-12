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
        const zoom_ref = await collection(db, "Zoom")
        const querySnapshot = await getDocs(zoom_ref)

        var links = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            var zoom_data = {
                name: doc.data().name,
                link: doc.data().link
            }
            links.push(zoom_data)
        })
        console.log(links)
        var links_str = JSON.stringify(links)
        res.end(`Links: ${links_str}}`)
    }
}