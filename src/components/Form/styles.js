import styled from 'styled-components/native';

export const Container = styled.View`
    background: #999;
`;

export const Input = styled.TextInput`
    width: auto;
    height: 50px;
    background: #fff;
    font-size: 30px;
    padding: 10px 20px;
    margin: 10px;
    border-color: rgba(255,255,255,0.9);
    border-width: 1px;
    border-radius: 25px;
    elevation: 10px;

`;
export const Button = styled.TouchableOpacity`
    background: #fff;
    height: 50px;
    margin: 10px;
    border-color: rgba(255,255,255,0.9);
    border-width: 1px;
    border-style: dotted;
    border-radius: 25px;
    elevation: 10px;

    justify-content: center;
    align-items: center;
    

`;
export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
`