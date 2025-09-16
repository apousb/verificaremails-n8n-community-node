# VerificarEmails — n8n Community Node

Official n8n node for [VerificarEmails.com](https://www.verificaremails.com). Validate **emails**, **phone numbers** (HLR/MNP/Syntactic), **names**, and **postal addresses**.

## Install (Community Nodes)

1. In n8n, go to **Settings → Community nodes → Install a community node**.
2. Enter the package name:
   ```
   @verificaremails/n8n-nodes-verificaremails
   ```
3. Accept the security warning and confirm.

## Services Supported

- Email validation
- Phone validation — HLR Lookup
- Phone validation — MNP
- Phone validation — Syntactic
- Postal Address validation
- Name/Surname/Gender validation
- Name/Surname correction (JSON term)
- Name/Surname autocomplete (JSON term)

> For *Name correction* and *Name autocomplete*, the node builds the required JSON and encodes it into the `term` parameter automatically.

## Development

```bash
npm install
npm run build
```

The icon must be available at build time at:
```
dist/nodes/Verificaremails/verificaremails2.svg
```

## Credentials

In order to use VerificarEmail API, you have to register into the platform and enable each service you would like to use. remmeber that we have verification services for:
Email verification, phone verification, postal address verification and name/surname and gender detection.

In order to start open an account a https://dashboard.verificaremails.com select your desired language, all messages of the API will use your account language.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_1.png)(https://github.com/apousb/verificaremails-n8n-community-node](https://dashboard.verificaremails.com/app/public/register)

After activating the account, you have to chosse the service you would like to use. You can navigate among services using the banners or the top left logo that display a drop down with all services.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_2.png)

Choose the service you would like to use and go to the API.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_3.png)

On the API are, just select the top right button to "+ create new API". You will have to provide a name for the API, it is also a good idea to limit the amount of credts you will be able to use on it.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_4.png)

When you save the it will generate a token for use in the API credential node. 

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_4.png)

What we need to do now is adding the node to N8N workflow. Fo rthat porpise we are going to use a public community node, on the main screen sear for a node called "verificaremails"

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_1.png)

also the node is deployed as a community node, you have to search for it at "settings/community nodes".

You will have to add the API for the service you would like to use.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_1.png)

If you woudl like to use more than one validation service is a good idea use the same API key in all Verificaremails API. You change the token to use a common one by selectin the "gear icon", onece you select you will see the currect token . Use tha same token for all teh services.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_2.png)

Whe you open the node, you have to choose the service you would like to use (email verification, phone verifcation, name/surname...)

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_3.png)

In additin to verificatin service we provide much more information regarding the validated data,. Use our documentation on the "result guide" section to better undersand how to use those results.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_4.png)

Also teh service use error handling to detect wrong queries. errors are very stange but it is a good practice to implement some king of control. Teh explanation of the error ise the same language set to the user account.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_4.png)

You can find detailed information about our API and how to understand resulta at:
Email Verification API: https://www.verificaremails.com/docs/en/
Phone Veriffication API: https://www.verificaremails.com/docs/en/index_telefonos.html
Name/Surname and Gender API: https://www.verificaremails.com/docs/en/index_nombres.html
Postal Address API: https://www.verificaremails.com/docs/en/index_direcciones.html
If you want a quick stating guide go to our Swagger file: https://dashboard.verificaremails.com/documentation/index.html?v=8

If you need help setting up the verification enviroment you can use the chat on the right bottom widget.



## License

MIT © Skeyon Lab S.L.
