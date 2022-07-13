import {
    initializeApp
} from "firebase/app";
import {
    getDatabase,
    ref,
    child,
    get
} from "firebase/database";
import firebaseConfig from './config/config.firease';
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);

export async function getProducts() {
    return await get(child(dbRef, `products`)).then((snapshot) => {
        let result = [];
        if (snapshot.exists()) {
            result = snapshot.val();
        } else {
            console.log("No data available");
        }
        return result;
    }).catch((error) => {
        console.error(error);
    });
}
export async function getBlogs() {
    return await get(child(dbRef, `blogs`)).then((snapshot) => {
        let result = [];
        if (snapshot.exists()) {
            result = snapshot.val();
        } else {
            console.log("No data available");
        }
        return result;
    }).catch((error) => {
        console.error(error);
    });
}