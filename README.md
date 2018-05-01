# Genealogy

## Package scripts

### migrate

Use to create migrations and migrate DB up and down.
```
npm run migrate creat somemigrationname
npm run migrate up
npm run migrate down
```

### build

Use to build client. Packs frontend into bundle.js

### start

Use to start server.

## Remarks

Server works on https strictly, so you should provide .crt and .key file.
Also you should take care not to allow these file to appear in git.
