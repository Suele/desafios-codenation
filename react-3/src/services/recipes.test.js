import { getRecipesByIngredients, getRecipesByName } from "./recipes";
describe("RecipesService", () => {
  test("getRecipesByIngredients returns a Promise", () => {
    const promise = getRecipesByIngredients().catch(err => {
      /* ignore */
    });

    expect(promise instanceof Promise).toBeTruthy();
  });

  test("getRecipesByName returns a Promise", () => {
    const promise = getRecipesByName().catch(err => {
      /* ignore */
    });

    expect(promise instanceof Promise).toBeTruthy();
  });

  test("getRecipesByIngredients fetches a page", async () => {
    const response = await getRecipesByIngredients().catch(err => {
      /* ignore */
    });

    /**
     * There are many ways in which the participant can
     * implement this service. Thre recipies got from it
     * can be in many paths. We need to consider as many
     * as we can.
     */

    const recipes =
      (response.data && response.data.results) || // axios returning results
      response.data || // axios returning data
      response.results || // fetch returning results
      response || // axios or fetch returning response
      expect(recipes).toHaveLength(10);
  });

  test("getRecipesByName fetches a page", async () => {
    const response = await getRecipesByName().catch(err => {
      /* ignore */
    });

    /**
     * There are many ways in which the participant can
     * implement this service. Thre recipies got from it
     * can be in many paths. We need to consider as many
     * as we can.
     */

    const recipes =
      (response.data && response.data.results) || // axios returning results
      response.data || // axios returning data
      response.results || // fetch returning results
      response || // axios or fetch returning response
      expect(recipes).toHaveLength(10);
  });
});
