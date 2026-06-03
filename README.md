# Dev Link

Aplicação front-end desenvolvida com React, TypeScript, Vite e Tailwind CSS para gerenciar links e páginas protegidas usando autenticação Firebase.

## Descrição

Este projeto é uma interface moderna para cadastro e acesso de links, com rotas públicas e privadas. O usuário pode acessar páginas públicas como Home e Login, e páginas privadas como Admin e Social somente após autenticação.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Firebase Authentication
- Firebase Firestore
- React Icons
- ESLint

## Funcionalidades

- Roteamento com `react-router-dom`
- Rotas públicas: `/` e `/login`
- Rotas privadas protegidas: `/admin` e `/admin/social`
- Autenticação Firebase com monitoramento de estado do usuário
- Configuração de Firebase em `src/services/firebaseConnection.ts`
- Redirecionamento automático para `/login` quando usuário não autenticado

## Estrutura principal

- `src/App.tsx` - configuração do roteador do aplicativo
- `src/main.tsx` - ponto de entrada do React
- `src/routes/PrivateRoutes.tsx` - validação de rotas privadas
- `src/services/firebaseConnection.ts` - inicialização do Firebase
- `src/pages/` - páginas do aplicativo
- `src/components/` - componentes reutilizáveis

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Observações

- A aplicação carrega as credenciais do Firebase de variáveis de ambiente.
- Crie um arquivo `.env` com as chaves abaixo ou copie `.env.example`.
- Não versionize o `.env`; ele já está incluído em `.gitignore`.

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Licença

Este projeto está disponível sob a licença do autor.
