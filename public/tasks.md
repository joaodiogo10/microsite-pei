# Weekly log 3 (16/05):
## Ana:
## André:
- Refactor do codigo de backend
## Gil:
## João:
# Weekly log 3 (9/05):
## Ana:
- Criação de popups para as DENMs
## André:
- Bug corrigido na camada de tradução do broker
- Alteraçao na app para aceitar perceived objects em cm
- Documentação da API
- Implementação e deploy de um mock da API
- Mock broker para funcionar dentro da UA
- Criação de uma camada de compatibilidade com msSQL e mySQL
## Gil:
## João:
- Suporte a VAMs adicionado
- Alteração na unidade de medida das CPMs m -> cm
- Tradução para português adicionada

# Weekly log 3 (2/05):
## Ana:
- Adição de uma tooltip no formulário da criação de DENMs
- Melhorias na interface de alertas das DENMs
- Investigação/Experiências com dashboards
## André:
- Criação do repositório de backend
- Teste de conceção do backend à base de dados
- Increased security on central broker (user and password)
- Minor bug fixes on RSU code (units changed from meters to cm)
- Minor bug fix on frontend (babel)
- Minor bug fix on translation layer (reconnect to uper broker when network fails, some exceptions handled)
## Gil:
- Adição de uma páagina de demos ao micro-site
- Teste de conceção com o broker no backend
- Mapeamento do DER num ER
- Criação da estrutura da base de dados
## João:
- Adição de um pinpoint na criação de DENMs
- Validação dos campos no formulário da criação de DENMs
- Adição de animação nas transições do mapa
- Conexão ao broker com credenciais (username password)

# Weekly log 2 (25/04):
## Ana:
- Receção de heartbeats
- Visualização dos alertas das DENMs adicionado à sidebar
- Adicionado o método para publicar DENMs
## André:
- Heartbeats adicionados à camada de tradução
- Análise de requisitos relativa à camada de persistência da aplicação
## Gil:
- Adição de um botão de BACK ao menu das sub_causes das DENMs
- Envio de DENMs 
## João:
- Conclusão da interface para criação de DENMs na sidebar
- Conclusão da interface de informação das RSUs na sidebar
- Adicionado ao mapa coordenadas on click

# Weekly log 1 (18/04):
## Ana:
- Conclusão da navbar do site
- Receção e visualização de DENMs no mapa adicionadas ao site
## André:
- Encaminhamento de mensagens da inqueue e inter_mecs adicionado à camada de tradução
- Melhorias na performance da app
- Criação de vídeos de demonstração para M2
- Envio de VAMs adicionado à app
- Heartbeats adicionados a RSUs
## Gil:
- Suporte para interface multilingue
- Envio de CPMs
- Display simples das CPMs com markers no mapa
## João:
- Criação da sidebar para visualização e criação de eventos ao site
- Início do desenvolvimento da visualização da informação das RSUs na sidebar
- Início do desenvolvimento da interface para criação de DENMs na sidebar
- Melhorias na performance do site

# Tasks:

* [x]  Discussão sobre arquitetura - Todos

### Site
- [x]  Criar projeto e incluir a visualização de mapas - Ana e João \[21/3 - 10/4\]
- [x]  Criação API para consulta de dados em tempo real - André \[7/4 - 11/4\]
  * [x]  Ligar com o backend para visualização em tempo real da posição de veículos - Ana e João \[15/4 - 24/4\]
    * [x]  CAM - Ana \[23/4 - 1/5\]
    * [x]  CPM - João \[23/4 - 1/5\]
    * [ ]  HD-Maps - João - Optional \[23/4 - 1/5\]
  * [x]  Ligar com o backend para visualização em tempo real dos alertas rodoviários - Ana e João \[1/5 - 6/5\]
    * [x]  DENM - Ana \[6/5 - 14/5\]
    * [x]  VAM - João \[6/5 - 14/5\]
    * [ ]  IVIM - João \[6/5 - 14/5\]
    * [ ]  HD-Maps - Ana - Optional \[6/5 - 14/5\]
- [x]  Criação API para publicação de dados em tempo real - André \[16/5 - 28/5\]
  * [x]  Integração com backend para dar ao gestor do centro de controlo de tráfego a possibilidade de enviar mensagens - Ana e João \[14/5 - 20/5\]
    * [x]  DENM - Ana \[19/5 - 28/5\]
    * [ ]  IVIM - João \[19/5 - 28/5\]
    * [ ]  HD-Maps - Ana - Optional \[19/5 - 28/5\]

* [ ]  Criação base de dados de suporte à timeline - André \[10/5 - 17/5\]
  * [ ]  Criação da api para visualização da timeline de eventos na estrada - André \[16/5 - 28/5\]
    * [ ]  Consulta do estado da estrada numa timeline - Ana e João \[28/5 - 5/6\]
    * [ ]  Dashboard com informações estatísticas sobre flow de tráfego - Ana e João \[5/6 - 21/6\]
      * [ ]  Velocidade media por hora - Ana \[5/6 - 21/6\]
      * [ ]  Tipos de veículos - João \[5/6 - 21/6\]
      * [ ]  Quantidade de veículos - Ana \[5/6 - 21/6\]
* [x]  Localização do site para inglês e português - João \[28/5 - 10/6\]

### App
* [x]  Criar projeto e incluir a visualização de mapas - André \[11/4 - 7/4\]
* [x]  Criar integração do broker local com broker central - André \[11/4 - 15/4\]
  * [x]  Ligar com o backend para visualização em tempo real da posição de veículos - Gil \[15/4 - 24/4\]
    * [x]  CAM - André \[23/4 - 1/5\]
    * [x]  CPM - Gil \[23/4 - 1/5\]
  * [x]  Ligar com o backend para visualização em tempo real dos alertas rodoviários - André Gil \[1/5 - 6/5\]
    * [x]  DENM - André \[6/5 - 14/5\]
    * [ ]  IVIM - Gil \[6/5 - 14/5\]
    * [ ]  HD-Maps - Gil - Optional \[6/5 - 14/5\]
* [x]  Integração com backend para dar aos users a possibilidade de enviar mensagens - André Gil \[14/5 - 20/5\]
  * [x]  DENM - André \[19/5 - 28/5\]
  * [ ]  IVIM - Gil \[19/5 - 28/5\]
  * [x]  VAM - André - Optional \[19/5 - 28/5\]
* [x]  Criação API para consulta de dados em tempo real - André \[28/5 - 10/6\]
* [x]  Criação API para publicação de dados em tempo real - André \[28/5 - 10/6\]
  * [ ]  Modo de utilização para peões - Gil \[8/6 - 23/6\]
  * [ ]  Modo de utilização para ciclistas - Gil \[8/6 - 21/6\]
* [x]  Localização da app para inglês e português - André \[28/5 - 10/6\]
