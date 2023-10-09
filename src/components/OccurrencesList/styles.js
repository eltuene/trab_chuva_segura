import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #FFF;
  border: 1px solid #68B2F8;
  border-radius: 12px;
  margin: 12px;
  padding: 16px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SubTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
`;

export const Separator = styled.View`
  height: 10px;
`;

export const PerfilImage = styled.Image`
  width: 112px;
  height: 110px;
  align-self: center;
  margin-bottom: 12px;
`;

export const Titulo = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #000;
`;

export const SubTitulo = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;
export const Description = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;
export const ColorText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #68B2F8;
  border-radius: 3px;
  text-align: center;
`;

export const Botao = styled.TouchableOpacity`
  width: 30%;
  align-self: center;
  margin-top: 10px;
  background-color: #68B2F8;
  height: 22px;
  border-radius: 3px;
  padding: 3px 15px;
`;

export const BotaoTexto = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
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
