import { parse } from "cookie";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const cookies = parse(req.headers.get("cookie") || "");
  const token = cookies.token;
// console.log(token)
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    return new Response(JSON.stringify({ role: decoded.role,token:token }), { status: 200 });
  } catch (err) {
    return new Response("Invalid token", { status: 401 });
  }
}
