import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)
    // assert
    // make an assertion (using Jest global function)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const successText = /🎉/;
    const sucessMessage = screen.queryByText(successText);
    expect(sucessMessage).not.toBeInTheDocument();

    const checkoutElements = screen.getAllByText(/checkout/i);
    expect(checkoutElements).toHaveLength(2);
    fireEvent.click(checkoutElements[1]);
    

    screen.getByText(successText);
});
