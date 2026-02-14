# 🐱 MEOW - Aplicativo de Aprendizado e Cultura

MEOW é um aplicativo web interativo que combina aprendizado bíblico e leitura de poesias em uma experiência única e educativa.

## 📱 O que é o MEOW?

O MEOW é um **aplicativo** (como os apps do celular) que tem duas partes principais:

### 1. 🎮 CatMeow - O Jogo de Perguntas

Imagine um quiz sobre a Bíblia! Funciona assim:

- Você responde perguntas sobre a Bíblia
- Se acertar, ganha **XP** (pontos de experiência)
- Quanto mais XP, maior seu **nível**
- Acertando em sequência, ganha **bônus**!

**Características:**
- Sistema de níveis progressivos
- Bônus de XP por sequência de acertos (streak)
- 15 perguntas bíblicas diversas
- Interface intuitiva e responsiva

### 2. 📚 CatVerso - O Leitor de Poesias

É como um livro digital com poesias e textos bonitos!

- Você pode ler poesias inspiradoras
- Escutar as poesias com síntese de voz (Text-to-Speech)
- Conteúdo baseado em textos bíblicos e reflexivos

**Conteúdo disponível:**
- Salmo 23
- 1 Coríntios 13 (O Amor)
- As Bem-Aventuranças (Mateus 5)
- Eclesiastes 3 (Tudo Tem o Seu Tempo)
- Salmo 27 (O Senhor é Minha Luz)

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web moderno
2. Escolha uma das opções no menu principal:
   - **🏠 Início**: Tela de boas-vindas
   - **🎮 CatMeow**: Jogo de perguntas bíblicas
   - **📚 CatVerso**: Leitor de poesias

### CatMeow - Jogando

1. Clique em "CatMeow" no menu ou no card na tela inicial
2. Leia a pergunta apresentada
3. Clique em uma das respostas
4. Veja seu XP aumentar se acertar!
5. Acerte várias seguidas para ganhar bônus de streak
6. Use "Próxima Pergunta" para continuar
7. Acompanhe seu progresso na barra de status (Nível, XP, Sequência)

### CatVerso - Lendo Poesias

1. Clique em "CatVerso" no menu ou no card na tela inicial
2. Escolha uma poesia da lista
3. Leia o conteúdo completo
4. Clique em "🔊 Escutar" para ouvir a poesia em voz alta
5. Use "⏹ Parar" para interromper a leitura
6. Clique em "← Voltar" para voltar à lista

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização com gradientes e animações
- **JavaScript**: Lógica do jogo e interatividade
- **Web Speech API**: Síntese de voz para leitura das poesias

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Para a funcionalidade de áudio, o navegador deve suportar Web Speech API

## 🎯 Características Técnicas

### Sistema de Progressão (CatMeow)
- XP inicial necessário: 100 XP por nível
- XP ganho por resposta correta: 10 XP base
- Bônus de streak: +2 XP por cada acerto na sequência (a partir de 3 acertos)
- Aumento de dificuldade: Cada nível requer 50% mais XP que o anterior

### Sistema de Áudio (CatVerso)
- Síntese de voz em Português Brasileiro (pt-BR)
- Taxa de fala ajustada para melhor compreensão
- Controles de play/stop
- Compatível com a maioria dos navegadores modernos

## 🌟 Próximas Melhorias

- [ ] Adicionar mais perguntas ao banco de dados
- [ ] Sistema de conquistas (achievements)
- [ ] Ranking de pontuação
- [ ] Mais poesias e textos
- [ ] Modo offline com Service Workers
- [ ] Temas personalizáveis
- [ ] Salvamento de progresso no localStorage

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com 💜 para aprendizado e cultura

---

**Divirta-se aprendendo e lendo com MEOW!** 🐱