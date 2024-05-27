import pg from "pg";

const { Pool } = pg;

export const con = new Pool({
    host: "34.207.184.100",
    port: "5432",
    user: "postgres",
    password: "root",
    database: "postgres",
});

con.on("error", (err, client) => {
    console.error(`Erro ao realizar operação. Detalhes: ${err}`);
});
