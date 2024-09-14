# Repo simples para testar conceitos PWA e TWA


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

# Android

Criar um novo projeto no Android Studio

Escolha `No Activity ` e next/proximo.

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/10142ca6-5b18-4996-97e3-eb3e4137a075)

Aqui vai as configurações do projeto dar o finish/terminar irei utilizar kotlin.

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/0e3aacc1-a3fe-431c-93e1-40c8648e4177)


Vamos iniciar os aqruivos que são `./app/build.gradle.kts` e `./app/src/main/AndroidManifest.xml`

1 - Adicionar o `./app/build.gradle.kts`

A doc sobre a lib do [mais](https://github.com/GoogleChrome/android-browser-helper?tab=readme-ov-file#adding-android-browser-helper-to-an-android-project)

```gradle
dependencies {
    //...
    implementation 'com.google.androidbrowserhelper:androidbrowserhelper:2.4.0'
}

``` 


2 - Adicionando uma nova `Activity` em `app/java/com.nome.seu-projeto`

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/a424e3db-ffe1-44a0-a2b2-d2ae47c27b93)

Nesse formato não gera nada de layout

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/b8ab5be9-76ce-441a-a359-86625b177bc1)


3 - App link Assistant

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/68a9b179-393d-4539-9b75-47e31b470d87)

### Criando o link para o app
![image](https://github.com/user-attachments/assets/ebe67e51-8e64-47ca-b1f5-8e21237d41de)

### Adicionar url do seu site
![image](https://github.com/user-attachments/assets/6f6c2eca-d595-49ca-9040-c1b3ebf2fa0c)

### Adicionando url do seu site
![image](https://github.com/user-attachments/assets/b507ec46-1287-4d3a-946f-fd8d69f98b08)


4 - Irá adicionar o `./app/src/main/AndroidManifest.xml`

```xml
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
        
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
        
                <data android:scheme="http" />
                <data android:host="teste-twa-pwa.vercel.app" />
            </intent-filter>
```

```
Irá criar um intent é um objeto que representa uma "intenção" de realizar uma ação. 
Ele é usado para comunicações entre diferentes partes de um aplicativo ou até entre
aplicativos diferentes. Quando você configura um intent filter no manifesto do aplicativo, você está informando
ao sistema que sua atividade pode lidar com certas ações, como abrir uma URL ou lidar com dados específicos.
```

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/0539bf41-8101-4bf1-85c7-c7526e362d31)


5 - Add na action as configurações 

```
Quando o sistema inicia a atividade TWA através de um intent,
ele passa informações que você pode usar para personalizar o comportamento
do seu aplicativo. Adicionar lógica para tratar o intent permite que você
processe esses dados e execute uma ação específica dentro da TWA.
```
### Selcionar a Activity que foi criada nesse caso tem a ```UrlActivity```

![image](https://github.com/user-attachments/assets/0707c5a3-3572-4f10-8474-29d630cafc98)


### Irá inserir código
```kotlin
        // ATTENTION: This was auto-generated to handle app links.
        val appLinkIntent: Intent = intent
        val appLinkAction: String? = appLinkIntent.action
        val appLinkData: Uri? = appLinkIntent.data
```

![image](https://github.com/FranciscoWallison/teste-TWA-pwa/assets/19413241/b790d2bd-59ee-4d66-b52c-4b3eff5847a1)


6 - Declarar associação ao site

![image](https://github.com/user-attachments/assets/5adaf6f3-1a8b-448a-81be-f29d7a312ebb)


### Criando assetlinks.json

![image](https://github.com/user-attachments/assets/17aeebe8-b16c-42cb-91a8-b39ce5147749)

### Se estiver hospedado corretamente ```/.well-known/assetlinks.json```

![image](https://github.com/user-attachments/assets/eb322b10-9566-42f7-82ba-6a80e8492546)



### Passos para Configuração

1 - Gerar a Impressão Digital SHA-256:

````
Você pode obter a impressão digital SHA-256 do certificado de assinatura do 
seu aplicativo usando o comando keytool:

keytool -list -v -keystore <path-to-keystore> -alias <key-alias> -storepass <store-password> -keypass <key-password>
````

````
keytool -genkeypair -v -keystore chico-coin.keystore -alias chico-coin-alias -keyalg RSA -keysize 2048 -validity 10000
````

![image](https://github.com/user-attachments/assets/e55ca7b0-574b-478f-b0c8-e61023fdbb4d)

````
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



# Referencias:
[Introduction to Trusted Web Activity for Android](https://medium.com/appcent/introduction-to-trusted-web-activity-for-android-3a6d822e62ff#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzYWJlNDEzYjIyNjhhZTk3NjQ1OGM4MmMxNTE3OTU0N2U5NzUyN2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk3MjE1MTU2NTQ2NzEyMzIzNzkiLCJlbWFpbCI6ImZyYW5jaXNjb3dhbGxpc29uQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTg4MDIzNjEsIm5hbWUiOiJmcmFuY2lzY28gd2FsbGlzb24iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSzhJQ1VLU1lPUU5aVVhhNWJVWldKUXd0NUp3a3RMNl9vV1lUZzkyNy15d3RNZ083bW89czk2LWMiLCJnaXZlbl9uYW1lIjoiZnJhbmNpc2NvIiwiZmFtaWx5X25hbWUiOiJ3YWxsaXNvbiIsImlhdCI6MTcxODgwMjY2MSwiZXhwIjoxNzE4ODA2MjYxLCJqdGkiOiIxNTNlYWU1YmE0NWUyOWJlZTEyZWMxN2IwOTE5YTExODU1YmM4YmM0In0.pmlc-Tr6pycyaBRxMYO7laTNBsBHGWRokXErgosyocTfNU9SEsDlc6RFWVbJXcj430LUVoWEUbYEuvLnBleYgLflGk5tTtBrritgxgVApQxX5o31EJXBLJzueQLP6G_KGJIFgkPDCTgE63miA7S8ZWp-ETkJ3EuN8ftGnlLbDUvUE3V7Py8Y1puz8yebC-4vyHedgPBZYrMiaf3DSIf7C0-9HiVYNijJItzjw-orN4W_KwSAdNrj9eJz1Y1axKC8qh-YRScpodRQvIJppcN8Ab2BiqEQSCsAbvmVq5JaWOmAdMgtaWSHd7CV3S0t4Xr196uHVEZyHac2LhnBa6nNvA)

[Android Deep linking tutorial Hindi 2023 | Open Your App On clicking Links](https://www.youtube.com/watch?v=EkrohseoDBw)
