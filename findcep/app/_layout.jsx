import { Stack } from "expo-router";

export default function RootLayout() {

  //Metodo da professora
  // return(
  // <Stack>
  //   <Stack.Screen name="index" options={{title: '', headerTransparent: true, headerShown:false}}/>
  // </Stack>
  // )

  //metodo dos Guri
  return <Stack screenOptions={{ headerShown: false }} />;
}
