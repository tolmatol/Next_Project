# Backend (json-server)

This folder contains a small json-server backend for local development and deployment.

Start locally:

```bash
cd backend
npm install
npm start
```

Deploy to Render / Railway: connect this folder as a separate service and use the `npm start` command. After deployment, set the frontend `API_URL` to the backend's public URL.
