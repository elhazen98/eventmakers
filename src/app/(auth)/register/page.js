"use client";

import { Button, Input, Link } from "@heroui/react";
import { registerAction } from "./action";
import { useActionState } from "react";

export default function Page() {
    const [state, formAction, pending] = useActionState(registerAction, null);
    return (
        <div className="space-y-4">
            <div className="text-xl font-bold text-center">Register</div>
            <form action={formAction} className="space-y-2">
                <Input name="username" label="Username" required />
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
                    Register
                </Button>
            </form>
            {!state?.success && (
                <div className="text-rose-700 text-sm">{state?.message}</div>
            )}
            <div className="text-sm">
                Already have an account?{" "}
                <span>
                    <Link href="/login" className="text-sm">
                        Sign In
                    </Link>
                </span>
            </div>
        </div>
    );
}
