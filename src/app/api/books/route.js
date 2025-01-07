import { connectToDatabase } from "@/lib/dbConnect";
import Book from "@/models/Book";

// Connect to the database before handling requests
connectToDatabase();

// Handle the GET request
export async function GET(req) {
  try {
    const books = await Book.find();
    return new Response(JSON.stringify(books), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle the POST request
export async function POST(req) {
  try {
    const body = await req.json(); // Parse request body
    const book = new Book(body);
    await book.save();
    return new Response(
      JSON.stringify({ message: "Book added successfully", book }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
