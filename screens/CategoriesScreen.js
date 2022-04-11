import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    const { title, color, id } = item;

    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: id,
        categoryTitle: title,
        categoryColor: color,
      });
    }

    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
