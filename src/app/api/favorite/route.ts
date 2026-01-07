import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { without } from "lodash";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { movieId } = await req.json();

    const existingMovie = await db.movie.findUnique({
      where: { id: Number(movieId) }
    });

    if (!existingMovie) {
      return new Response("Invalid ID", { status: 400 });
    }

    const user = await db.user.update({
      where: { email: session.user.email || "" },
      data: {
        favoriteIds: {
          push: String(movieId),
        }
      }
    });

    return Response.json(user);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { movieId } = await req.json();

    const existingMovie = await db.movie.findUnique({
      where: { id: Number(movieId)}
    });

    if (!existingMovie) {
      return new Response("Invalid ID", { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email || "" }
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const updatedFavoriteIds = without(user.favoriteIds, String(movieId));

    const updatedUser = await db.user.update({
      where: { email: session.user.email || "" },
      data: { favoriteIds: updatedFavoriteIds }
    });

    return Response.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}