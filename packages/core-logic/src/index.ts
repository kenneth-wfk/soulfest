import { Client as WebClient, Account, Databases } from 'appwrite';
import { Client as NodeClient } from 'node-appwrite';

/**
 * Shared Appwrite Configuration and Clients
 * To be customized with actual endpoint and project ID.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string;

if (!ENDPOINT || !PROJECT_ID) {
    console.warn("Missing Appwrite environment variables! Please check your .env file.");
}

// Web Client for Frontend
export const webClient = new WebClient()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(webClient);
export const databases = new Databases(webClient);

// Server Client helper
export const createAdminClient = (apiKey: string) => {
    return new NodeClient()
        .setEndpoint(ENDPOINT)
        .setProject(PROJECT_ID)
        .setKey(apiKey);
};
