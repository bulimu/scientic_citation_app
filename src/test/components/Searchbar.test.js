import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/Searchbar";

test("renders SearchBar component", () => {
  const handleSearch = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <SearchBar onSearch={handleSearch} />
  );

  const inputElement = getByPlaceholderText("Enter DOI");
  const submitButton = getByRole("button", { name: /search/i });

  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("handles input change correctly", () => {
  const handleSearch = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onSearch={handleSearch} />
  );

  const inputElement = getByPlaceholderText("Enter DOI");
  const testValue = "testDOI";

  fireEvent.change(inputElement, { target: { value: testValue } });

  expect(inputElement.value).toBe(testValue);
});

test("triggers search on form submit", () => {
  const handleSearch = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <SearchBar onSearch={handleSearch} />
  );

  const inputElement = getByPlaceholderText("Enter DOI");
  const submitButton = getByRole("button", { name: /search/i });

  const testValue = "testDOI";
  fireEvent.change(inputElement, { target: { value: testValue } });
  fireEvent.submit(submitButton);

  expect(handleSearch).toHaveBeenCalledTimes(1);
  expect(handleSearch).toHaveBeenCalledWith(testValue);
});
