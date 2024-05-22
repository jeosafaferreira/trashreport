import pg from 'pg';

const { Pool } = pg;

export const con = new Pool({
    host: "aws-0-sa-east-1.pooler.supabase.com",
    port: "5432",
    user: "postgres.ppakxhitpfazjwbskfqp",
    password: "trashreport2022"
});

con.on('error', (err, client) => {
    console.error(`Erro ao realizar operação. Detalhes: ${err}`);
})