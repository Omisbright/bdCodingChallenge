import React, {useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, Pressable, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {getAllDogs, favouriteDog} from '../state-management/actions';
import { EvilIcons, AntDesign } from '@expo/vector-icons'; 
import { useFocusEffect } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

console.log("width", width/10)
console.log("height", height/21.6)

const Home = ({navigation}) => {

const dispatch = useDispatch();

useFocusEffect(
    React.useCallback(() => {
        dispatch(getAllDogs());
    }, [navigation])
)
const { allDogs } = useSelector((state) => state.dogs)
const { loading } = useSelector((state) => state.dogs)

const DogCase = ({item}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Image
                    style={styles.dogImage}
                    source={{ uri: item.image.url}}
                />
                <Text>
                    {item.name}
                </Text>
            </View>

            <Pressable onPress={() => favouriteDog(item.id)}>
                {({pressed}) => ( <AntDesign name="hearto" size={24} color= {pressed ? "red" : "grey"} />)}
            </Pressable>
        </View>
    )
}

return (
    <View
        style={{
            backgroundColor: "#fff",
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
            All Dogs
        </Text>

        <FlatList 
            data={allDogs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <DogCase item={item} />
            )}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={() => dispatch(getAllDogs())}/>}
        />
    </View>
);
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        alignItems: "center",
        marginVertical: 10
    },

    description: {
        flexDirection: "row",
        alignItems: "center"
    },

    dogImage: {
        width: width/10,
        height: height/21.6,
        marginRight: 20,
        borderRadius: 10
      },
});
