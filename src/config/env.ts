import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
});

envSchema.parse(process.env);

type EnvVariables = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVariables {}
  }
}
