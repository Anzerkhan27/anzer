# 🧠 Anzer Khan – Developer Portfolio

This is the source code and project layout for my **production-ready personal portfolio**, built with a full-stack setup using **React + Tailwind CSS** on the frontend and **Django REST Framework** on the backend.

The project is modular, responsive, and SEO-optimized — designed to highlight professional experience, technical skills, and deployed projects.

---

## ✅ CURRENT STATUS

### 📁 Folder Structure

```

my-portfolio/
├── backend/                # Django backend (API & admin)
│   ├── config/             # Django project config (settings, urls, wsgi)
│   ├── portfolio/          # Django app (Project model, views, serializers)
│   └── manage.py
├── frontend/               # React + Vite frontend
│   ├── public/
│   │   ├── project\_images/     # Local screenshots for static project entries
│   │   ├── projects.json       # Static fallback (prior to API connection)
│   │   └── CV\_Anzer.pdf        # Downloadable resume
│   ├── src/
│   │   ├── components/     # Reusable React components (Hero, Navbar, Footer)
│   │   ├── pages/          # Sections like About, Projects
│   │   └── main.tsx        # Entry point for React app
│   └── index.html          # Meta tags + SEO config
└── README.md

```

---

### 🧠 Tech Stack

| Layer       | Tech Used                           | Purpose                            |
| ----------- | ----------------------------------- | ---------------------------------- |
| Frontend    | React (Vite) + TypeScript           | Fast, modern UI with type safety   |
| Styling     | Tailwind CSS                        | Utility-first responsive styling   |
| Animations  | Framer Motion                       | Smooth scroll-in and hover effects |
| Backend     | Django + Django REST Framework      | RESTful API for project data       |
| Data        | Static `projects.json` (temp)       | Fallback before full backend API   |
| Hosting     | Cloudflare Pages (frontend)         | Free, fast CDN deployment          |
| Deployment  | Planned: Railway (backend), PostgreSQL for DB | Full-stack rollout         |

---

## ✅ COMPLETED MILESTONES

### 🔧 Backend

- Django backend scaffolded with `portfolio` app
- `Project` model + API serializer created
- Endpoint: `GET /api/projects/` returning all projects
- Admin interface for data entry & CMS
- Local SQLite used during development

### 🎨 Frontend

- Responsive, dark/light themed React app via Vite
- Pages implemented: `Hero`, `About`, `Projects`, `Footer`
- Tag filtering + live search across static project data
- Download CV, animated headings, mobile menu
- Minimal design with modern developer aesthetics

---

## 🧭 ROADMAP: What’s Next

### 🔁 Backend Integration

- Replace `projects.json` with live `/api/projects/` data
- Add project detail views via slug/id endpoint
- Secure CORS, enable production DB (PostgreSQL on Railway)

### 💼 Dynamic Admin

- Django Admin CMS to manage featured projects
- Enable image upload + Cloudinary integration
- Add Contact model + messaging backend

### ✨ Frontend Enhancements

- Project detail pages (modal or route)
- Form handling with EmailJS or backend POST
- Lazy load images + loading skeletons
- Add blog, timeline, or certifications (optional)

### 🚀 Deployment Setup

- Backend to Railway or Render
- Frontend to Cloudflare Pages
- Custom domain (e.g. `anzer.dev`)
- Add robots.txt, sitemap.xml, favicon

---

## 🧠 Project Goals

This codebase serves as a long-term, extensible portfolio for real-world use:

- ✅ Highlight backend + ML capabilities
- ✅ Serve recruiters with a focused, clean UI
- ✅ Provide self-managed data via backend CMS
- ✅ Demonstrate full-stack deployment practices

---

## 🧬 Contributing

This is a personal project, but feedback or suggestions are welcome via GitHub or LinkedIn.

---


## 👨‍💻 Built By

**Anzer Khan** – Python Backend & ML Engineer  
[LinkedIn](https://linkedin.com/in/anzer-khan-31a14a209) | [GitHub](https://github.com/AnzerKhan27)
```

---

