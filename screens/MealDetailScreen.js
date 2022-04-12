import { StatusBar } from "expo-status-bar";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import { FavouritesConext } from "../store/context/favourite-context";

function MealDetailScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavouritesConext);

  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  const catColor = route.params.catColor;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function headerButtonPressHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  // Execute all before the component render
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerStyle: { backgroundColor: catColor },
      headerTintColor: "#000000",
      headerRight: () => (
        <IconButton
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="#000"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [mealTitle, catColor, headerButtonPressHandler, navigation]);

  return (
    <ScrollView style={styles.rootContaienr}>
      <StatusBar style="dark" />

      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetail
        textStyle={styles.detailTex}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle color={catColor}>Ingredient</Subtitle>
          <List color={catColor} data={selectedMeal.ingredients} />

          <Subtitle color={catColor}>Steps</Subtitle>
          <List color={catColor} data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContaienr: {
    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#FFFFFF",
  },

  detailTex: {
    color: "#FFFFFF",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
