import { prisma } from "@/utils/prisma";

export default async function Page({ params }) {
    const { id } = await params;

    const event = await prisma.event.findUnique({
        where: {
            id: id,
        },
        include: {
            author: {
                select: {
                    username: true,
                },
            },
        },
    });

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            <div className="font-bold text-2xl">{event.eventName}</div>
            <div>{event.eventLocation}</div>
            <p>{event.eventDescription}</p>
            <div className="text-neutral-400">
                created by: {event.author.username}
            </div>
        </div>
    );
}
