import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/dbConnect";

export async function POST(req) {
  const { name, email, password, role, adminKey } = await req.json();

  await connectToDatabase();

  if (role === "admin" && adminKey !== process.env.ADMIN_SECRET) {
    return new Response(
      JSON.stringify({ message: "Unauthorized to register as admin" }),
      { status: 403 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "user", // Default to "user"
  });

  await user.save();

  return new Response(
    JSON.stringify({ message: "Registration successful", user }),
    { status: 201 }
  );
}
