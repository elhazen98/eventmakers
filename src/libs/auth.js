import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";

export async function auth() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("sessionId")?.value;
    let isLoggedIn = false;

    if (!sessionId) {
        return null;
    }

    isLoggedIn = true;
    const session = await prisma.session.findUnique({
        where: {
            id: sessionId,
        },
        include: {
            user: {
                select: {
                    id: true,
                    username: true,
                    email: true,
                },
            },
        },
    });

    return session;
}
