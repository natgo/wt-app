/**
 * Converts numeric rank to human readable text.
 * @export
 * @param {number} rank - Rank number to convert.
 * @returns  {string} Human readable rank name
 * @example
 * // returns VII
 * numRankToStr(7)
 */
export function numRankToStr(rank: number): string {
  let out_rank = "";
  switch (rank) {
    case 1:
      out_rank = "I";
      break;
    case 2:
      out_rank = "II";
      break;
    case 3:
      out_rank = "III";
      break;
    case 4:
      out_rank = "IV";
      break;
    case 5:
      out_rank = "V";
      break;
    case 6:
      out_rank = "VI";
      break;
    case 7:
      out_rank = "VII";
      break;
    case 8:
      out_rank = "VIII";
      break;
    case 9:
      out_rank = "IX";
      break;
  }
  return out_rank;
}
