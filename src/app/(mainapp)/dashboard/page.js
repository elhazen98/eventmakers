import { Button, Link } from "@heroui/react";

export default async function Page() {
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
                <div className="grid grid-cols-3 grid-rows-3 h-64 w-full bg-neutral-200 rounded-xl"></div>
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
