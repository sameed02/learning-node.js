import fs from "fs";

export function handleReq(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      "<body><h1>hi this is sameed</h1><form action='/create-user'  method='POST'><input type='text' name='username'/><button type='submit'>send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const userName = parsedBody.split("=")[1].split("+").join(" ");
      console.log(userName);
      res.writeHead(302, { location: "/" });
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
}

/* if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      "<body><form action='/message'  method='POST'><input type='text' name='message'/><button type='submit'>send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  } */

/* if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1].split("+").join(" ");
      fs.writeFile("message.txt", message, (err) => {
        res.writeHead(302, { location: "/" });
        return res.end();
      });
    });
  } */
