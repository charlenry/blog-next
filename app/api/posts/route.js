import fs from "fs";
import path from "path";

export async function GET(request) {
  // Join all arguments together and normalize the resulting path
  // The process.cwd() method returns the current working directory of the Node.js process.
  const filePath = path.join(process.cwd(), "data", "posts_fr.json");

  // Returns the contents of the path.
  const fileData = fs.readFileSync(filePath);

  // Converts a JavaScript Object Notation (JSON) string into an object.
  const data = JSON.parse(fileData);  

  return new Response(JSON.stringify(data))
}