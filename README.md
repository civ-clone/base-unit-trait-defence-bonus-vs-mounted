# base-unit-trait-defence-bonus-vs-mounted

The `DefenceBonusVsMounted` unit trait: a unit type with it defends better against mounted units.

A unit type with this trait defends at `multiplier` times its strength against a mounted attacker. What counts as mounted is the game's `Strength` rule (in Civ2, a land unit with 2 moves and 1 hit point).

For example: Civ2: flag 10 (Pikemen, `new DefenceBonusVsMounted(1.5)`).

A game declares which of its unit classes have the trait with `UnitTraits` rules from `@civ-clone/core-unit`, and its
rules ask `unit.hasTrait(DefenceBonusVsMounted)`:

```ts
import DefenceBonusVsMounted from '@civ-clone/base-unit-trait-defence-bonus-vs-mounted/DefenceBonusVsMounted';
import { unitTraits } from '@civ-clone/core-unit/Rules/UnitTraits';

ruleRegistry.register(...unitTraits('civ2-unit:unit/trait', Pikemen, new DefenceBonusVsMounted(1.5)));
```

A rule that needs its parameters reads the traits themselves: `unit.traits(DefenceBonusVsMounted)` for a unit, or
`traitsOf(UnitClass, DefenceBonusVsMounted, ruleRegistry)` (from `@civ-clone/core-unit/traits`) for a class. A type may be declared
with more than one:

```ts
unit.traits(DefenceBonusVsMounted).map((trait: DefenceBonusVsMounted): number => trait.multiplier);
```

Part of the unit traits design (civ-clone/web-renderer#1008).
