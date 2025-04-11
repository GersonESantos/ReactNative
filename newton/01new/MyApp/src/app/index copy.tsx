import { View, Text, StyleSheet, Image, Pressable } from "react-native";
export default function Index() {
    return (
        <View style={styles.container}>
            <View>
            <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        </View>
        <View>
                <Text >20:00</Text>
            </View>
            <View>
            <Text>Ola Yt01</Text>
            </View>

            
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         padding: 32    
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    });