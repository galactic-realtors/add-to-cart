const express = require("express");
const app = express();
const port: number = 3000;
const bodyParser = require("body-parser");
const db: any = require("../database/index.knex.ts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../dist"));

app.get("/api/product/:id", (req: any, res: any) => {
  let reqId: string = req.params.id;
  db("prices")
    .select()
    .where("id", reqId)
    .then((data: object) => {
      console.log("grabbing id successful!!");
      res.json(data);
    })
    .catch((err: string) => {
      console.log(err, "cannot grab id from database");
      res.end();
    });
});

app.post("/api/product/", function(req: any, res: any) {
  console.log("this is req.body", req.body);
  const { product_name, price } = req.body;
  const payload = {
    product_name,
    price
  };
  db("prices")
    .insert(payload)
    .returning("id")
    .then(function(data: object) {
      res.json(data);
    })
    .catch(function(err: string) {
      console.log(err, "cannot grab id from database");
      res.end();
    });
});

app.listen(
  port,
  (): void => console.log(`Server is listening on port ${port}!`)
);

export {};
