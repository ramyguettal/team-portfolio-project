# 🧑‍💻 Team Portfolio Project

This repository contains the **Team Portfolio Website** developed as part of our **Software Engineering** course project.  
It showcases the profiles of all team members and demonstrates collaboration using **GitHub's branch-based workflow**.

---

## 🚀 Project Overview

The goal of this project is to collaboratively build a responsive, static website that presents our team members, their skills, and contributions. The project demonstrates professional Git workflow practices including feature branching, pull requests, code reviews, and collaborative conflict resolution.

**🔗 Live Website:** [https://group1-team2.vercel.app](https://group1-team2.vercel.app)

---

## 👥 Team Members

| Name | Role |
|------|------|
| **Mohamed Ramy Guettal** | Team Leader / Repository Owner |
| **Mokhlis Yacine Bouyahia** | Developer |
| **Nour Tilba** | Developer |
| **Khaled Zaabat** | Developer |
| **Imad Eddine Smail** | Developer |
| **Nasrellah Kharroubi** | Developer |

---

## 📊 Team Retrospective Analysis

### Technical Challenges and Collaborative Workflow

During the development of our collaborative team portfolio website, the most significant technical challenge arose from **dependency management and merge conflicts in the shared repository**. Each member contributed an individual portfolio component, utilizing distinct front-end libraries and frameworks. Consequently, merging the collective `package.json` file became highly complex, as redundant and incompatible dependencies frequently caused build and runtime issues. This required extensive coordination and testing to ensure consistency across the project environment, demanding clear communication and precise version control.

**Specific Merge Conflict Resolution:**

A notable merge conflict occurred when two members mistakenly submitted pull requests to the `main` branch instead of the `develop` branch. The merging lead, unaware of this oversight, merged these requests directly into `main`, resulting in an unstable production branch. To resolve the issue, the lead executed a rollback operation on the `main` branch using Git, restoring it to the last stable commit. The erroneous pull requests were then correctly merged into the `develop` branch, followed by thorough testing before integration back into `main`. This incident reinforced the importance of consistent branch management and rigorous review before merging.

**Pull Request and Peer Review Efficacy:**

The pull request and peer review process played a critical role in maintaining software quality. Through systematic code inspection and review discussions, the team identified integration errors early and improved adherence to coding standards. This process not only reduced technical debt but also enhanced collaboration by fostering accountability among members. Overall, despite initial coordination challenges, the structured Git workflow and disciplined peer review significantly contributed to the robustness and maintainability of the final software artifact.

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

- Checks code correctness and adherence to standards.
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

When a conflict appears (example in `styles.css`):

```bash
<<<<<<< feature/mokhlis-profile
.navbar {
  background: #1a1a1a;
  display: flex;
}
=======
.navbar {
  background: #ffffff;
  display: grid;
}
>>>>>>> develop
```

Keep both sections or integrate changes logically, then:

```bash
git add .
git commit -m "Resolve merge conflict in styles.css"
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
   - Under **Source**, select the `main` branch (and `/root` or `/docs` folder).
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

## 📄 License

This project is for educational purposes as part of our Software Engineering course.

---

## 🤝 Contributing

Please follow the workflow outlined above. All contributions must go through pull requests and code review.

---

**Happy Coding! 🚀**
