"use client";

import { Button, Input, Link } from "@heroui/react";
import { loginAction } from "./action";
import { useActionState } from "react";

export default function Page() {
    const [state, formAction, pending] = useActionState(loginAction, null);

    return (
        <div className="space-y-4">
            <div className="text-xl text-center font-bold">Login</div>
            <form action={formAction} className="space-y-2">
                <Input name="email" type="email" label="Email" required />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    required
                />
                <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    isLoading={pending}
                >
                    Login
                </Button>
            </form>
            {!state?.success && (
                <div className="text-rose-700 text-sm">{state?.message}</div>
            )}
            <div className="text-sm">
                Don't have an account?{" "}
                <span>
                    <Link href="/register" className="text-sm">
                        Register
                    </Link>
                </span>
            </div>
        </div>
    );
}
