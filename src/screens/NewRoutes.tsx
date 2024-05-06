import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

//componets
import {TextInputcus} from '../../componets/INPUT/TextInput';
import {CText} from '../../componets/Text/CustomText';

//styles
import {GlobalStyles} from '../GlobalStyles';
import CButton from '../../componets/Button/CButton';

const initialstate = {
  storeName: '',
  codeName: '',
  location: '',
  phoneNumber: '',
};

export const NewRoutes = () => {
  const [route, setRoute] = useState(initialstate);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handleChangeText = (name: string, value: string) => {
    setRoute({...route, [name]: value});
    console.log(route);
  };

  return (
    <ScrollView style={GlobalStyles.container}>
      <CText color="black" text="nombre del negocio" />
      <TextInputcus
        mode="outlined"
        label="nombre del negocio"
        onChange={value => {
          handleChangeText('storeName', value);
        }}
      />
      <CText color="black" text="nombre clave" />
      <TextInputcus
        mode="outlined"
        onChange={value => {
          handleChangeText('codeName', value);
        }}
      />
      <CText color="black" text="ubicacion" />
      <TextInputcus
        mode="outlined"
        onChange={value => {
          handleChangeText('location', value);
        }}
      />
      <CText color="black" text="numero de telefono" />
      <TextInputcus
        mode="outlined"
        keyboardType="numeric"
        onChange={value => {
          handleChangeText('phoneNumber', value);
        }}
      />
      <View style={{padding: 10}}>
        <CButton
          mode="outlined"
          textColor="white"
          text="Guardar"
          dark={false}
          onPress={() => {}}
          buttonColor="#006d77"
          rippleColor={'#6a994e'}
        />
      </View>
    </ScrollView>
  );
};
