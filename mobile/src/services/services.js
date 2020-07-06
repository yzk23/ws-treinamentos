import { db } from './config';

const API = {
    GET: function Get(id) {

    },
    POST: function Post(obj) {
        var database = db.database()
        database.ref("Treinamento/" + id).push({
            title: "",
            image: "",
            text: ""
        })
    },
    PUT: function Put(obj) {

    },
    DELETE: function Delete(id) {

    }
}

export default API
