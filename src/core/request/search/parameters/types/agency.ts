/**
 * @typedef Agency
 * @param {string} Name 'NASA' | 'NSF'
 */
export type Agency = {
  name?: Name;
};

/**
 * A list of Agencies covered by this API.
 * @type
 */
export type Name = "NASA" | "NSF";
