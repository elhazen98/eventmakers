import { Button, Link } from "@heroui/react";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"] });

export default function Page() {
    return (
        <div className="flex h-screen items-center">
            <div
                className={`items-center max-w-sm w-5/6 m-auto py-8 font-mono space-y-8 ${onest.className}`}
            >
                <div className="space-y-2">
                    <div className="font-bold text-2xl">
                        Welcome to Eventmakers
                    </div>
                    <p className="text-neutral-500 text-sm">
                        Your go-to platform for creating and managing events
                        effortlessly. Plan your perfect event, invite guests,
                        and make every moment unforgettable.{" "}
                        <span>
                            <Link href="/dashboard" className="text-sm">
                                Get started
                            </Link>
                        </span>
                    </p>
                </div>
                <div className="flex flex-col justify-between space-y-2">
                    <Link href="/register">
                        <Button className="w-full" color="primary">
                            Register
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button className="w-full" color="primary">
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
