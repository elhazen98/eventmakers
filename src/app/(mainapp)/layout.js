import { auth } from "@/libs/auth";
import { Button, Link } from "@heroui/react";
import { Onest } from "next/font/google";
import Avatar from "boring-avatars";

const onest = Onest({ subsets: ["latin"] });

export default async function Layout({ children }) {
    const session = await auth();
    return (
        <div
            className={`flex flex-col h-screen justify-between ${onest.className}`}
        >
            <div className="flex justify-between px-8 py-4">
                <Link className="font-bold text-neutral-900" href="/dashboard">
                    Eventmakers
                </Link>
                {session ? (
                    <div className="flex space-x-2">
                        <div className="text-right">
                            <div className="font-bold">
                                {session.user.username}
                            </div>
                            <div className="text-sm text-neutral-500">
                                {session.user.email}
                            </div>
                        </div>
                        <Avatar
                            name={session.user.username}
                            size={40}
                            colors={[
                                "#fb6900",
                                "#f63700",
                                "#004853",
                                "#007e80",
                                "#00b9bd",
                            ]}
                        />
                    </div>
                ) : (
                    <Link href="/login">
                        <Button className="w-full" color="default">
                            Login
                        </Button>
                    </Link>
                )}
            </div>
            <div className="h-full">
                <div className="max-w-xl w-5/6 m-auto py-4">{children}</div>
            </div>
            <div className="flex justify-between px-8 py-4 text-neutral-500">
                <div>devscale/batch8</div>
                <div className="font-bold">chronix</div>
            </div>
        </div>
    );
}
