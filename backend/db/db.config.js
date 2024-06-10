import pg from "pg";

const { Pool } = pg;

export const con = new Pool({
    host: process.env.DB_HOST || "34.207.184.100",
    port: process.env.DB_PORT || "5432",
    user: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "postgres",
});

con.on("error", (err, client) => {
    console.error(`Erro ao realizar operação. Detalhes: ${err}`);
});
