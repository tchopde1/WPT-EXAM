const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wptexamdb",
};

const record = {
    Sender: "Nitin",
    Receiver: "Asha",
    Message: "Hello..."
}

const addRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into Messages (Sender,Receiver,Message) values (?,?,?)`;
    await connection.queryAsyn(sql, [record.Sender, record.Receiver, record.Message]);
    await connection.endAsync();
    console.log("Record of previous message is successfully added.");
}

const getRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from Messages`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("record list");
    console.log(list);
    return list;
}

getRecord();

module.exports = { addRecord, getRecord };