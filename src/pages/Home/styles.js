import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%; /* Corrija o valor para ser sem as aspas */
  background-color: #F0F4FF;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #68B2F8;
  padding: 2% 5%;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 66px;
  align-self: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4%;
`;

export const Warning = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #000;
`;

export const Separator = styled.View`
  width: 10px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-top: 8%;
  margin-bottom: 2%;
`;

export const List = styled.FlatList`
  flex: 1; 
  width: 95%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #68B2F8;
  border: 1px solid #fff;
  border-radius: 3px;  
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  padding: 3px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
