import React from 'react';

import { StatusBar } from 'react-native';

import { Metrics } from '~/themes';

import styled from 'styled-components/native';

const Container = styled.View`
	align-items: center;
	flex: 1;
	background: #222222;
`;

const FileName = styled.Text`
	font-weight: bold;
	margin-top: 5;
	color: #ddd;
	font-size: 14;
	text-align: center;
`;

const Logo = styled.Image`
	height: ${Metrics.size(170)}px;
	width: ${Metrics.size(200)}px;
	margin-top: ${Metrics.size(100)};
	margin-bottom: ${Metrics.size(100)};
	background: black;
`;

const Instructions = styled.Text`
	color: #ddd;
	font-size: 14;
	margin-top: 20;
	text-align: center;
`;

const Welcome = styled.Text`
	color: #fff;
	font-size: 22;
	font-weight: bold;
	text-align: center;
`;

const UserScreen = () => (
	<Container>
		<StatusBar barStyle="light-content" backgroundColor="#222222" />
		<Logo
			source={{
				uri: 'https://i.imgur.com/vD9SG4x.png',
			}}
		/>
		<Welcome>Bem-vindo ao Template Redux!</Welcome>
		<Instructions>Essa é a tela principal da sua aplicação ;D</Instructions>
		<Instructions>Você pode editar a tela no arquivo:</Instructions>
		<FileName>src/modules/user/screens/UserScreen/index.js</FileName>
	</Container>
);

export default UserScreen;
