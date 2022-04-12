import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import MealItem from "./MealItem";

function MealsList({ items, catId }) {
  function renderMealItem({ item }) {
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    const catColor = catId
      ? CATEGORIES.find((mealItem) => mealItem.id === catId).color
      : "#D4AF37";

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
        data={items}
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

export default MealsList;
