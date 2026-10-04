# 🔍 Study Group Finder

A modern, fast web application built to help users seamlessly create and discover local study groups. 

---

##  Live Demo

Check out the live production deployment here: [(https://study-groups-finder.vercel.app/ )

---

##  Features

*   **Create Study Groups:** Easily register new groups by inputting a **Group Name**, **Subject**, **Meeting Date**, and **Meeting Time**.
*   **Dynamic Search & Filtering:** Quickly filter through the available list of study groups using the interactive **Search by subject** bar.
*   **Real-time List Display:** Displays newly created study groups instantly under the **Available Study Groups** dashboard.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org) (Using the modern `app/` router layout)
*   **Bundler:** [Turbopack](https://nextjs.orgdocs/app/api-reference/turbopack) (For lightning-fast local development builds)
*   **Languages:** CSS, JavaScript, TypeScript
*   **Styling:** Modern, clean, responsive CSS custom layouts

---

##  Project Structure

Based on the internal workspace layout, here are the core pieces making up the app:

```text
study-groups-finder/
├── app/
│   ├── components/
│   │   ├── groupform.js     # Handles group creation inputs & state validation
│   │   └── grouplist.js    # Manages rendering and filtering available groups
│   ├── globals.css         # Main application style sheet
│   ├── layout.tsx          # Root application shell wrapper
│   └── page.tsx            # Primary user interface & entry viewport
├── public/                 # Static icons and image assets
└── config files            # tsconfig.json, next.config.ts, postcss.config.mjs
```

---

## ⚡ Getting Started

Follow these steps to run this application locally on your machine.

### 📋 Prerequisites

Ensure you have **Node.js** (v18.x or higher recommended) and **npm** installed.

### 🔧 Local Installation

1. Clone this repository:
   ```bash
   git clone https://github.com
   ```

2. Open the directory:
   ```bash
   cd study-groups-finder
   ```

3. Install the required Node packages:
   ```bash
   npm install
   ```

### 💻 Running the Development Server

Start your development server with Next.js Turbopack execution:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application locally.

---

## 📦 Production & Deployment

To generate an optimized build for deployment:

```bash
npm run build
```

To boot up the built production application locally:

```bash
npm run start
```

---

## 👥 Contributors

*   **kazungumesther** — Lead Developer & Project Creator
