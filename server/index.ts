const express = require("express");
const app = express();
const port: number = 3000;
const bodyParser = require("body-parser");
const db: any = require("../database/index.knex.ts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../dist"));

app.get("/api/getAll/:id", (req: any, res: any) => {
  let reqId: string = req.params.id;
  db("testinsert")
    .select()
    .where("id", `${reqId}`)
    .then((data: object) => {
      res.json(data);
      console.log("grabbing id successful!!");
    })
    .catch((err: string) => {
      console.log(err, "cannot grab id from database");
      res.end();
    });
});

app.listen(
  port,
  (): void => console.log(`Server is listening on port ${port}!`)
);

export {};
