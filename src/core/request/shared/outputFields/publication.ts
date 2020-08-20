import { Parameter } from "../../shared/parameter";

/**
 * A list of public properties belonging to the Publication class.
 * @type
 */
export type PublicationField = "conference" | "research";

/**
 * Represents a publication, which results from an award
 * @class
 * @ignore
 * @category Request
 * @subcategory ResponseConfig
 */
export class Publication {
  /**
   * Constructs an instance of Publication
   * @constructor
   * @param {Array<PublicationField>} init An array of Fields to return from the response
   */
  constructor(...init: Array<PublicationField>) {
    for (const field of init) {
      this[field] = true;
    }

    Object.defineProperties(this, {
      _conference: { enumerable: false },
      _research: { enumerable: false },
    });

    Object.seal(this);
  }

  private _conference: Parameter<boolean> = new Parameter<boolean>({
    prefix: "publicationConference",
    value: false,
  });
  private _research: Parameter<boolean> = new Parameter<boolean>({
    prefix: "publicationResearch",
    value: false,
  });

  /**
   * Indicates whether information on a conference presentation for the publication should be returned
   * from a request.
   * This information includes the following (delimited by ~):
   * - semicolon delimited presenter names in "Last Name, First Initial" format
   * - event title
   * - conference name
   * - ?
   * - year conference was held
   * - ?
   * - 3-digit integer value, meaning unknown
   * - link to conference metadata (format: http://sourceId/WoS?recid=\d{9}#\d{15})
   * @access public
   * @type {boolean}
   */
  public get conference(): boolean {
    return this._conference.value;
  }
  public set conference(value: boolean) {
    this._conference.value = value;
  }

  /**
   * Indicates whether information on a publication resulting from an award
   * should be returned from the request
   * @access public
   * @type {boolean}
   */
  public get research(): boolean {
    return this._research.value;
  }
  public set research(value: boolean) {
    this._research.value = value;
  }

  /**
   * Outputs a list of response fields to be included in the request
   * @access public
   * @returns {string[]} List of response fields to be included in the request
   */
  public build(): string[] {
    const outputFields: Parameter<boolean>[] = [
      this._conference,
      this._research,
    ];

    const enabledFields: string[] = [];
    for (const field of outputFields) {
      if (field.value === true) enabledFields.push(field.prefix);
    }

    return enabledFields;
  }

  /**
   * Resets all properties to default values
   * @access public
   * @returns {void} void
   */
  public reset(): void {
    Object.assign(this, new Publication());
  }
}
