const productRouter = require("./productRoute");

module.exports = (app) => {
    app.use("/api/products", productRouter);
}
