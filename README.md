
# NeoBooks

Application disponible sur Expo `https://exp.host/@tthledieu/neo-books`


## Instalattion

### Expo
Ce projet utilise `Expo` et sa cli `expo-cli`.
Commencez par installer `expo-cli` :
```
npm install -g expo-cli
```
Vérifiez que l'installation est ok :
```
expo-cli --version
```

### Le projet
Ce projet utilise `yarn`. Pour commencer, cloner le projet et installer les dépendances:
```
git clone https://github.com/TTHledieu/NeoBooks.git && cd Neobooks && yarn
```

### C'est parti !
Démarrez l'app avec un simple
```
yarn start
```

Scannez le QR code avec votre téléphone ou démarrer un émulateur Android / iOS !

## Build
Vous pouvez déployer le projet sur Expo rapidement.

### Connection
Tout d'abord, regardez si vous êtes connecté à votre compte Expo
```
expo-cli whoami
```
Si vous n'êtes pas connecté / inscris à Expo :
```
expo-cli login|signin
```

### Déploiement
Une fois fait, lancez simplement
```
expo-cli publish
```

Rendez-vous sur l'url indiqué à la fin du publish, quelque-chose du genre
`https://exp.host/@VOTRE-PSEUDO/neo-books`

Scanner le QR code ou lancer l'app directement depuis l'app `Expo` sur votre téléphone !