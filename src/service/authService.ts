import {AuthData} from '../contexts/Auth';
/*
Aqui podemo inserir qualquer tipo de provider 
Exemplos; Aws Cognito - Firebase Auth 
*/
const signIn = (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123') {
        resolve({
          token: JWTTokenMock,
          email: email,
          name: 'oliver',
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'kx1Y2FzIEdhcmNleiIsImlhdufxf10s55aswfsz63sdrgsdrfh216xsd0gtsedtgk2hjkFe2sjhcvfukzKiGe9G5Njoa64';
