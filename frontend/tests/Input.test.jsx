import React from "react";
import {render, screen } from "@testing-library/react";
import {InputComponent} from "../src/Input.jsx";

test("render input component with 'input' as value", () => {
    render(<InputComponent label="test input" value={"input"} onChange={null}/>);
    const element = screen.getByText(/test input/i);
    expect(element).toBeInTheDocument();
})