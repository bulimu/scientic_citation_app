import { render } from "@testing-library/react";
import DisplayCard from "../../components/DisplayCard";

test("renders data correctly", () => {
  const data = {
    title: "Test Title",
    abstract: "Test Abstract",
    author: [{ suffix: "Mr.", given: "John", family: "Doe" }],
    type: "Test Type",
    ISSN: ["1234-5678"],
    issued: { "date-parts": [[2022, 1, 1]] },
    "is-referenced-by-count": 10,
    "reference-count": 3,
  };

  const { getByText } = render(<DisplayCard data={data} />);

  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText("Abstract: Test Abstract")).toBeInTheDocument();
  expect(getByText("Authors: Mr. John Doe")).toBeInTheDocument();
  expect(getByText("Type: Test Type")).toBeInTheDocument();
  expect(getByText("ISSN: 1234-5678")).toBeInTheDocument();
  expect(getByText("Issued: 2022-1-1")).toBeInTheDocument();
  expect(getByText("Citation Count: 10")).toBeInTheDocument();
  expect(getByText("Reference Count: 3")).toBeInTheDocument();
});

test("renders correctly without optional fields", () => {
  const data = {
    title: "Test Title",
    type: "Test Type",
  };

  const { getByText, queryByText } = render(<DisplayCard data={data} />);

  expect(getByText("Test Title")).toBeInTheDocument();
  expect(queryByText("Abstract:")).toBeNull();
  expect(queryByText("Authors:")).toBeNull();
  expect(getByText("Type: Test Type")).toBeInTheDocument();
  expect(queryByText("ISSN:")).toBeNull();
  expect(queryByText("Issued:")).toBeNull();
  expect(queryByText("Citation Count:")).toBeNull();
  expect(queryByText("Reference Count:")).toBeNull();
});

test("renders correctly with empty data", () => {
  const data = {};

  const { queryByText } = render(<DisplayCard data={data} />);

  expect(queryByText("Test Title")).toBeNull();
  expect(queryByText("Abstract:")).toBeNull();
  expect(queryByText("Authors:")).toBeNull();
  expect(queryByText("Type:")).toBeNull();
  expect(queryByText("ISSN:")).toBeNull();
  expect(queryByText("Issued:")).toBeNull();
  expect(queryByText("Citation Count:")).toBeNull();
  expect(queryByText("Reference Count:")).toBeNull();
});

test("renders correctly with multiple authors", () => {
  const data = {
    title: "Test Title",
    author: [
      { suffix: "Mr.", given: "John", family: "Doe" },
      { suffix: "Ms.", given: "Jane", family: "Smith" },
    ],
    type: "Test Type",
  };

  const { getByText } = render(<DisplayCard data={data} />);

  expect(getByText("Test Title")).toBeInTheDocument();
  expect(
    getByText("Authors: Mr. John Doe, Ms. Jane Smith")
  ).toBeInTheDocument();
  expect(getByText("Type: Test Type")).toBeInTheDocument();
});
