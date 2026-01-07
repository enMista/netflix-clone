import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new Response("Unauthorized", { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Fetch all movies that match the user's favorite IDs
    const favoriteMovies = await db.movie.findMany({
      where: {
        id: {
          in: (user.favoriteIds || []).map(Number)
        }
      }
    });

    return Response.json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}