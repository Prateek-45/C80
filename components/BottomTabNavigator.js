import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import { TabBarIOSItem } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screensOptions={({ route })} => ({
            TabBarIcon: ({ focused , clolor , size  }) => {

              if(route.name ===  "Transaction") {
                IconName = "book"
              }else if {route.name === "Search"{
                IconName = "Search"
              }
              return(
                <Ionicons
                name={IconName}
                size={size}
                color={color}
                size={size}
                />
              );
              }
            }})>
          tabBarOption = {{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style:{
              height: 130,
              borderTopWidth:0,
              backgroundColor: "#5653d4",
            },
            labelStyle:{
              fontSize:
            }
          }

          }
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
