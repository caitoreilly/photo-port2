//import packages needed to test the Nav component

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// configure testing environment by adding cleanup utility & describe function
// describe function declares what the test suite will be testing
afterEach(cleanup);

// in function body of the callback function, use same baseline test we used in About component
describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    //assert value comparsion
    expect(asFragment()).toMatchSnapshot();
  });
});

// test for emoji visibility
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    // the query to return the element containing the emoji
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // Assert (evaluation)
    // use the getByLabelText method & query by the aria-label value using 'camera'
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// test for visible links
// declare test's purpose in the describe section
describe("inserts text into the links", () => {
  // Arrange
  it("inserts text into the links", () => {
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );

    // Assert
    // use getByTestId method to make sure correct elements are tested
    // verify that text content is being inserted into <a> tags to links are vis to users
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
