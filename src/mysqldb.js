import { createConnection } from "mysql2";
import{
    db_host,
    db_name,
    db_password,
    db_port,
    db_user
} from "./config.js"

export const db = createConnection({
    host:db_host,
    user:db_user,
    password:db_password,
    database:db_name,
    port:db_port
});