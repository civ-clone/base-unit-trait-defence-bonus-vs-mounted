"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefenceBonusVsMounted = void 0;
const UnitTrait_1 = require("@civ-clone/core-unit/UnitTrait");
/**
 * Defends at `multiplier` times its strength against a mounted attacker. What counts as mounted is the game's
 *  `Strength` rule.
 */
class DefenceBonusVsMounted extends UnitTrait_1.default {
    constructor(multiplier) {
        super();
        this.multiplier = multiplier;
    }
}
exports.DefenceBonusVsMounted = DefenceBonusVsMounted;
exports.default = DefenceBonusVsMounted;
//# sourceMappingURL=DefenceBonusVsMounted.js.map