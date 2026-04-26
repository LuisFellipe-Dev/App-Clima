# App do Clima

Deploy: [project-weathers.netlify.app](https://project-weathers.netlify.app/)

Plataforma de monitoramento meteorológico global que fornece dados em tempo real para auxiliar no planejamento estratégico e na prevenção de incidentes climáticos.

## ✨ Funcionalidades
- 🔍 Busca Dinâmica: Pesquisa instantânea de condições climáticas por nome de cidade.
- ☁️ Dados Meteorológicos: Exibição detalhada de temperatura, precipitação e velocidade do vento via OpenWeather API(Open-meteo).

## 🛠 Tecnologias
Este projeto foi construído com:
- **ReactJS (Interface)**
- **TypeScript (Tipagem e Lógica)**
- **CSS Modules (Estilização)**
- **Axios (Consumo de API)**

## 🏁 Como começar

### Pré-requisitos
Você precisará ter instalado um gerenciador de pacotes (npm, yarn ou pnpm).

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/LuisFellipe-Dev/App-Clima.git
2. Instale as dependências:
   ```bash
   npm install
3. Configure o arquivo .env:
   ```.env
   VITE_API_URL=https://api.open-meteo.com/v1/forecast
4. Inicie o servidor:
   ```bash
   npm run dev

<img width="1365" height="597" alt="image" src="https://github.com/user-attachments/assets/43927799-ddb7-479f-aef0-fbc6861328da" />

## Proximos passos
- [x]  Autocomplete na busca por cidades.
- [ ]  Transformar, por meio de API, a Cidade em sua localização geográfica(longitude e latitude).
- [ ]  Implementar a geolocalização na requisição dos dados meteorológicos.
...
---
Desenvolvido com ☕ por [Luis Fellipe](https://www.linkedin.com/in/luis-fellipe-3a0858335/)
