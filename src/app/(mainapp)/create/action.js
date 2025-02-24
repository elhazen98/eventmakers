"use server";

import { prisma } from "@/utils/prisma";

export async function createEventAction(_, formData) {
    const userId = formData.get("userId");
    const name = formData.get("name");
    const description = formData.get("description");
    const categories = formData.get("categories");
    const eventdate = new Date(formData.get("eventdate"));
    const location = formData.get("location");
    const image = formData.get("image");

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
