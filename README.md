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

[![Dashboard Verificaremails]([https://www.verificaremails.com/img/verificaremails.svg]([https://www.verificaremails.com/docs/assets/Dashboard_paso_1.png))](https://github.com/apousb/verificaremails-n8n-community-node](https://dashboard.verificaremails.com/app/public/register))



You can find detailed information about our API and how to understand resulta at:
Email Verification API: https://www.verificaremails.com/docs/en/
Phone Veriffication API: https://www.verificaremails.com/docs/en/index_telefonos.html
Name/Surname and Gender API: https://www.verificaremails.com/docs/en/index_nombres.html
Postal Address API: https://www.verificaremails.com/docs/en/index_direcciones.html
If you want a quick stating guide go to our Swagger file: https://dashboard.verificaremails.com/documentation/index.html?v=8



## License

MIT © Skeyon Lab S.L.
