import { con } from '../db/db.config.js'

const list = async (req, res) =>{
    const client = await con.connect()
    const r = await client.query("Select * from reports")
    console.log(r)
    client.release()
}

export default {list}