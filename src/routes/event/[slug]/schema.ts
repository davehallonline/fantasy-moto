import { z } from "zod";
 
export const constructors = {
    "2b56f308-166b-41de-a6b0-3e8e09bdd874": "Red Bull",
    "8f9742ff-8bbb-41ab-a759-dec1d5c6f4b6": "McLaren",
    "5dd286ac-9903-42b6-b092-9fbcd62db93f": "Mercedes"
} as const;

type Constructor = keyof typeof constructors;

export const formSchema = z.object({
    /* user_id: z.string().min(2).max(50),*/
    event_id: z.string().min(2).max(50), 
	constructor_id: z
		.enum(Object.keys(constructors) as [Constructor, ...Constructor[]])
		.default("8f9742ff-8bbb-41ab-a759-dec1d5c6f4b6"),
});

export type FormSchema = typeof formSchema;