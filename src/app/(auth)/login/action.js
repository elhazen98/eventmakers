"use server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    // check collision (is user registered)
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        return {
            success: false,
            message: "account not found",
        };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return {
            success: false,
            message: "invalid credentials",
        };
    }

    redirect("/dashboard");
}
