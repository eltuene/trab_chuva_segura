import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled.ScrollView`
`;

export const FormArea = styled.View`
  padding: 18px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const HeaderContainer = styled.View`
  background: #68B2F8;
  padding: 40px 45px;
  elevation: 5;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 12px 0;
  margin-bottom: 5px;
  color: #fff; /* Cor de texto padrão */
`;

export const InputContainer = styled.View`
  margin-bottom: 8px;
  margin-top: 8px;
`;
export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%; 
  justify-content: center;
  align-items: center;
`;


export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #000; /* Cor de texto padrão */
`;

export const ErrorText = styled.Text`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #68B2F8;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Message = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4%;
`;

export const LoginMessage = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 4%;
`;
