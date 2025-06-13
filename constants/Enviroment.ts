// --- Enviroment Variables ---

export const ENV_RUNNING = import.meta.env.MODE as string;
export const ENV_IS_DEV = ENV_RUNNING === "development";
export const ENV_IS_PROD = ENV_RUNNING === "production";

export const API_BASE = import.meta.env.VITE_API_BASE as string;
export const API_WS_BASE = import.meta.env.VITE_API_WS_BASE as string;

export const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID as string;
export const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI as string;
