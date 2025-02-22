"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function registerAction(_, formData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // check validation (all field must be filled)
    if (!username || !email || !password) {
        return {
            success: false,
            message: "All field must be filled",
        };
    }

    // check collision (is user registered)
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (user) {
        return {
            success: false,
            message: "Email already registered",
        };
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create user in database
    await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
        },
    });

    redirect("/login");
}
