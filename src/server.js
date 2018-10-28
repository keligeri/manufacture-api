import express from 'express'
import { productRoute } from "./routes/product-api";

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.send('Health check');
});

server.use('/api/v1/products', productRoute);

server.listen(port, () => console.log(`Listening on ${port}!`));

export { server };
