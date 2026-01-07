import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { movieId: string } }
) {
  try {
    const { movieId } = params;

    if (!movieId) {
      return new Response("Invalid ID", { status: 400 });
    }

    const movieIdNum = parseInt(movieId, 10);
    if (Number.isNaN(movieIdNum)) {
      return new Response("Invalid ID", { status: 400 });
    }

    const movie = await db.movie.findUnique({
      where: { id: movieIdNum }
    });

    if (!movie) {
      return new Response("Movie not found", { status: 404 });
    }

    return Response.json(movie);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
