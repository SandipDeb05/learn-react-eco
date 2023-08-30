/**
 * Greet should render the text hello world if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// only, skip
describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Renders with a name", () => {
    render(<Greet name="Sandip" />);
    const textElement = screen.getByText("Hello Sandip");
    expect(textElement).toBeInTheDocument();
  });
});
