import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header", () => {
    it("renders the logo text", () => {
        render(<Header />);
        expect(screen.getByText("DevName")).toBeInTheDocument();
    });
});
