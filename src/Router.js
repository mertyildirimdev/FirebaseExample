
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SingIn, SingUp, Posts, SavedPosts } from "./pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PostPage() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="SavedPosts" component={SavedPosts} />
        </Tab.Navigator>
    )
}


function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="SignIn" component={SingIn} options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}/>
                <Stack.Screen name="SignUp" component={SingUp} options={{
                    headerShown: false,
                }}/>
                
                <Stack.Screen name="PostPage" component={PostPage} options={{
                    headerShown: false,
                    gestureEnabled: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;