import dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const envSchema = z.object({
	NODE_ENV: z
		.union([
			z.literal("development"),
			z.literal("production"),
			z.literal("test"),
		])
		.default("development"),
	STRING_EXAMPLE: z.string().min(1),
	NUMBER_EXAMPLE: z.coerce.number().min(1000),
});

const env = envSchema.parse(process.env);

export { env };
