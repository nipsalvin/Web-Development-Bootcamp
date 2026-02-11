# Hello Internet Computer App

A full-stack decentralized application (DApp) built on the Internet Computer using **Motoko** for the backend and **React** for the frontend.

**Project Location:** `~/Web-Development-Bootcamp/ic-projects/hello`

---

## Prerequisites

### System Requirements
- **Windows 10/11** with WSL2
- **Ubuntu** (via WSL)
- **VSCode**

---

## 1️⃣ Initial Setup (One-Time Installation)

### Install WSL
```bash
wsl --install
```

Verify installation:
```bash
wsl --list --verbose
```

### Install VSCode
Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Install VSCode Extensions
1. **Motoko Language Extension**  
   [https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko](https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko)

2. **Remote WSL Extension**  
   [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

### Install Development Tools (in WSL/Ubuntu)

**Install Homebrew:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Verify:
```bash
brew --version
```

**Install Node.js:**
```bash
brew install node
```

Verify:
```bash
node --version
npm --version
```

**Install DFX (Internet Computer SDK):**
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

Add DFX to PATH (run the command shown at the end of installation):
```bash
source "$HOME/.local/share/dfx/env"
```

Add to your `.bashrc` for persistence:
```bash
echo 'source "$HOME/.local/share/dfx/env"' >> ~/.bashrc
```

Verify:
```bash
dfx --version
```

---

## 2️⃣ Project Setup

### Create Project Directory
```bash
cd ~/Web-Development-Bootcamp
mkdir -p ic-projects
cd ic-projects
```

### Create New DApp
```bash
dfx new hello
cd hello
```

### Open in VSCode
```bash
# Open file explorer to view project
explorer.exe .

# Or open directly in VSCode
code .
```

In VSCode:
1. Click **"Reopen in WSL"** if prompted
2. Install the Remote WSL extension in WSL: Ubuntu when prompted

---

<!-- ## 3️⃣ Configuration

### Fix Port Binding (Important!)

Edit `dfx.json` to use a consistent port. Add the `networks` section:

```json
{
  "canisters": {
    "hello": {
      "main": "src/hello/main.mo",
      "type": "motoko"
    },
    "hello_assets": {
      "dependencies": ["hello"],
      "frontend": {
        "entrypoint": "src/hello_assets/src/index.html"
      },
      "source": [
        "src/hello_assets/assets",
        "dist/hello_assets/"
      ],
      "type": "assets"
    }
  },
  "defaults": {
    "build": {
      "args": "",
      "packtool": ""
    }
  },
  "networks": {
    "local": {
      "bind": "127.0.0.1:4943",
      "type": "ephemeral"
    }
  },
  "version": 1
}
```

### Fix Webpack Configuration

In `webpack.config.js`, find the `devServer` section and update the proxy to use an array:

```javascript
devServer: {
  proxy: [
    {
      context: ["/api"],
      target: "http://127.0.0.1:4943",
      changeOrigin: true,
    },
  ],
  // ... rest of config
}
```

### Fix Frontend Agent Configuration

Edit `src/declarations/hello/index.js` and add the `host` parameter:

```javascript
export const createActor = (canisterId, options) => { 
  const agent = new HttpAgent({ 
    host: "http://127.0.0.1:8080",  // Point to webpack dev server
    ...options?.agentOptions 
  }); 
  
  // Fetch root key for certificate validation during development 
  if(process.env.NODE_ENV !== "production") { 
    agent.fetchRootKey().catch(err=>{ 
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running"); 
      console.error(err); 
    }); 
  } 

  return Actor.createActor(idlFactory, { 
    agent, 
    canisterId, 
    ...options?.actorOptions, 
  }); 
};
``` -->

### Install Dependencies (in WSL/Ubuntu)

```bash
npm install
```

---

## 4️⃣ Running the Application

### Terminal 1: Start the Local Replica

Set CORS environment variable (required for frontend to connect):
```bash
export DFX_CORS_ALLOWED_ORIGINS="http://127.0.0.1:8080 http://localhost:8080"
```

Start the replica in the foreground:
```bash
dfx start
```
Or start the replica in the background:
```bash
dfx start --clean --background
```

**Note:** Keep this terminal open. The replica runs in the background.

### Terminal 2: Deploy Canisters

```bash
dfx deploy
```

This will output canister IDs and URLs. Example:
```
Deployed canisters.
URLs:
  Frontend canister via browser
    hello_assets: http://127.0.0.1:4943/?canisterId=...
  Backend canister via Candid interface:
    hello: http://127.0.0.1:4943/?canisterId=...
```

### Terminal 3: Start Frontend Development Server

```bash
npm start
```

The app will be available at:
- **http://localhost:8080/**
- **http://127.0.0.1:8080/**

---

## 5️⃣ Using the Application

1. Open your browser to **http://localhost:8080**
2. Enter your name in the input field
3. Click **"Click Me!"**
4. You should see: **"Hello, [your name]!"**

---

## 📁 Project Structure

```
hello/
├── src/
│   ├── hello/              # Backend (Motoko)
│   │   └── main.mo
│   └── hello_assets/       # Frontend (React)
│       ├── assets/
│       └── src/
│           └── index.js
├── dfx.json               # DFX configuration
├── webpack.config.js      # Webpack configuration
└── package.json          # Node dependencies
```

---

## 🧪 Testing Your Backend

Test the backend directly via command line:
```bash
dfx canister call hello greet "World"
```

Expected output:
```
("Hello, World!")
```

---

## 🛑 Stopping the Application

```bash
# Stop the replica
dfx stop

# Stop npm (Ctrl+C in the terminal running npm start)
```

---

## 📚 Resources

- [Internet Computer Documentation](https://internetcomputer.org/docs/current/developer-docs/)
- [Motoko Programming Language](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [DFX CLI Reference](https://internetcomputer.org/docs/current/references/cli-reference/)

---

## 🎓 Next Steps

- Modify `src/hello/main.mo` to add new backend functions
- Update `src/hello_assets/src/index.js` to enhance the frontend
- Explore deploying to the IC mainnet

---

**Happy Building! 🚀**
