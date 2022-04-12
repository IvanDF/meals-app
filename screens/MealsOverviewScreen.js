import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const catTitle = CATEGORIES.find((mealItem) => mealItem.id === catId).title;
  const catColor = CATEGORIES.find((mealItem) => mealItem.id === catId).color;

  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  // Execute all before the component render
  useLayoutEffect(() => {
    navigation.setOptions({
      title: catTitle,
      cardStyle: { backgroundColor: catColor },
    });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} catId={catId} />;
}

export default MealsOverviewScreen;
