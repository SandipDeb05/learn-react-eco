import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

const SKILLS = ["HTML", "CSS", "JS"];

describe("Skills", () => {
  test("Renders correctly", () => {
    render(<Skills skills={SKILLS} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Renders list of skills correctly", () => {
    render(<Skills skills={SKILLS} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(SKILLS.length);
  });

  test("Renders login button", () => {
    render(<Skills skills={SKILLS} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={SKILLS} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={SKILLS} />);
    // logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
