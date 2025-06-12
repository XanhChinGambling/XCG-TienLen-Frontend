enum TienLenWinning {
  NORMAL = "NORMAL",
  DRAGON_SEQUENCE = "DRAGON_SEQUENCE",
  FOUR_OF_TWO = "FOUR_OF_TWO",
  FIVE_CONSECUTIVE_PAIRS = "FIVE_CONSECUTIVE_PAIRS",
  SIX_PAIRS = "SIX_PAIRS",
}

export default TienLenWinning;

export const TienLenWinningMultiplier: Record<TienLenWinning, number> = {
  [TienLenWinning.NORMAL]: 1,
  [TienLenWinning.DRAGON_SEQUENCE]: 2,
  [TienLenWinning.FOUR_OF_TWO]: 1,
  [TienLenWinning.FIVE_CONSECUTIVE_PAIRS]: 1,
  [TienLenWinning.SIX_PAIRS]: 1,
};
