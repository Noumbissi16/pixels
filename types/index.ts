import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: { title?: string };
  Portfolio: PersonData;
  Photo: Photo;
  FAQ: { title?: string };
  Selected: { title?: string };
};

export type Photo = {
  id: number;
  url: string;
  title: string;
  photodesc: string;
};
export interface PersonData {
  id: string;
  name: string;
  desc: string;
  country: string;
  favColor: string;
  totalImg: number;
  img: string;
  photos: Photo[];
  category: string;
}

export type StackParams = {
  Portfolio: PersonData;
};

export type PortfolioScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Portfolio">;
  route: RouteProp<RootStackParamList, "Portfolio">;
};

export type HomeScreenNavigation = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  route: RouteProp<RootStackParamList, "Home">;
};

export type PhotoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Photo">;
  route: RouteProp<RootStackParamList, "Photo">;
};
export type FAQScreenNavigation = {
  navigation: StackNavigationProp<RootStackParamList, "FAQ">;
  route: RouteProp<RootStackParamList, "FAQ">;
};
export type SelectedScreenNavigation = {
  navigation: StackNavigationProp<RootStackParamList, "Selected">;
  route: RouteProp<RootStackParamList, "Selected">;
};

export type PressableProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  route?: RouteProp<RootStackParamList, "Home">;
  item: PersonData;
};

export type AppAction = {
  type: string;
  payload?: any;
};

export type AppState = {
  users: PersonData[];
  selectedUsers: PersonData[];
  selectedCategories: PersonData[];
};

export type appSetting = {
  paysagesNaturels: boolean;
  artAbstrait: boolean;
  natureVintage: boolean;
  urbainEnchanter: boolean;
};
