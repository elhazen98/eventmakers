"use server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(formData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
        },
    });
}
