import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import { CreateForm } from "./_components/create-form";

export default async function Page() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="space-y-8">
            <div className="text-xl font-bold">Add New Event</div>
            <CreateForm userId={session.user.id} />
        </div>
    );
}
