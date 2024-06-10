import { con } from "../db/db.config.js";

const list = async (req, res) => {
    const r = await con.query("Select reports.id, reports.created_at, reports.name, reports.contact, reports.details from trashreport.reports");
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
            file_type,
            file_name,
            file_data,
            lat,
            lng
        )
        VALUES
        (
            '${req.body.name}',
            '${req.body.contact}',
            '${req.body.details}',
            '${req.body.mimetype}',
            '${req.body.fileName}',
            '${req.body.fileData}',
            '${req.body.lat}',
            '${req.body.lng}'
        )
    `);
    res.status(200).json({ success: "true" });
};

const getReport = async (req, res) => {
    console.log("getReport");
    const r = await con.query("Select * from trashreport.reports where id = $1", [req.params.id]);

    res.status(200).json(r.rows[0]);
};

const deleteReport = async (req, res) => {
    console.log("deleteReport");
    await con.query("Delete from trashreport.reports where id = $1", [req.params.id]);
    res.status(200).json();
};

export default { list, create, getReport, deleteReport };
