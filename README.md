# 🛠️ Smart Utility Toolkit

A lightweight **Node.js utility toolkit** built to demonstrate core Node.js concepts through practical command-line utilities, custom modules, cryptography, asynchronous file handling, HTTP routing, and automated testing.

The project uses **only Node.js built-in modules** and requires **no third-party dependencies**.

## 🚀 Features

### 🔢 Even / Odd Checker

Uses a custom Node.js module to determine whether a given integer is even or odd.

### 🧮 Command-Line Calculator

A validated CLI calculator supporting basic arithmetic operations such as:

* Addition
* Subtraction
* Multiplication
* Division

Example:

```bash
npm run calculator -- add 8 4
```

### 🎲 Secure Dice Roller

Generates cryptographically secure six-sided dice rolls using Node.js's built-in `crypto` module.

```bash
npm run dice
```

### 📁 Asynchronous File Manager

Demonstrates asynchronous file-system operations including:

* Create
* Read
* Update
* Delete

The implementation uses Node.js's built-in `fs` module.

```bash
npm run files
```

### 🌐 HTTP Server

A lightweight HTTP server built using Node.js's native `http` module.

Available routes:

| Route      | Description  |
| ---------- | ------------ |
| `/`        | Home page    |
| `/about`   | About page   |
| `/contact` | Contact page |

Start the server with:

```bash
npm run server
```

Then open:

```text
http://localhost:3000
```

## 🧪 Testing

The project includes automated tests for validating the implemented functionality.

Run:

```bash
npm test
```

## 🛠️ Tech Stack

* **Node.js**
* **JavaScript**
* **HTTP**
* **File System (`fs`)**
* **Cryptography (`crypto`)**
* **Custom Node.js Modules**
* **CLI / Command-Line Arguments**
* **Automated Testing**

No external npm dependencies are required.

## 📂 Project Structure

```text
smart-utility-toolkit/
│
├── modules/
│   └── ...                 # Custom Node.js modules
│
├── test/
│   └── ...                 # Automated tests
│
├── app.js                  # Main application
├── calculator.js           # CLI calculator
├── dice.js                 # Secure dice generator
├── fileManager.js          # File CRUD operations
├── server.js               # HTTP server
├── package.json             # Project configuration & scripts
└── README.md                # Documentation
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/chandraprakashmishra18/smart-utility-toolkit.git
```

### 2. Navigate into the project

```bash
cd smart-utility-toolkit
```

### 3. Install dependencies

```bash
npm install
```

> The project currently has no third-party dependencies, but running `npm install` ensures the Node.js project is initialized correctly.

## ▶️ Usage

### Run the main application

```bash
npm run app
```

### Run calculator

```bash
npm run calculator -- add 8 4
```

You can replace `add` with the supported arithmetic operation and provide the required numbers.

### Roll a secure dice

```bash
npm run dice
```

### Run file operations

```bash
npm run files
```

### Start HTTP server

```bash
npm run server
```

Visit:

```text
http://localhost:3000
```

Additional routes:

```text
http://localhost:3000/about
http://localhost:3000/contact
```

### Run tests

```bash
npm test
```

## 🎯 Learning Objectives

This project demonstrates several fundamental Node.js concepts:

* Creating and importing custom modules
* Working with Node.js built-in modules
* Processing command-line arguments
* Input validation
* Performing arithmetic operations
* Generating cryptographically secure random values
* Asynchronous file-system operations
* Building a basic HTTP server
* Creating HTTP routes
* Writing and executing automated tests
* Structuring a Node.js project

## 🔐 Why Built-in Node.js Modules?

The project intentionally avoids third-party dependencies to demonstrate how much functionality can be implemented using Node.js's native APIs.

Core modules demonstrated include:

```text
crypto
fs
http
```

This makes the project lightweight, easy to understand, and simple to run.

## 📌 Project Status

**Status:** Completed educational Node.js project

The repository currently contains the core utilities, HTTP server implementation, file-management functionality, and tests.

## 🤝 Contributing

Contributions, improvements, bug fixes, and additional utilities are welcome.

### Contribution workflow

```bash
git clone https://github.com/chandraprakashmishra18/smart-utility-toolkit.git
cd smart-utility-toolkit
git checkout -b feature/your-feature
```

Make your changes, add tests where appropriate, and submit a pull request.

## 📄 License

This project is available for educational and development purposes.

---

### ⭐ If you find this project useful

Consider giving the repository a star and contributing new Node.js utilities.

**Built with Node.js • JavaScript • Native APIs**
