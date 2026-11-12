import UnitTrait from '@civ-clone/core-unit/UnitTrait';
/**
 * Defends at `multiplier` times its strength against a mounted attacker. What counts as mounted is the game's
 *  `Strength` rule.
 */
export declare class DefenceBonusVsMounted extends UnitTrait {
  readonly multiplier: number;
  constructor(multiplier: number);
}
export default DefenceBonusVsMounted;
