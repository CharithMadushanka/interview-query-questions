import DifficultyChip from "./DifficultyChip";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DifficultyChip", () => {
  it("should render", () => {
    render(<DifficultyChip difficulty="1" />);
  });

  it("should render Easy when difficulty is 1", () => {
    render(<DifficultyChip difficulty="1" />);
    expect(screen.getByText("Difficulty: Easy")).toBeInTheDocument();
  });

  it("should render Medium when difficulty is 2", () => {
    render(<DifficultyChip difficulty="2" />);
    expect(screen.getByText("Difficulty: Medium")).toBeInTheDocument();
  });

  it("should render Hard when difficulty is 3", () => {
    render(<DifficultyChip difficulty="3" />);
    expect(screen.getByText("Difficulty: Hard")).toBeInTheDocument();
  });

  it("should apply correct styling for difficulty 1", () => {
    const { container } = render(<DifficultyChip difficulty="1" />);

    const chip = container.querySelector(".MuiChip-root") as HTMLElement;
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle({
      backgroundColor: "#E5F0E9",
      color: "#287750",
    });
  });

  it("should apply correct styling for difficulty 2", () => {
    const { container } = render(<DifficultyChip difficulty="2" />);

    const chip = container.querySelector(".MuiChip-root") as HTMLElement;
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle({
      backgroundColor: "#FFF3E0",
      color: "#FF9800",
    });
  });

  it("should apply correct styling for difficulty 3", () => {
    const { container } = render(<DifficultyChip difficulty="3" />);

    const chip = container.querySelector(".MuiChip-root") as HTMLElement;
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle({
      backgroundColor: "#FFE3E3",
      color: "#B00020",
    });
  });

  it("should return null for unknown difficulty", () => {
    const { container } = render(<DifficultyChip difficulty="4" />);

    const chip = container.querySelector(".MuiChip-root") as HTMLElement;
    expect(chip).toBeNull();
  });
});
