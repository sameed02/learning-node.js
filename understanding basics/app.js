import http from "http";
import { handleReq } from "./routes.js";

const server = http.createServer(handleReq);

server.listen(3000);
