import { makeDrink } from '../logic/drink'
import Drink from './Drink';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest';

// TODO: Figure out type definitions for above.

// TODO: Move this somewhere else.
const hasTextContent = (text: string) => {
    return (content?: string, element?: Element | null) => {
        if (!element || !element.textContent) return false;

        return element.textContent.includes(text);
    }
}

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