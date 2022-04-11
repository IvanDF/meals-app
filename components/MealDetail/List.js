import { Text, View, StyleSheet } from "react-native";

function List({ data, color }) {
  return data.map((dataPoint) => (
    <View style={[styles.listItem, { backgroundColor: color }]} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 25,
  },

  itemText: {
    color: "#333333",
    textAlign: "center",
  },
});

export default List;
