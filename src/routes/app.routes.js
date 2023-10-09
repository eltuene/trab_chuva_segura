import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import DetailsOccurrence from '../pages/DetailsOccurrence';
import CreateOccurrence from '../pages/CreateOccurrence';


const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateUser"
                component={CreateUser}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="DetailsOccurrence"
                component={DetailsOccurrence}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateOccurrence"
                component={CreateOccurrence}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;