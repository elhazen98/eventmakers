"use server";

import { prisma } from "@/utils/prisma";
import { Nanum_Pen_Script } from "next/font/google";

export async function createEventAction(_, formData) {
    const userId = formData.get("userId");
    const name = formData.get("name");
    const description = formData.get("description");
    const categories = formData.get("categories");
    const eventdate = new Date(formData.get("eventdate"));
    const location = formData.get("location");
    const image = formData.get("image");

    console.log({ userId, name, description, categories, eventdate, location });

    // check validation (all field must be filled)
    if (!name || !description || !categories || !eventdate || !location) {
        return {
            success: false,
            message: "All field must be filled",
        };
    }

    await prisma.event.create({
        data: {
            authorId: userId,
            eventName: name,
            eventDescription: description,
            eventCategory: categories,
            eventDate: eventdate,
            eventLocation: location,
        },
    });
}
