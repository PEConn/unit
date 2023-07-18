import { makeDrink } from '../logic/drink'
import Drink from './Drink';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest';
import { hasTextContent } from '../test/util';

// TODO: Figure out type definitions for above.

describe('Drink component', () => {
    const drink = makeDrink(12, "Beer", "200ml", "4", "Today");

    it('displays', () => {
        render(<Drink drink={drink} removeDrink={vi.fn()} />);

        expect(screen.getAllByText(hasTextContent("Today: 200ml of 4% Beer, 0.8 units.")));
    })

    it('responds to clicks', async () => {
        const removeDrink = vi.fn();
        render(<Drink drink={drink} removeDrink={removeDrink} />);

        await userEvent.click(screen.getByText("🗑️"));

        expect(removeDrink.mock.calls).toEqual([[12]]);
    });
})