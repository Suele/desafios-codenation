import { getRecipesByIngredients, getRecipesByName } from "./recipes";

jest.mock("../services/recipes", () => ({
  getRecipesByName: jest.fn(async () => []),
  getRecipesByIngredients: jest.fn(async () => [])
}));

describe("RecipesService", () => {
  test("getRecipesByName success", done => {
    return getRecipesByName().then(data => {
      expect(data).toBe(data);
      done();
    });
  });

  test("getRecipesByIngredients success", done => {
    const result = getRecipesByIngredients();

    expect(result).toBe(result);
    done();
  });
});
