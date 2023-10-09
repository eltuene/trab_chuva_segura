import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


import TextInput from "../../components/TextInput";
import { createOccurrenceSchema } from '../../utils/createOccurrenceValidation';
import api from '../../services/api';
import { Container, Header, FormArea, InputContainer, Label, ScrollViewContent, Button, ButtonText, Message, HeaderContainer, ButtonsContainer } from './styles';
import CategoryPicker from "../../components/CategoryPicker";
import RiskLevelPicker from "../../components/RiskLevelPicker";
import StatusPicker from "../../components/StatusPicker";
import LocationPicker from "../../components/Location";

export default function CreateOccurrence() {
  const navigation = useNavigation();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      risk_level: 1,
      status: "",
      id_user: "",
      latitude: "-29.71143880",
      longitude: "-53.77776160",
      image: "",
      trust_level: null,
    },
    resolver: yupResolver(createOccurrenceSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      const dataApi = {
        title: data.title,
        description: data.description,
        category: data.category,
        risk_level: data.risk_level,
        status: data.status,
        id_user: data.id_user,
        latitude: data.latitude,
        longitude: data.longitude,
        image: data.image,
        trust_level: data.trust_level,
      };
      console.log(dataApi);

      const token = await AsyncStorage.getItem('@authToken');

      // Envie os dados para a API
      await api.post('/occurrences', dataApi,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Limpe os campos após o envio bem-sucedido
      reset({
        title: "",
        description: "",
        category: "",
        risk_level: 1,
        status: "",
        id_user: "",
        latitude: "-29.71143880",
        longitude: "-53.77776160",
        image: "",
        trust_level: null,
      });
      navigation.navigate('Home')
    } catch (error) {
      // Lide com erros de envio para a API aqui
      console.error("Erro ao enviar dados:", error.message);
    }
  }

  return (
    <Container>
      <ScrollViewContent>
        <HeaderContainer>
          <Header>Criar Ocorrência</Header>
          <Message>Insira os seus dados</Message>
        </HeaderContainer>
        <FormArea>
          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>TÍTULO</Label>
                  <TextInput
                    name="title"
                    placeholder="DIGITE O TÍTULO"
                    onChange={onChange}
                    value={value}
                    error={errors.title}
                  />
                </>
              )}
              name="title"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>DESCRIÇÃO</Label>
                  <TextInput
                    name="description"
                    placeholder="ESCREVA UM BREVE RESUMO"
                    onChange={onChange}
                    value={value}
                    error={errors.description}
                  />
                </>
              )}
              name="description"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>CATEGORIA</Label>
                  <CategoryPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    errors={errors}
                  />
                </>
              )}
              name="category"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>NÍVEL DE RISCO</Label>
                  <RiskLevelPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    errors={errors}
                  />
                </>
              )}
              name="risk_level"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>STATUS</Label>
                  <StatusPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    errors={errors}
                  />
                </>
              )}
              name="status"
            />
          </InputContainer>
          <InputContainer>
            <Label>LOCALIZAÇÃO</Label>
            <LocationPicker />
          </InputContainer>
        </FormArea>
        <ButtonsContainer>
          <Button onPress={handleSubmit(onSubmit)}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Lista de Ocorrências</ButtonText>
          </Button>
        </ButtonsContainer>

      </ScrollViewContent>
    </Container>
  );
}