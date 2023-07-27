import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { hasTextContent } from './test/util';

import Home from "./app.jsx";

async function addDrink(drink: string, amount: string, percentage?: string) {
    await userEvent.click(screen.getByLabelText(drink));
    await userEvent.click(screen.getByLabelText(amount));

    if (percentage) {
        const percentageInput = screen.getByTestId("percentage-input");
        await userEvent.clear(percentageInput);
        await userEvent.click(percentageInput);
        await userEvent.keyboard(percentage);
    }

    await userEvent.click(screen.getByTestId("add-drink"));
}

describe('App', () => {
    // Should I be using userEvent.setup()?
    // https://testing-library.com/docs/user-event/setup

    it('starts empty', () => {
        render(<Home />);

        expect(screen.getAllByText(hasTextContent("0 units today. 0 units in total.")));
    });

    it('can add a drink', async () => {
        render(<Home />);

        await addDrink("Beer", "Pint");

        expect(screen.getAllByText(hasTextContent("2.8 units today. 2.8 units in total.")));
    });

    it('can add multiple drinks', async () => {
        render(<Home />);

        await addDrink("Beer", "Pint");
        await addDrink("Beer", "Pint");
        await addDrink("Beer", "Pint");

        expect(screen.getAllByText(hasTextContent("8.4 units today. 8.4 units in total.")));
    });

    it('can select specific drinks', async () => {
        render(<Home />);

        await addDrink("Spirit", "50ml", "40");

        expect(screen.getAllByText(hasTextContent("2 units today. 2 units in total.")));
    });

    it('updates amounts based on drink type', async () => {
        render(<Home />);

        await userEvent.click(screen.getByLabelText("Beer"));

        expect(screen.getAllByText(hasTextContent("Pint")));
        expect(screen.getAllByText(hasTextContent("1/2 Pint")));

        expect(screen.queryByText(hasTextContent("50ml"))).toBe(null);

        await userEvent.click(screen.getByLabelText("Spirit"));

        expect(screen.queryByText(hasTextContent("1/2 Pint"))).toBe(null);
        expect(screen.getAllByText(hasTextContent("50ml")));
    });
})