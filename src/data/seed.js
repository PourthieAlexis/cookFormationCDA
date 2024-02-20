const addRecipesToDatabase = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Failed to add recipes to database");
    }

    console.log("Recipes added to database successfully");
  } catch (error) {
    console.error(error);
  }
};

export default addRecipesToDatabase;
