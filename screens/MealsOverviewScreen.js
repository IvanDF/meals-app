import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute(); it can possbile to use route globally as hook
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

  function renderMealItem({ item }) {
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    const catColor = CATEGORIES.find((mealItem) => mealItem.id === catId).color;

    const mealItemProps = {
      id: id,
      title: title,
      imageUrl: imageUrl,
      duration: duration,
      complexity: complexity,
      affordability: affordability,
      catColor: catColor,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default MealsOverviewScreen;
