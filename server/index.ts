import express = require("express");
import compression = require("compression");
import cors = require("cors");
import bodyParser = require("body-parser");
const db = require("../database/index.knex");
const app: express.Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../dist"));
app.use(cors());
app.use(compression());

app.get("*.js", function callback(
  req: express.Request,
  res: express.Response,
  next: any
) {
  req.url += ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

app.get("/api/product/:id", (req: express.Request, res: express.Response) => {
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

app.post("/api/product/", (req: express.Request, res: express.Response) => {
  const { product_name, price } = req.body;
  const payload = {
    product_name,
    price
  };
  db("prices")
    .insert(payload)
    .returning(["id", "product_name", "price"])
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
