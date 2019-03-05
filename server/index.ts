const express = require("express");
const app = express();
const port: number = 3000;
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const db: any = require("../database/index.knex.ts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../dist"));
app.use(cors());
app.use(compression());

app.get("*.js", function callback(req: any, res: any, next: any) {
  req.url += ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

app.get("/api/product/:id", (req: any, res: any) => {
  let reqId: string = req.params.id;
  db("prices")
    .select()
    .where("id", reqId)
    .then((data: object) => {
      res.json(data);
    })
    .catch((err: string) => {
      res.end();
    });
});

app.post("/api/product/", function(req: any, res: any) {
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
      res.end();
    });
});

app.listen(
  port,
  (): void => console.log(`Server is listening on port ${port}!`)
);

export {};
