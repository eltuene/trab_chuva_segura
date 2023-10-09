import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Botao,
  BotaoTexto,
  Card,
  ColorText,
  Description,
  SubTitleContainer,
  TitleContainer,
  Titulo,
  SubTitulo,
  Separator
} from './styles';

export default function OccurrencesList({ data }) {
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("DetailsOccurrence", { id: data.id });
  }
  const dateObj = new Date(data.created_at);

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses começam em 0
  const year = dateObj.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <Card>
      <TitleContainer>
        <Titulo>{data.title}</Titulo>
        <Titulo>{formattedDate}</Titulo>
      </TitleContainer>
      <Separator/>
      <Description>{data.description}</Description>
      <Separator/>
      <TitleContainer>
        <SubTitleContainer>
          <SubTitulo>Categoria</SubTitulo>
          <ColorText>{data.category}</ColorText>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubTitulo>Nível de Risco</SubTitulo>
          <ColorText>{data.risk_level}</ColorText>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubTitulo>Status</SubTitulo>
          <ColorText>{data.status}</ColorText>
        </SubTitleContainer>
      </TitleContainer>
      <Separator/>
      <SubTitulo>Cidade: Santa Maria</SubTitulo>
      
      <Botao onPress={handleDetails}>
        <BotaoTexto>Ver detalhes</BotaoTexto>
      </Botao>
    </Card>
  );
}
