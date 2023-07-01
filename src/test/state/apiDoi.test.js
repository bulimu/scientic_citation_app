import { setupApiStore } from "./helpers";
import { apiDoi } from "../../state/apiDoi";

const store = setupApiStore(apiDoi);

test("getMetadata endpoint should handle invalid DOI", async () => {
  const doi = "123456";
  const { data, isError, isSuccess } = await store.dispatch(
    apiDoi.endpoints.getMetadata.initiate(doi)
  );

  expect(isError).toBe(true);
  expect(isSuccess).toBe(false);
  expect(data).toBeUndefined();
});

test("etMetadata endpoint should fetch metadata", async () => {
  const doi = "10.5555/12345678";
  const { data, isError, isSuccess } = await store.dispatch(
    apiDoi.endpoints.getMetadata.initiate(doi)
  );

  expect(isError).toBe(false);
  expect(isSuccess).toBe(true);
  expect(data).toBeDefined();
});
