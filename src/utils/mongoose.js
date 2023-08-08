import {connect, connection} from "mongoose";

const conn = {
    isConnected: false,
}

export async function connectDB() {
    if (conn.isConnected) {
        return;
    }

    const db = await connect("mongodb+srv://ernestoserna:n5e5t5o5@cluster0.hwagn7l.mongodb.net/portfolio");
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
    console.log("Mongoose connected to db");
});

connection.on("error", (err) => {
    console.log(err);
});