import { render, screen } from "@testing-library/react";
import Header from "../Header";

////////////////////////////////////////////////////////////////////
// GET BY

// getByText
it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// // getByRole
// // Fail because there are two headings(at least for a moment)
// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// // getByRole
// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// // getByTitle (semantic)
// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// // getByTestId
// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// ////////////////////////////////////////////////////////////////////
// // FIND BY

// // findByText
// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// ////////////////////////////////////////////////////////////////////
// // QUERY BY

// // queryByText
// it("should not have heading with text - dogs", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// ////////////////////////////////////////////////////////////////////
// // GET ALL

// // getAllByRole
// it("should render two headings", async () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
