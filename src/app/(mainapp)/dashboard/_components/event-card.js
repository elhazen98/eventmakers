import { Link } from "@heroui/react";

export const EventCard = ({ id, eventName, eventLocation }) => {
    return (
        <Link
            href={`/${id}`}
            className="h-24 bg-neutral-200 rounded-xl text-neutral-900 items-start hover:scale-105 hover:duration-100 transition"
        >
            <div className="p-2">
                <div className="font-bold">{eventName}</div>
                <div>{eventLocation}</div>
            </div>
        </Link>
    );
};
