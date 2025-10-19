# VerificarEmails — n8n Community Node

Official n8n node for [VerificarEmails.com](https://www.verificaremails.com/en/).  
Validate **emails**, **phone numbers** (HLR / MNP / Syntax), **names**, and **postal addresses**.

### 🔍 **Finding an Official n8n Community Node**

Because **Verificaremails** is now an **official community node**, you **don’t need to install it manually** anymore.

You can simply:

1. Open **n8n** in your browser.
2. In the workflow editor, click the **“+”** button to add a new node.
3. Use the **search bar** and type:

   ```
   VerificarEmails
   ```
4. The node will appear automatically in the list — no need to install it from *Settings → Community Nodes*.
5. Click on it to add it directly to your workflow.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_1.png)](https://dashboard.verificaremails.com/)

---

✅ **Official community nodes** are automatically available in the n8n node search — just like built-in nodes.
You’ll always get the **latest verified version** without manual updates or npm installation.


## Install manually a Community Node from the n8n UI**

1. **Open n8n** in your browser.
   Example: `https://your-n8n-domain.com` or `http://localhost:5678`

2. In the **left sidebar**, click **⚙️ Settings → Community Nodes**.

3. Click the **“Install a Community Node”** button.

4. Enter the **package name** from npm — for example:

   ```
   n8n-nodes-verificaremails
   ```

5. Click **Install** and wait a few seconds.
   n8n will download and install the package automatically.

6. You’ll see a confirmation message, and the node will appear in your **Nodes panel** (search by name).

7. **Restart n8n** if prompted — this activates the new node.

---

### 🔄 **Update an Existing Community Node**

1. Go again to **⚙️ Settings → Community Nodes**.

2. Find the package you want to update (for example, `n8n-nodes-verificaremails`).

3. If a new version is available, you’ll see an **“Update”** button next to it.

4. Click **Update**, confirm, and wait for installation to finish.

5. **Restart n8n** when prompted.

---

✅ After restart, the latest version of the node is active, and your existing workflows will keep working.
You can check the version number under **Settings → Community Nodes → Installed packages**.




---

## Supported Services

- Email validation  
- Phone validation — HLR Lookup  
- Phone validation — MNP  
- Phone validation — Syntax  
- Postal address validation  
- Name / Surname / Gender validation  
- Name / Surname correction (JSON term)  
- Name / Surname autocomplete (JSON term)  

> For *Name correction* and *Name autocomplete*, the node automatically builds the required JSON and encodes it into the `term` parameter.

---

## Development

```bash
npm install
npm run build
```

### 🧩 **Install a Community Node from the n8n UI**

1. **Open n8n** in your browser.
   Example: `https://your-n8n-domain.com` or `http://localhost:5678`

2. In the **left sidebar**, click **⚙️ Settings → Community Nodes**.

3. Click the **“Install a Community Node”** button.

4. Enter the **package name** from npm — for example:

   ```
   n8n-nodes-verificaremails
   ```

5. Click **Install** and wait a few seconds.
   n8n will download and install the package automatically.

6. You’ll see a confirmation message, and the node will appear in your **Nodes panel** (search by name).

7. **Restart n8n** if prompted — this activates the new node.

---

### 🔄 **Update an Existing Community Node**

1. Go again to **⚙️ Settings → Community Nodes**.

2. Find the package you want to update (for example, `n8n-nodes-verificaremails`).

3. If a new version is available, you’ll see an **“Update”** button next to it.

4. Click **Update**, confirm, and wait for installation to finish.

5. **Restart n8n** when prompted.

---

✅ After restart, the latest version of the node is active, and your existing workflows will keep working.
You can check the version number under **Settings → Community Nodes → Installed packages**.




---

## Credentials

To use the VerificarEmails API, you must first [create an account](https://dashboard.verificaremails.com/app/public/register).  
Once registered, you can activate the services you need:  
- Email verification  
- Phone verification  
- Postal address verification  
- Name, surname, and gender detection  

When creating your account, select your preferred language. All API messages will use this language setting.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_1.png)](https://dashboard.verificaremails.com/app/public/register)

After activating your account, choose the service you want to use. You can navigate between services using the top-left logo or the banners.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_2.png)](https://dashboard.verificaremails.com/)

Next, go to the API section of the chosen service.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_3.png)](https://dashboard.verificaremails.com/)

Click on the **"+ Create new API"** button (top right). Give the API a name and optionally set a credit limit.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/Dashboard_paso_4_1.png)](https://dashboard.verificaremails.com/)

Once saved, an API token will be generated. This token must be added to the n8n credentials for the VerificarEmails node.

---

## Using the Node in n8n

In n8n, search for **VerificarEmails** in the Community Nodes section and add it to your workflow.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_1.png)](https://dashboard.verificaremails.com/)

If you plan to use multiple validation services, it’s recommended to use the same API key for all of them.  
To do this, open the **gear icon** in the credentials, select the active token, and reuse it across services.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_2.png)](https://dashboard.verificaremails.com/)

When configuring the node, select the specific service you want to use (Email, Phone, Name/Surname, Postal address, etc.).

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_3.png)](https://dashboard.verificaremails.com/)

Each service not only validates the data but also provides additional details. Check the **Result Guide** section in our documentation to better understand and use the results.

[![Dashboard Verificaremails](https://www.verificaremails.com/docs/assets/n8n_paso_4.png)](https://dashboard.verificaremails.com/)

The API also includes error handling for incorrect queries. Errors are rare, but we recommend implementing controls.  
Error messages will always be returned in the account’s selected language.

---

## Documentation

- [Email Verification API](https://www.verificaremails.com/docs/en/)  
- [Phone Verification API](https://www.verificaremails.com/docs/en/index_telefonos.html)  
- [Name / Surname / Gender API](https://www.verificaremails.com/docs/en/index_nombres.html)  
- [Postal Address API](https://www.verificaremails.com/docs/en/index_direcciones.html)  
- [Swagger Quick Start Guide](https://dashboard.verificaremails.com/documentation/index.html?v=8)  

If you need assistance setting up your environment, use the support chat (bottom right widget) on our dashboard.

---

## License

MIT © Skeyon Lab S.L.
