import {connect, connection} from "mongoose";

const conn = {
    isConnected: false,
}

export async function connectDB() {
    if (conn.isConnected) {
        return;
    }

    const db = await connect(process.env.MONGODB_URI);
    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
});

connection.on("error", (err) => {
    console.log(err);
});