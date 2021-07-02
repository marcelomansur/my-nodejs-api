import "./config/environment";
import { app } from "./app";

const nodePort = process.env.PORT || 3000;
console.log(nodePort);

app.listen(nodePort, () =>
  console.log(`Server is running on port ${nodePort}`)
);
