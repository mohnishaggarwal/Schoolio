import * as globals from "../globals.js"
import { collection, addDoc, setDoc } from "firebase/firestore";

export default function handler(req, res) {
    const { pid } = req.query
    db.
    res.end(`New Class Created: ${pid}`)
}