import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("sessionId")?.value;

    // check session existence
    if (!sessionId) {
        redirect("/login");
    }

    // check session in database
    const session = await prisma.session.findUnique({
        where: {
            id: sessionId,
        },
    });

    if (!session) {
        redirect("/login");
    }

    return <div className="text-3xl font-bold text-center">Welcome</div>;
}
