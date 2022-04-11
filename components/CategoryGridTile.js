import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { shadowColor: color }]}>
      <Pressable
        android_ripple={{ color: "#d3d3d3" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 25,
    elevation: 4,
    backgroundColor: "#333333",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.65,
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
