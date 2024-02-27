import data from "./recipes";
const saveRecipes = async () => {
  try {
    const response = await fetch("https://restapi.fr/generator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        times: 10,
        resourceName: "recipes",
        title: {
          type: "sentence",
          range: [1, 3],
        },
        image: {
          type: "image",
          theme: "food",
          height: 300,
          width: 300,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save recipes");
    }
    data.push(...recipes);
    console.log("Recipes saved successfully");
  } catch (error) {
    console.error(error);
  }
};

export default saveRecipes;
