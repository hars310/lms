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

// Handle the PATCH (Update) request
export async function PATCH(req) {
  try {
    const { id, updates } = await req.json(); // Expecting `id` and `updates` in the request body
    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });
    if (!updatedBook) {
      return new Response(
        JSON.stringify({ error: "Book not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({ message: "Book updated successfully", updatedBook }),
      {
        status: 200,
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

// Handle the DELETE request
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Expecting `id` in the request body
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return new Response(
        JSON.stringify({ error: "Book not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({ message: "Book deleted successfully", deletedBook }),
      {
        status: 200,
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
