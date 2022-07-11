import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './src/screens/HomeScreen'
import { TouchableOpacity, Share } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator()
const onShare = async () => {
  // try {
  //   const result = await Share.share({
  //    title: 'Resumers On Web',
  //     // message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
  //     // url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
  //   });
  //   if (result.action === Share.sharedAction) {
  //     if (result.activityType) {
  //       // shared with activity type of result.activityType
  //     } else {
  //       // shared
  //     }
  //   } else if (result.action === Share.dismissedAction) {
  //     // dismissed
  //   }
  // } catch (error) {
  //   alert(error.message);
  // }
  alert("function under development")
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profile" 
          component={HomeScreen} 
          options={{
            title: "My Profile",
            headerTitleAlign: "center",
            headerTitleStyle:{
              color: "white",
            },
            headerStyle:{
              backgroundColor: "gray",
            },
            headerRight: () => {
              return (
                <TouchableOpacity onPress={onShare}>
                  <Icon name="share-2" size={25} color="white" style={{ marginRight: 20}} />
                </TouchableOpacity>
              )
            },
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={onShare}>
                  <Icon name="menu" size={25} color="white" style={{ marginLeft: 20}} />
                </TouchableOpacity>
              )
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}