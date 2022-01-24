import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

// console.log("width", width/2.5)
// console.log("height", height/5.415)

const Likes = () => {

  const {favouritedDogs} = useSelector((state) => state.dogs)

  const truncateText = (str) => {
        if (str.length > 16) {
            return str.substring(0, 16) + "..."
        } else {
            return str
        }
  };

  const DogsILike = ({item}) => {
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.dogImage}
                source={{ uri: item.image.url}}
            />
            <View style={styles.description}>
                <Text style={{fontWeight: "400", fontSize: 14}}>
                    {truncateText(item.name)}
                </Text>
                <AntDesign name="heart" size={20} color="red" />
            </View>
        </View>
    )
}

  return (
    <View
        style={{
            backgroundColor: "#fff",
            flex: 1
        }}
    >
        <Text 
            style={{
                fontSize: 16, 
                marginHorizontal: 20, 
                marginVertical: 20, 
                fontWeight: "bold",
            }}
        >
            Dogs I like
        </Text>

        <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={favouritedDogs}
            renderItem={({item}) => (
                <DogsILike item={item} />
            )}
        />
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({

    container: {
        marginHorizontal: width/20,
        marginVertical: height/60,
        backgroundColor: '#fff',
    },

    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14
    },

    dogImage: {
        width: width/2.5,
        height: height/5.415,
        borderRadius: 10
      },
});
