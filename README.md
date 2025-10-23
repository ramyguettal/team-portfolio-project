# 🧑‍💻 Team Portfolio Project

This repository contains the **Team Portfolio Website** developed as part of our **Software Engineering** course project.  
It showcases the profiles of all team members and demonstrates collaboration using **GitHub's branch-based workflow**.

---

## 🚀 Project Overview

The goal of this project is to collaboratively build a responsive, static website that presents our team members, their skills, and contributions.

The project is hosted using **GitHub Pages**, and the workflow follows a **feature-branch → develop → main** structure for clean and organized development.

---

## 🌿 Branching Strategy

We use a **three-level branch system**:

| Branch | Purpose |
|--------|----------|
| `main` | Production branch – always stable and ready for deployment |
| `develop` | Integration branch – where all features are merged and tested |
| `feature/<feature-name>` | Individual feature branches for each member's work |

---

## 🔁 Git Workflow

Below is the step-by-step workflow that all contributors must follow.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ramyguettal/team-portfolio-project.git
cd team-portfolio-project
```

### 2️⃣ Create or switch to the develop branch

```bash
git checkout develop
git pull origin develop
```

### 3️⃣ Create your feature branch

Each member creates a feature branch named after their task:

```bash
git checkout -b feature/<your-name>-profile
```

**Example:**

```bash
git checkout -b feature/mokhlis-profile
```

### 4️⃣ Implement your section

- Add your personal portfolio section (HTML/CSS/JS or React component).
- Test locally to ensure everything runs without errors.

### 5️⃣ Commit and push your changes

```bash
git add .
git commit -m "Add <your-name> portfolio section"
git push origin feature/<your-name>-profile
```

### 6️⃣ Create a Pull Request (PR)

1. Go to **GitHub** → **Pull Requests** → **New Pull Request**.
2. Select your branch (`feature/<your-name>-profile`) → base branch (`develop`).
3. Request a review from the repository owner or team leader.

---

## ✅ Review & Merge Process

The repository owner reviews all pull requests:

- Checks code correctness.
- Resolves any conflicts.
- Leaves feedback or approves changes.

**Once approved:**

- The PR is merged into `develop` (not directly into `main`).
- After all members' features are merged and tested, the `develop` branch is merged into `main`.

---

## ⚠️ Important Rules

- **Never push directly to `main`.**
- Always work through `feature/` → `develop`.
- Each member's PR must be reviewed and approved before merging.
- Conflicts must be resolved locally using VS Code before merging.

---

## 🧩 Handling Merge Conflicts

When a conflict appears (example in `App.js`):

```bash
<<<<<<< feature/mokhlis-profile
<Your Code>
=======
<Other Member's Code>
>>>>>>> develop
```

Keep both sections or integrate changes logically, then:

```bash
git add .
git commit -m "Resolve merge conflict in App.js"
git push
```

---

## 🧱 Deploying to GitHub Pages

After merging all features into `main` and confirming stability:

1. **Switch to the main branch:**

```bash
git checkout main
git pull origin main
```

2. **Build or prepare static files** (if using React, run):

```bash
npm install
npm run build
```

3. **Deploy to GitHub Pages:**

   - Go to your GitHub repository → **Settings** → **Pages**
   - Under **Source**, select the `main` branch (and `/root` folder).
   - Save changes.

Your project will be live at:

```
https://ramyguettal.github.io/team-portfolio-project/
```

---

## 🧑‍💻 Command Reference

| Task | Command |
|------|---------|
| Update local repo | `git pull origin develop` |
| Create a new branch | `git checkout -b feature/<name>` |
| Switch branches | `git checkout develop` |
| Push changes | `git push origin feature/<name>` |
| Merge PR (GitHub UI) | `develop ← feature/<name>` |
| Deploy site | Merge `develop` → `main`, then GitHub Pages |

---

## 🧑‍🤝‍🧑 Team Members

| Name | Role |
|------|------|
| **Mohamed Ramy Guettal** | Team Leader / Repository Owner |
| **Mokhlis Yacine Bouyahia** | Developer |
| **Nour Tilba** | Developer |
| **Khaled Zaabat** | Developer |
| **Imad Eddine Smail** | Developer |
| **Nasrellah Kharroubi** | Developer |

---

## 📄 License

This project is for educational purposes as part of our Software Engineering course.

---

## 🤝 Contributing

Please follow the workflow outlined above. All contributions must go through pull requests and code review.

---

**Happy Coding! 🚀**
