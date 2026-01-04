import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Fetch random movie
  const movieCount = await db.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await db.movie.findMany({
    take: 1,
    skip: randomIndex
  });
  
  return Response.json(randomMovies[0]);
}
