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

    return (
        <div className="space-y-2">
            <div className="text-3xl font-bold">This Page is Protected</div>
            <p>
                nanti ini diisi logic buat bisa create event oleh user yang udah
                login yah, kalau belum login gaboleh, harus login dulu. Boleh
                test pakai hapus session di prisma, soalnya belum bikin
                mekanisme logout, hehe
            </p>
        </div>
    );
}
