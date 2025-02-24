import { prisma } from "@/utils/prisma";
import { Button, Link } from "@heroui/react";
import { EventCard } from "./_components/event-card";

export default async function Page() {
    const events = await prisma.event.findMany();

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <div className="font-bold text-2xl">On Going Events</div>
                <p>
                    Find out about all the exciting events happening around you.
                </p>
            </div>
            <div className="space-y-2">
                <div className="font-bold text-xl">Category</div>
                <div className="grid grid-cols-3 grid-rows-3 h-64 w-full bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="space-y-2">
                <div className="font-bold text-xl">On Going Events</div>
                <div className="grid grid-cols-3 gap-2 w-full">
                    {events.map((event) => (
                        <EventCard
                            id={event.id}
                            eventName={event.eventName}
                            eventLocation={event.eventLocation}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="font-bold text-xl">Create Your Event Now</div>
                <Link href="/create">
                    <Button className="w-full font-bold" color="success">
                        Create Your Event
                    </Button>
                </Link>
            </div>
        </div>
    );
}
