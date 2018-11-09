# Cloud Function for SendGrid
A small and fast cloud function setup for proxying requests to SendGrid.

### Development
```
npm install
npx functions start
npx functions deploy sendMail --trigger-http
```

### Debugging
```
npx functions inspect sendMail
```

### Deployment
```
gcloud functions deploy sendMail --region europe-west1 --runtime nodejs8 --trigger-http
```
