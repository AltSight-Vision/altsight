# AltSight · Visão Computacional

Front-end desenvolvido em React com TypeScript, voltado para soluções de visão computacional no setor agrotech. O projeto é hospedado no Firebase Hosting e utiliza Firebase CLI para deploy.

---

## O que você precisa instalar

1. **Node.js 22.18**  
   É obrigatório usar essa versão. Versões diferentes podem causar falhas no build.  
   Baixe em: https://nodejs.org/

2. **Firebase CLI**  
   Instale globalmente com o comando:
   ```bash
   npm install -g firebase-tools
   ```

3. Acesso ao projeto Firebase da Altsight  
   Você precisa estar com permissão no projeto Firebase. Caso contrário, peça ao time para adicionar sua conta.

---

## Como rodar localmente

Passos para configurar e executar o projeto:

```bash
git clone https://github.com/notNilton/altsight-landingpage.git
cd altsight

npm install

npm run dev
```

O servidor de desenvolvimento será iniciado. Acesse no navegador: `http://localhost:5173`

---

## Como fazer deploy

Antes de fazer deploy, é obrigatório estar logado com uma conta autorizada no projeto Firebase.

### 1. Faça login no Firebase CLI
```bash
firebase login
```
Use uma conta que tenha acesso ao projeto Altsight.

### 2. Crie um .env copiando do .env.example

Copie do SDK do firebase console as informações necessárias para o .env, por exemplo:

```env
VITE_FIREBASE_API_KEY=AIzaSyDxMp5m1234567890AbCdEfGhIjKlMnOpQ
VITE_FIREBASE_AUTH_DOMAIN=altsight-dev-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=altsight-dev-12345
VITE_FIREBASE_STORAGE_BUCKET=altsight-dev-12345.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=20345678901
VITE_FIREBASE_APP_ID=1:20345678901:web:c7d6e5f4a3b2c1d0e9f8a7b6
```


### 3. Execute o deploy
```bash
npm run deploy
```

Esse comando executa:
- `npm run build`: gera os arquivos estáticos na pasta `dist`
- `firebase deploy --only hosting`: envia os arquivos para o Firebase Hosting

---

## Estrutura básica

- `src/` – código-fonte da aplicação (React + TypeScript)
- `dist/` – pasta gerada pelo build (não deve ser commitada)
- `firebase.json` – configuração do Firebase Hosting (modifique apenas com autorização)

---

## Scripts disponíveis

| Comando         | Descrição                                  |
|-----------------|--------------------------------------------|
| npm run dev     | Inicia o servidor de desenvolvimento       |
| npm run build   | Gera a versão de produção                  |
| npm run serve   | Serve localmente a versão de produção      |
| npm run lint    | Executa análise de código (ESLint)         |
| npm run deploy  | Faz build e envia para o Firebase Hosting  |

---

## Regras para contribuição

- Não altere `firebase.json` sem consultar o gerenciador do sistema.
- Nunca adicione `node_modules` ou `dist/` ao controle de versão.
- Qualquer mudança em `master` deve ser feita via Pull Request.
- Teste localmente antes de submeter código.
- Se o deploy falhar, avise imediatamente o gerenciador do sistema.