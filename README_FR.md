# Movies Webapp (ASP.NET 8)
Il s'agit d'une application web **ASP.NET Core 8** moderne hébergeant un frontend en JavaScript natif (Vanilla JS). Elle est conçue comme un client léger et épuré pour l'API Movies, illustrant une intégration fluide entre un hôte .NET et un frontend découplé.

> **Note :** Ce dépôt public est une version finalisée du projet destinée à mon portfolio. Le développement et les pipelines CI/CD vers Azure sont gérés via un dépôt privé, ce qui explique l'historique simplifié des commits ici.


## 📌 Table des matières
- [Movies Webapp (ASP.NET 8)](#movies-webapp-aspnet-8)
  - [📌 Table des matières](#-table-des-matières)
  - [🚀 Démo en direct](#-démo-en-direct)
  - [🛠️ Stack Technique](#️-stack-technique)
  - [🏛️ Architecture \& Philosophie](#️-architecture--philosophie)
  - [🛠️ Documentation Technique](#️-documentation-technique)
  - [⚙️ Configuration de l'environnement](#️-configuration-de-lenvironnement)
  - [🚀 Déploiement](#-déploiement)
  - [⚙️ Installation \& Configuration locale](#️-installation--configuration-locale)


## 🚀 Démo en direct
[Movies Webapp sur Azure](https://movies-rd.azurewebsites.net)


## 🛠️ Stack Technique
- **Backend :** .NET 8 (C#) utilisant ASP.NET Core pour l'hébergement de fichiers statiques.
- **Frontend :** JavaScript natif (ES6+) pour une manipulation du DOM haute performance sans la lourdeur d'un framework.
- **UI/UX :** Bootstrap 5 pour un design responsive et des interfaces centrées sur la donnée.
- **Communication :** Intégration d'API REST via l'API Fetch avec gestion centralisée des jetons JWT.
- **DevOps :** GitHub Actions pour les pipelines CI/CD automatisés et Azure App Service pour l'hébergement cloud.


## 🏛️ Architecture & Philosophie
Le projet a été construit comme une application web ASP.NET 8 dédiée pour servir d'hôte haute performance aux ressources frontend.
<summary> Exploite le middleware de fichiers statiques d'ASP.NET 8 pour servir les ressources frontend avec une mise en cache et une sécurité optimisées. </summary>
<summary> Implémente un frontend "sans framework" pour maintenir une empreinte client minimale tout en consommant des services REST. </summary>
<summary> Se concentre sur un design "Standard Bootstrap" pour garantir une interface utilisateur propre, professionnelle et centrée sur les données. </summary>


## 🛠️ Documentation Technique
<summary> Utilise la structure standard wwwroot d'ASP.NET pour héberger le JavaScript ES6 modulaire et les ressources statiques. </summary>
<summary> Gère l'authentification JWT via un TokenManager personnalisé avec persistance en localStorage pour la continuité des sessions. </summary>
<summary> Implémente un wrapper apiFetch unifié pour gérer les problématiques transversales comme les en-têtes d'authentification et l'extraction automatique des erreurs. </summary>
<summary> Assemble dynamiquement les pages via un chargement partiel asynchrone pour les composants réutilisables tels que la barre de navigation et le pied de page. </summary>
<summary> Propose un système robuste de gestion des erreurs client qui analyse les JSON ProblemDetails de l'API pour un retour utilisateur en temps réel. </summary>
<summary> Utilise les API DOM natives et Bootstrap pour des mises à jour réactives de l'interface, garantissant des performances élevées sans la lourdeur d'un framework. </summary>
<summary> Intègre une configuration sensible à l'environnement pour basculer automatiquement les points de terminaison de l'API entre le développement local et la production. </summary>
<summary> Optimisé pour l'expérience utilisateur (UX) en gérant les changements d'état asynchrones et en fournissant des indicateurs visuels clairs lors des opérations de persistance des données. </summary>


## ⚙️ Configuration de l'environnement
L'application utilise une logique de type C# en JavaScript pour détecter l'environnement d'hébergement :
- **Développement (IIS Express/Kestrel)** : Pointe vers `https://localhost:44366/api/v1`
- **Production (Azure App Service)** : Pointe vers l'API Movies en direct.


## 🚀 Déploiement
- **Plateforme** : Hébergé sur **Azure App Service (Windows/Linux)**.
- **CI/CD** : Déploiement entièrement automatisé via **GitHub Actions** (déclenché au push) pour une intégration continue.
- **Contenu Statique** : Toute la logique frontend réside dans le répertoire wwwroot, conformément aux standards ASP.NET 8.
- **Configuration CORS** : L'API backend est configurée pour autoriser les requêtes provenant du domaine .azurewebsites.net du frontend.


## ⚙️ Installation & Configuration locale
<summary> Étapes pour configurer et exécuter l'application localement à des fins de développement et de test. </summary>

**Prérequis**
* **.NET 8 SDK**
* **Visual Studio 2022** ou **VS Code**

**Etapes**
1. Cloner le dépôt
    ```bash
    git clone https://github.com/RolandDoyen/MoviesWebApp.git
    ```
2. Ouvrir avec Visual Studio
   - Ouvrez le fichier .sln ou .csproj.
   - Assurez-vous que la charge de travail "Développement ASP.NET et web" est installée.
3. Configurer le point de terminaison de l'API
   - L'application bascule automatiquement vers localhost:44366 lorsqu'elle détecte un environnement local dans site.js.
   - Assurez-vous que votre API Movies s'exécute localement à l'adresse spécifiée dans AUTO_BASE_URL.
4. Lancer le projet
   - Appuyez sur F5 ou cliquez sur Démarrer dans Visual Studio.
   - Le navigateur s'ouvrira à l'adresse https://localhost:XXXX.