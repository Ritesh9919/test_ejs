import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

app.use(express.static("src/views"));

const product = [
  {
    name: "shirt",
    color: "red",
  },
  {
    name: "paint",
    color: "blue",
  },
  {
    name: "jeans",
    color: "green",
  },
];

app.get("/", (req, res) => {
  console.log(product);
  res.render("product", { product });
});

app.listen(8000, () => {
  console.log("Server is running");
});
