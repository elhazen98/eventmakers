"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
    const cookieStore = await cookies();
    const email = formData.get("email");
    const password = formData.get("password");

    // check validation (all field must be filled)
    if (!email || !password) {
        return {
            success: false,
            message: "All field must be filled",
        };
    }

    // check user existence
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        return {
            success: false,
            message: "Account not found",
        };
    }

    // check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return {
            success: false,
            message: "Invalid credentials",
        };
    }

    // create session
    const newSession = await prisma.session.create({
        data: {
            userId: user.id,
            createdAt: new Date(),
            expiredAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
        },
    });

    // create cookies
    cookieStore.set("sessionId", newSession.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: newSession.expiredAt,
        sameSite: "lax",
    });

    redirect("/dashboard");
}
