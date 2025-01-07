import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/dbConnect";

export async function POST(req) {
  const { email, password } = await req.json();

  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) return new Response("User not found", { status: 404 });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return new Response("Invalid credentials", { status: 401 });

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // Set the token as an HTTP-only cookie
  return new Response(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`,
      "Content-Type": "application/json",
    },
  });
}
