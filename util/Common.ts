import { SCALE_IDENTIFIERS } from "@/constants/Common";

/**
 * Formats a number into a human-readable string with optional unit suffixes.
 *
 * The function converts a number into a string representation, appending
 * unit suffixes (e.g., "k", "m", "b") based on the magnitude of the number.
 * It also provides an option to include or exclude the fractional part of
 * the first group of digits.
 *
 * @param input - The number to be formatted.
 * @param lastDigit - A boolean indicating whether to include the fractional
 *                    part of the first group of digits. Defaults to `true`.
 * @returns A formatted string representation of the input number, including
 *          unit suffixes if applicable. If the number is invalid, returns "InfVal".
 */
export function formatNumber(input: number, lastDigit = true): string {
  if (!isFinite(input)) return "InfVal";

  const s = Math.floor(input < 0 ? -input : input).toString();
  if (s.length < 4) return input < 0 ? "-" : "" + s;
  const r = s.length % 3 || 3;

  return (
    (input < 0 ? "-" : "") +
    s.slice(0, r) +
    (lastDigit && s.length % 3 ? "." + s.slice(r, r + (3 - (s.length % 3))) : "") +
    (SCALE_IDENTIFIERS[(s.length - r) / 3] || "udf")
  );
}
