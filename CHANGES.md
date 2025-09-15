# Changes in this PR

- **GenericFunctions.ts**
  - Added `import { NodeApiError } from 'n8n-workflow'`.
  - Wrapped HTTP helper call with `try/catch` and now throw `NodeApiError` on failures.
  - This makes errors surface properly in n8n (status code, body message) instead of a generic Error.

No endpoint logic was modified.
