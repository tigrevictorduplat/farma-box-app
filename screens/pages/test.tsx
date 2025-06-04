import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../index';

const TestStack = createStackNavigator();

export default function TestAppNavigator() {
  return (
    <NavigationContainer>
      {/* ALtere o initialRouteName para a tela que você quer testar primeiro */}
      <TestStack.Navigator initialRouteName="Home"> 
        {/* Telas que não precisam de params podem ser listadas como estão */}
        <TestStack.Screen name="Home" component={Screens.Home} options={{ headerShown: false }} />
        <TestStack.Screen name="Explore" component={Screens.Explore} options={{ headerShown: false }} />
        <TestStack.Screen name="Upload" component={Screens.Upload} options={{ headerShown: false }} />
        <TestStack.Screen name="Profile" component={Screens.Profile} options={{ headerShown: false }} />
        <TestStack.Screen name="Wellcome" component={Screens.Wellcome} options={{ headerShown: false }} />
        <TestStack.Screen name="LogIn" component={Screens.LogIn} options={{ headerShown: false }} />
        <TestStack.Screen name="Register" component={Screens.Register} options={{ headerShown: false }} />
        
        {/* Telas que precisam de PARAMS - Adicione initialParams */}
        <TestStack.Screen
          name="Quiz"
          component={Screens.Quiz}
          options={{ headerShown: false }}
          initialParams={{ 
            user: { // Mock de dados para 'user' conforme RegisterFormData
              email: 'teste@example.com', 
              password: 'Password123!', 
              username: 'testuser', 
              confirmPassword: 'Password123!' 
            } 
          }}
        />
        <TestStack.Screen
          name='QuizzResult'
          component={Screens.QuizzResult}
          options={{ headerShown: false }}
          initialParams={{ 
            score: 3 // Mock de dados para 'score'
          }}
        />
        <TestStack.Screen
          name="PostDetails"
          component={Screens.PostDetails}
          options={{ headerShown: false }}
          initialParams={{ // Mock de dados para PostDetails
            id: 1, 
            imageUrl: 'https://via.placeholder.com/150', // Imagem de placeholder
            titulo: 'Título do Post Teste', 
            conteudo: 'Este é o conteúdo do post de teste para visualização.' 
          }}
        />
        
        {/* Continue listando as outras telas sem params se não tiverem */}
        <TestStack.Screen name="ForgotPassword" component={Screens.ForgotPassword} options={{ headerShown: false }} />
        <TestStack.Screen name="PrivacyPolicy" component={Screens.PrivacyPolicy} options={{ headerShown: false }} />
        <TestStack.Screen name="UserDetail" component={Screens.UserDetail} options={{ headerShown: false }} />
        <TestStack.Screen name="MoreOptions" component={Screens.MoreOptions} options={{ headerShown: false }} />
        <TestStack.Screen name="PersonalData" component={Screens.PersonalData} options={{ headerShown: false }} />
        <TestStack.Screen name="ChangeName" component={Screens.ChangeNameScreen} options={{ headerShown: false }} />
        <TestStack.Screen name="ChangeUsername" component={Screens.ChangeUsernameScreen} options={{ headerShown: false }} />
        <TestStack.Screen name="ChangeEmail" component={Screens.ChangeEmailScreen} options={{ headerShown: false }} />
        <TestStack.Screen name="ChangePassword" component={Screens.ChangePasswordScreen} options={{ headerShown: false }} />
        <TestStack.Screen name="ChangeTelephone" component={Screens.ChangeTelephoneScreen} options={{ headerShown: false }} />
        <TestStack.Screen name="Sobre" component={Screens.Sobre} options={{ headerShown: false }} />
        <TestStack.Screen name="Help" component={Screens.Help} options={{ headerShown: false }} />
        <TestStack.Screen name="Notifications" component={Screens.Notifications} options={{ headerShown: false }} />
        <TestStack.Screen name="Settings" component={Screens.Settings} options={{ headerShown: false }} />
        <TestStack.Screen name="LogOut" component={Screens.LogOut} options={{ headerShown: false }} />

      </TestStack.Navigator>
    </NavigationContainer>
  );
}