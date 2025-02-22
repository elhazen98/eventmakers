"use client";

import { Button, Input } from "@heroui/react";
import { loginAction } from "./action";
import { useActionState } from "react";

export default function Page() {
    const [state, formAction, pending] = useActionState(loginAction, null);
    return (
        <div className="space-y-4 font-bold">
            <div>Login</div>
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
        </div>
    );
}
