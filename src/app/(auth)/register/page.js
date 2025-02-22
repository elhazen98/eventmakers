import { Button, Input } from "@heroui/react";
import { registerAction } from "./action";

export default function Page() {
    return (
        <div className="space-y-4 font-bold">
            <div>Register Account</div>
            <form action={registerAction} className="space-y-2">
                <Input name="username" label="Username" required />
                <Input name="email" type="email" label="Email" required />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    required
                />
                <Button type="submit" color="primary" className="w-full">
                    Register
                </Button>
            </form>
        </div>
    );
}
