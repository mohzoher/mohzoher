import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeTest from "./WelcomeTest";
import SubscribeTest from "./SubscribeTest";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeTest} />
            <Stack.Screen name="Subscribe" component={SubscribeTest} />
        </Stack.Navigator>
    )
}

export default RootNavigator;