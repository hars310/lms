import { connectToDatabase } from "@/lib/dbConnect";
import Book from "@/models/Book";

export async function POST(req) {
  await connectToDatabase();

  try {
    const { bookId } = await req.json(); // Parse the request body
    const book = await Book.findById(bookId);
    if (!book) {
      return new Response(JSON.stringify({ message: "Book not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!book.isBorrowed) {
      return new Response(
        JSON.stringify({ message: "Book is not borrowed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    book.isBorrowed = false;
    await book.save();

    return new Response(
      JSON.stringify({ message: "Book returned successfully", book }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
