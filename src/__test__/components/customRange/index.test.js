import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Range from "../../../components/customRange";

describe("Render element Range", () => {
  test("Render element with first props", () => {
    render(<Range typeRange="first"/>);
    screen.getByText(/0/)
  });
  test("Render element with second props", () => {
    render(<Range typeRange="second"/>);
    screen.getByText(/0/)
  });
});
