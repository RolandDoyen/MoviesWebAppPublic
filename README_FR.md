# Movies Webapp (ASP.NET 8)
Il s'agit d'une application web **ASP.NET Core 8** moderne hébergeant un frontend en JavaScript natif (Vanilla JS). Elle est conçue comme un client léger et épuré pour l'API Movies, illustrant une intégration fluide entre un hôte .NET et un frontend découplé.

> **Note :** Ce dépôt public est une version finalisée du projet destinée à mon portfolio. Le développement et les pipelines CI/CD vers Azure sont gérés via un dépôt privé, ce qui explique l'historique simplifié des commits ici.


## 📌 Table des matières
- [Movies Webapp (ASP.NET 8)](#movies-webapp-aspnet-8)
  - [📌 Table des matières](#-table-des-matières)
  - [🚀 Démo en direct](#-démo-en-direct)
  - [🛠️ Stack Technique](#️-stack-technique)
  - [✨ Fonctionnalités Principales](#-fonctionnalités-principales)
  - [🏛️ Architecture \& Philosophie](#️-architecture--philosophie)
  - [⚙️ Configuration de l'environnement](#️-configuration-de-lenvironnement)
  - [🚀 Déploiement](#-déploiement)
  - [⚙️ Installation \& Configuration locale](#️-installation--configuration-locale)


## 🚀 Démo en direct
[Movies Webapp sur Azure](https://movies-rd.azurewebsites.net)


## 🛠️ Stack Technique
- **Backend :** .NET 8 (C#) avec ASP.NET Core pour servir les fichiers statiques.
- **Frontend :** JavaScript vanilla (ES6+) pour une manipulation performante du DOM sans surcharge de framework.
- **UI/UX :** Bootstrap 5 pour un design responsive et des interfaces cohérentes centrées sur les données.
- **Communication :** Intégration API REST via l’API Fetch avec gestion centralisée du token JWT.
- **DevOps :** GitHub Actions pour des pipelines CI/CD automatisés et un déploiement continu.


## ✨ Fonctionnalités Principales
- **Frontend Sans Framework :** Interface utilisateur haute performance construite avec du JavaScript vanilla pour des temps de chargement ultra-rapides.
- **Gestion d'État :** Gestion centralisée du token JWT et de la session à travers toute l'application.
- **Design Responsive :** Approche mobile-first avec Bootstrap 5 pour un rendu cohérent sur tous les appareils.
- **Communication API Asynchrone :** Implémentation propre de l'API Fetch avec gestion centralisée des erreurs.
- **CI/CD Automatisée :** Workflow de déploiement continu assurant la mise à jour automatique du site via GitHub Actions.


## 🏛️ Architecture & Philosophie
- **Backend :** Utilise le middleware de fichiers statiques pour servir les assets avec un caching optimisé et une sécurité renforcée.
- **Frontend :** Adopte une approche « sans framework » (Vanilla JS) afin de minimiser l’empreinte côté client.
- **Communication :** Consomme les services REST via une implémentation centralisée de l’API Fetch.
- **UI/UX :** Mise sur un design « standard Bootstrap » pour une interface propre, professionnelle et centrée sur les données.


## ⚙️ Configuration de l'environnement
L'application utilise une logique de type C# en JavaScript pour détecter l'environnement d'hébergement :
- **Développement (IIS Express/Kestrel)** : Pointe vers `https://localhost:XXX/api/v1`
- **Production (Azure App Service)** : Pointe vers l'API Movies en direct.


## 🚀 Déploiement
- **Plateforme** : Hébergé sur **Azure App Service (Windows/Linux)**.
- **CI/CD** : Déploiement entièrement automatisé via **GitHub Actions** (déclenché à chaque push) pour une intégration fluide.
- **Configuration CORS** : L’API backend est configurée pour autoriser les requêtes provenant du domaine frontend (movies-rd.azurewebsites.net).


## ⚙️ Installation & Configuration locale
**Prérequis** .NET 8 SDK, Visual Studio 2022 or VS Code.

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/RolandDoyen/MoviesWebApp.git
   ```

2. **Configurer l’Endpoint de l’API**
   - L’application bascule automatiquement vers `localhost:XXX` lorsqu’elle détecte un environnement local dans le fichier `site.js`.
   - Assurez-vous que votre API Movies est lancée localement à l’adresse indiquée dans `AUTO_BASE_URL`.
  
3. **Lancer le Projet**
   - Ouvrez la solution dans Visual Studio et appuyez sur **F5**, ou utilisez la commande :
   ```bash
   dotnet run
   ```

Le navigateur s’ouvrira sur `https://localhost:XXXX`.