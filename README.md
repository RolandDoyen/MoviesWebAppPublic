# Movies Webapp (ASP.NET 8)
This is a modern **ASP.NET Core 8** web application hosting a vanilla JavaScript frontend. It is designed to be a lightweight, clean consumer for the Movies API, showcasing seamless integration between a .NET backend host and a decoupled JS frontend.

> **Note:** This public repository is a polished version of the project for showcase purposes. Development and automated CI/CD pipelines to Azure are managed through a private repository, which explains the simplified commit history here.


## 📌 Table of Contents
- [Movies Webapp (ASP.NET 8)](#movies-webapp-aspnet-8)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Live Demo](#-live-demo)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [✨ Key Features](#-key-features)
  - [🏛️ Architecture \& Philosophy](#️-architecture--philosophy)
  - [⚙️ Environment Configuration](#️-environment-configuration)
  - [🚀 Deployment](#-deployment)
  - [⚙️ Installation \& Local Setup](#️-installation--local-setup)


## 🚀 Live Demo
**[👉 Visit Movies Webapp](https://movies-rd.azurewebsites.net)**


## 🛠️ Tech Stack
- **Backend:** .NET 8 (C#) using ASP.NET Core to serve static files.
- **Frontend:** Vanilla JavaScript (ES6+) for high-performance DOM manipulation without framework overhead.
- **UI/UX:** Bootstrap 5 for a responsive design and consistent data-centric interfaces.
- **Communication:** REST API integration using Fetch API with centralized JWT token management.
- **DevOps:** GitHub Actions for automated CI/CD pipelines and continuous deployment.


## ✨ Key Features
- **Zero-Framework Frontend:** High-performance UI built with Vanilla JS for ultra-fast load times.
- **State Management:** Centralized JWT token handling and session management across the application.
- **Responsive Design:** Mobile-first approach using Bootstrap 5 for consistent rendering.
- **Async API Communication:** Clean implementation of the Fetch API with centralized error handling.
- **Automated CI/CD:** Live deployment workflow ensuring the site is updated via GitHub Actions.


## 🏛️ Architecture & Philosophy
- **Backend:** Leverages Static File Middleware to serve assets with optimized caching and security.
- **Frontend:** Implements a "framework-less" (Vanilla JS) approach to keep the client-side footprint minimal.
- **Communication:** Consumes REST services via a centralized Fetch API implementation.
- **UI/UX:** Focuses on a "Bootstrap-standard" design for a clean, professional, and data-centric interface.


## ⚙️ Environment Configuration
The app uses C#-style logic in JavaScript to detect the hosting environment:
- **Development (IIS Express/Kestrel)**: Points to `https://localhost:XXX/api/v1`
- **Production (Azure App Service)**: Points to the live Movies API.


## 🚀 Deployment
- **Platform**: Hosted on **Azure App Service (Windows/Linux)**.
- **CI/CD**: Fully automated deployment via **GitHub Actions** (triggered on push) for seamless integration.
- **CORS Configuration**: Backend API is configured to authorize requests from the frontend (movies-rd.azurewebsites.net) domain.


## ⚙️ Installation & Local Setup
**Prerequisites:** .NET 8 SDK, Visual Studio 2022 or VS Code.

1. **Clone the repository**
  ```bash
  git clone https://github.com/RolandDoyen/MoviesWebAppPublic.git
  ```
  
2. **Configure the API Endpoint**
   - The application automatically switches to `localhost:XXX` when detecting a local environment in site.js.
   - Ensure your Movies API is running locally at the address specified in `AUTO_BASE_URL`.
  
3. **Run the Project**
   - Open the solution in Visual Studio and press **F5**, or use:
  ```bash
  dotnet run
  ```

The browser will open at `https://localhost:XXXX`.