"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Get the client
const mysql2_1 = __importDefault(require("mysql2"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Create the connection to database
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
/* app.use(cors(
   {
       origin: ["https://deploy-mern-frontend.vercel.app"],
       methods: ["POST", "GET"],
       credentials: true
   } */
app.use(express_1.default.json());
//app.use("/styles", express.static(__dirname + '/styles'));
/* const db =  mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'1234',
    database:'reacttest'
    
}) */
/* const db =  mysql.createPool({
    user:'yahya',  //'sgroot'
    host:'SG-yahya-12738-mysql-master.servers.mongodirector.com',
    password:'Ya@123456za', // 'dmcUQ0ExpV0IB-Fg'
    database:'reacttest'
  
}) */
const db = mysql2_1.default.createPool({
    user: 'freedb_Ya123456', //'sgroot'
    host: 'sql.freedb.tech',
    password: '$5hXe7V$Vgc5?Z2', // 'dmcUQ0ExpV0IB-Fg'
    database: 'freedb_reacttest'
});
app.get('/', (req, res) => {
    res.json('weldone');
});
//Get all
app.get('/all', (req, res) => {
    db.query('select * from test', async (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // const students= await res.send(result)
            return res.send(result);
        }
        return res.send(result);
    });
});
// Get one 
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM test WHERE `id`= ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // const students= await res.send(result)
            return res.send(result);
        }
        return res.send(result);
    });
});
app.listen(port, () => {
    console.log("running on por " + port);
});
exports.default = app;
