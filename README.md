# Repo simples para testar conceitos PWA 


# Digital Asset Links

````
Mecanismo usado para estabelecer uma confiança recíproca entre um aplicativo Android e um site web.

Este mecanismo é essencial para funcionalidades como o Trusted Web Activity (TWA), 
que permite que aplicativos Android exibam conteúdo da web em tela cheia sem a interface do navegador, 
proporcionando uma experiência mais integrada e nativa.

````

### Como Funciona o Digital Asset Links
````
Digital Asset Links permite que você prove que duas entidades digitais 
(como um aplicativo Android e um site web) são de confiança mútua. Isso é
feito por meio de um arquivo JSON (assetlinks.json) que é hospedado no servidor
web e contém informações de verificação.
````

### Estrutura do Arquivo assetlinks.json
````
O arquivo assetlinks.json é um JSON que declara quais aplicativos Android
têm permissão para interagir com o site. Aqui está um exemplo de como o
arquivo pode ser: 
````

```JS

[{
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
        "namespace": "android_app",
        "package_name": "com.seu.pwa",
        "sha256_cert_fingerprints": [
            "AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90"
        ]
    }
}]

```

### Componentes do Arquivo assetlinks.json

`relation:` Define o tipo de permissão. delegate_permission/common.handle_all_urls é usado para indicar que o aplicativo pode abrir URLs que pertencem ao site.

`namespace:` Define o namespace da entidade alvo. Para aplicativos Android, isso será sempre android_app.

`package_name:` O nome do pacote do aplicativo Android que está sendo vinculado.

`sha256_cert_fingerprints:` Uma lista de impressões digitais SHA-256 dos certificados usados para assinar o aplicativo Android. Isso garante que apenas a versão correta e assinada do aplicativo é confiável.

### Por Que Usar Digital Asset Links?

`Segurança:` Garante que apenas aplicativos legítimos possam reivindicar associações com seu site.

`Experiência do Usuário:` Permite uma integração perfeita entre o aplicativo e o site, como é o
caso das Trusted Web Activities (TWA).

`Confiabilidade:` Ajuda a evitar ataques de phishing e outros problemas de segurança,
verificando que a entidade digital (aplicativo ou site) é de confiança.

### Android



### Passos para Configuração

1 - Gerar a Impressão Digital SHA-256:

````
Você pode obter a impressão digital SHA-256 do certificado de assinatura do 
seu aplicativo usando o comando keytool:

keytool -list -v -keystore <path-to-keystore> -alias <key-alias> -storepass <store-password> -keypass <key-password>
````

````
keytool -genkeypair -v -keystore chico-coin.keystore -alias chico-coin-alias -keyalg RSA -keysize 2048 -validity 10000


keytool -list -v -keystore chico-coin.keystore -alias chico-coin-alias -storepass 123456789 -keypass 123456789

````

2 - Criar e Hospedar o Arquivo assetlinks.json:

````
Crie um arquivo chamado assetlinks.json com o conteúdo necessário e
hospede-o no seu servidor web na URL https://seu-pwa.com/.well-known/assetlinks.json.
````

3 - Verificar a Configuração:

````
Use ferramentas como o "Google's Digital Asset Links API" para verificar se o arquivo está acessível e corretamente configurado.
````