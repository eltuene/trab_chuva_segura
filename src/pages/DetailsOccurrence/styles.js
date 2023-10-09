import styled from 'styled-components/native';
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ScrollViewContent = styled(ScrollView)`
  margin-top: 12%;
`;

export const Card = styled.View`
  background-color: rgba(255, 255, 255, 0.09);
  border-radius: 8px;
  elevation: 4;
  margin-top: 10%;
  margin-bottom: 24px;
  padding-bottom: 20%;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 10;
  height: 540px;
  width: 90%;
  justify-content: center;
  align-content: center;
`;

export const PerfilImage = styled.Image`
  width: 130px;
  height: 130px;
  align-self: center;
  border-radius: 70px;
`;

export const Label = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
  color: #000;
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 18px;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  width: 240px;
  padding: 16px;
  border-radius: 12px;
  background-color: #3b3dbf;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const Titulo = styled.Text`
  font-size: 32px;
  text-align: center;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const BotaoTexto = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #3b3dbf;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
