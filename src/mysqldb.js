import { createConnection } from "mysql2";
import parseDatabaseUrl from "parse-database-url";
import{
    db_host,
    db_name,
    db_password,
    db_port,
    db_user
} from "./config.js"

import { dbconfig } from "./config.js";

const dbcon = parseDatabaseUrl(dbconfig)

export const db = createConnection(dbcon);

db.connect()