"use client";

import { Button, DatePicker, Input, Textarea } from "@heroui/react";
import { createEventAction } from "../action";
import { useActionState } from "react";

export const CreateForm = ({ userId }) => {
    const [state, formAction, pending] = useActionState(
        createEventAction,
        null
    );
    const options = [
        { key: "tech", value: "Technology" },
        { key: "sport", value: "Sport" },
        { key: "education", value: "Education" },
        { key: "games", value: "Games" },
        { key: "finance", value: "Finance" },
        { key: "others", value: "Others" },
    ];

    return (
        <form className="space-y-4" action={formAction}>
            <input name="userId" defaultValue={userId} hidden></input>
            <Input name="name" label="Event Name"></Input>
            <Textarea name="description" label="Event Description"></Textarea>
            <div className="flex w-full justify-between p-4 bg-neutral-100 rounded-xl text-sm">
                <label htmlFor="categories" className=" text-neutral-500">
                    Event Categories
                </label>
                <select name="categories" className="bg-transparent">
                    {options.map((option) => (
                        <option key={option.key} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>
            </div>
            <DatePicker name="eventdate" label="Event Date"></DatePicker>
            <Input name="location" label="Event Location"></Input>
            <Input type="file" label="Poster / Flyer"></Input>
            <Button type="submit" isLoading={pending} color="primary">
                Add Event
            </Button>
        </form>
    );
};
