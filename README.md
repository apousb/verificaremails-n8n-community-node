# VerificarEmails — n8n Community Node

Official n8n node for [VerificarEmails.com](https://www.verificaremails.com). Validate **emails**, **phone numbers** (HLR/MNP/Syntactic), **names**, and **postal addresses**.

## Install (Community Nodes)

1. In n8n, go to **Settings → Community nodes → Install a community node**.
2. Enter the package name:
   ```
   @verificaremails/n8n-nodes-verificaremails
   ```
3. Accept the security warning and confirm.

## Credentials

Create a credential **VerificarEmails API** and enter your API key.

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
dist/nodes/Verificaremails/verificaremails.svg
```

## License

MIT © Skeyon Lab S.L.
