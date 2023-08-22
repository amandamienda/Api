// "mongodb+srv://amiendadesign:amandamienda@cluster0.szwp9lu.mongodb.net/app"

import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://amiendadesign:amandamienda@cluster0.szwp9lu.mongodb.net/app"
);

let db = mongoose.connection;

export default db;
