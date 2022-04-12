import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "../MealDetail";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  catColor,
}) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
      mealTitle: title,
      catColor: catColor,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#DDDDDD" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowOpacity: 0.35,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.45,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
});

export default MealItem;
