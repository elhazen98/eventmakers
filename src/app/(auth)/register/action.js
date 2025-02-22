"use server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function registerAction(_, formData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const hashedPassword = await bcrypt.hash(password, 12);

    // check collision (is user registered)
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (existingUser) {
        return {
            success: false,
            message: "email already registered",
        };
    }

    await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
        },
    });

    redirect("/login");
}
