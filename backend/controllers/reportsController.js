import { con } from "../db/db.config.js";

const list = async (req, res) => {
    const r = await con.query("Select * from trashreport.reports");
    res.status(200).json(r.rows);
};

const create = (req, res) => {
    console.log(req.body);
    con.query(`
    INSERT INTO
        trashreport.reports
        (
            name,
            contact,
            details,
            file_url
        )
        VALUES
        (
            '${req.body.name}',
            '${req.body.contact}',
            '${req.body.details}',
            '${req.body.file_url}'
        )
    `);
    res.status(200).json({ success: "true" });
};

export default { list, create };
