// --- Enviroment Variables ---

export const API_BASE = import.meta.env.VITE_API_BASE as string;

export const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID as string;
export const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI as string;

// --- Others Variables ---

/**
 * A constant array of string representations for number units,
 * typically used to abbreviate large numbers in a human-readable format.
 */
export const SCALE_IDENTIFIERS = [
  "",
  "k",
  "m",
  "b",
  "t",
  "q",
  "Q",
  "s",
  "S",
  "o",
  "n",
  "d",
  "U",
  "D",
  "T",
  "Qt",
  "Qd",
  "Sd",
  "St",
  "O",
  "N",
] as const;

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTzR49qQe6XR147jTcVqkOeH8_ddhEVto",
  appId: "1:822469397675:web:b6641328c7f01224c13bee",
  authDomain: "catty-ec5f9.firebaseapp.com",
  projectId: "catty-ec5f9",
  storageBucket: "catty-ec5f9.firebasestorage.app",
  messagingSenderId: "822469397675",
  measurementId: "G-55HDXME9RW",
};
