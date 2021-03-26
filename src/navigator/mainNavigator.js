import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import CopyOfArticleList218750Navigator from '../features/CopyOfArticleList218750/navigator';
import ArticleList218717Navigator from '../features/ArticleList218717/navigator';
import ArticleList218716Navigator from '../features/ArticleList218716/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
CopyOfArticleList218750: { screen: CopyOfArticleList218750Navigator },
ArticleList218717: { screen: ArticleList218717Navigator },
ArticleList218716: { screen: ArticleList218716Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
