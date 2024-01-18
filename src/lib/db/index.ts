import { drizzle } from 'drizzle-orm/neon-http';

import { neon } from '@neondatabase/serverless';

import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

const client = neon(connectionString);

export const db = drizzle(client, { schema });
