import {connect, connection} from "mongoose";

const conn = {
    isConnected: false,
}

export async function connectDB() {
    if (conn.isConnected) {
        return;
    }

    const db = await connect("mongodb+srv://ernestoserna:n5e5t5o5@cluster0.hwagn7l.mongodb.net/portfolio");
    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
});

connection.on("error", (err) => {
    console.log(err);
});