# Movies Webapp (ASP.NET 8)
This is a modern **ASP.NET Core 8** web application hosting a vanilla JavaScript frontend. It is designed to be a lightweight, clean consumer for the Movies API, showcasing seamless integration between a .NET backend host and a decoupled JS frontend.

> **Note:** This public repository is a polished version of the project for showcase purposes. Development and automated CI/CD pipelines to Azure are managed through a private repository, which explains the simplified commit history here.


## 📌 Table of Contents
- [Movies Webapp (ASP.NET 8)](#movies-webapp-aspnet-8)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Live Demo](#-live-demo)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🏛️ Architecture \& Philosophy](#️-architecture--philosophy)
  - [🛠️ Technical Documentation](#️-technical-documentation)
  - [⚙️ Environment Configuration](#️-environment-configuration)
  - [🚀 Deployment](#-deployment)
  - [⚙️ Installation \& Local Setup](#️-installation--local-setup)


## 🚀 Live Demo
[Movies Webapp on Azure](https://movies-rd.azurewebsites.net)


## 🛠️ Tech Stack
- **Backend:** .NET 8 (C#) using ASP.NET Core to serve static files.
- **Frontend:** Vanilla JavaScript (ES6+) for high-performance DOM manipulation without framework overhead.
- **UI/UX:** Bootstrap 5 for a responsive design and consistent data-centric interfaces.
- **Communication:** REST API integration using Fetch API with centralized JWT token management.
- **DevOps:** GitHub Actions for automated CI/CD pipelines and Azure App Service for cloud hosting.


## 🏛️ Architecture & Philosophy
The project was built as a dedicated ASP.NET 8 Web App to serve as a high-performance host for the frontend assets.
<summary> Leverages ASP.NET 8 Static File Middleware to serve frontend assets with optimized caching and security. </summary>
<summary> Implements a "framework-less" frontend to keep the client-side footprint minimal while consuming REST services. </summary>
<summary> Focuses on a "Bootstrap-standard" design to ensure the UI is clean, professional, and data-centric. </summary>


## 🛠️ Technical Documentation
<summary> Uses standard ASP.NET wwwroot structure for hosting modular ES6 JavaScript and static assets. </summary>
<summary> Manages JWT authentication via a custom TokenManager with localStorage persistence for session continuity. </summary>
<summary> Implements a unified apiFetch wrapper to handle cross-cutting concerns like auth headers and automatic error extraction. </summary>
<summary> Dynamically assembles pages using asynchronous partial loading for reusable components like the navbar and footer. </summary>
<summary> Features a robust client-side error handling system that parses ProblemDetails JSON from the API for real-time user feedback. </summary>
<summary> Uses native DOM APIs and Bootstrap for reactive UI updates, ensuring high performance without heavy framework overhead. </summary>
<summary> Integrates environment-aware configuration to switch API endpoints automatically between local development and production. </summary>
<summary> Optimized for UX by handling asynchronous state changes and providing clear visual cues during data persistence operations. </summary>


## ⚙️ Environment Configuration
The app uses C#-style logic in JavaScript to detect the hosting environment:
- **Development (IIS Express/Kestrel)**: Points to `https://localhost:44366/api/v1`
- **Production (Azure App Service)**: Points to the live Movies API.


## 🚀 Deployment
- **Platform**: Hosted on **Azure App Service (Windows/Linux)**.
- **CI/CD**: Fully automated deployment via **GitHub Actions** (triggered on push) for seamless integration.
- **Static Content**: All frontend logic resides in the wwwroot directory as per ASP.NET 8 standards.
- **CORS Configuration**: Backend API is configured to authorize requests from the frontend .azurewebsites.net domain.


## ⚙️ Installation & Local Setup
<summary> Steps to configure and run the application locally for development and testing purposes. </summary>

**Prerequisites**
* **.NET 8 SDK**
* **Visual Studio 2022** or **VS Code**

**Steps**
1. Clone the repository
    ```bash
    git clone https://github.com/RolandDoyen/MoviesWebApp.git
    ```
2. Open with Visual Studio
   - Open the .sln or .csproj file.
   - Ensure the ASP.NET and web development workload is installed.
3. Configure the API Endpoint
   - The application automatically switches to localhost:44366 when detecting a local environment in site.js.
   - Ensure your Movies API is running locally at the address specified in AUTO_BASE_URL.
4. Run the Project
   - Press F5 or click Start in Visual Studio.
   - The browser will open at https://localhost:XXXX.