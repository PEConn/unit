import { getAmountInMl, makeDrink } from "./drink"

describe('drink', () => {
  const drink = (amount: string) => {
    return makeDrink(0, "Beer", amount, 5, "some day");
  }

  it('parses Pint',     () => { expect(getAmountInMl(drink("Pint"))).toBeCloseTo(568); } )
  it('parses 1/3 Pint', () => { expect(getAmountInMl(drink("1/3 Pint"))).toBeCloseTo(189 , 0); } )
  it('parses 1/2 Pint', () => { expect(getAmountInMl(drink("1/2 Pint"))).toBeCloseTo(284, 0); } )
  it('parses 2/3 Pint', () => { expect(getAmountInMl(drink("2/3 Pint"))).toBeCloseTo(379, 0); } )
})