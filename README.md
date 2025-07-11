# Sowmiya's Portfolio Website

A modern, responsive portfolio website showcasing Sowmiya's professional skills, experience, and projects.

![Portfolio Preview](https://images.unsplash.com/photo-1573496359142-b8d87734a5a2)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Website Structure](#website-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
  - [Personal Information](#personal-information)
  - [Color Scheme](#color-scheme)
  - [Projects](#projects)
  - [Images](#images)
- [Project Structure](#project-structure)
- [License](#license)
- [Credits](#credits)

## 🌟 Overview

This portfolio website is designed to present Sowmiya's professional background in an elegant, user-friendly format. It's built with modern web technologies and follows responsive design principles to ensure optimal viewing on all devices.

## ✨ Features

- **Fully Responsive Design** - Adapts seamlessly to desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation** - Enhances user experience with fluid page transitions
- **Interactive UI Elements** - Engaging animations and hover effects
- **Functional Contact Form** - Easy way for visitors to get in touch
- **Modern & Clean Design** - Professional appearance with intuitive layout
- **Fast Loading** - Optimized for performance

## 🏗️ Website Structure

The website is organized into five main sections:

1. **Hero Section** - Eye-catching introduction with a professional photo and call-to-action
2. **About Section** - Personal biography, skills, and professional interests
3. **Experience Section** - Chronological work history and educational background
4. **Projects Section** - Portfolio of completed projects with descriptions and links
5. **Contact Section** - Contact form and professional contact information

## 💻 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox and CSS variables
- **JavaScript** - Vanilla JS for interactive elements
- **Font Awesome** - High-quality icons
- **Google Fonts** - Typography enhancement

## 🚀 Getting Started

Follow these simple steps to set up the portfolio locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/soumiya_portfolio.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd soumiya_portfolio
   ```

3. **Open the website**
   - Simply open the `index.html` file in any modern web browser
   - No build process or dependencies required

## 🎨 Customization Guide

### Personal Information

To update personal details, edit the `index.html` file:

- **Name and Professional Title** - Located in the hero section
- **About Information** - Update your biography in the about section
- **Experience Details** - Modify work history and education in the experience section
- **Project Descriptions** - Change project details in the projects section
- **Contact Information** - Update email, phone, and social media links

### Color Scheme

The website uses a customizable color palette defined in the `styles.css` file:

```css
:root {
    --primary-color: #6c63ff;     /* Main accent color */
    --secondary-color: #f50057;   /* Secondary accent color */
    --dark-color: #2c2c2c;        /* Text and dark elements */
    --light-color: #f4f4f4;       /* Background and light elements */
    /* Additional color variables */
}
```

Change these values to create your own color scheme that matches your personal brand.

### Projects

To add a new project to your portfolio:

1. Locate the projects section in `index.html`
2. Copy an existing project card structure
3. Update the content with your new project details:

```html
<div class="project-card">
    <!-- Project Image -->
    <div class="project-image">
        <img src="assets/images/your-project-image.jpg" alt="Project Name">
    </div>
    
    <!-- Project Details -->
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Detailed description of your project, highlighting key features and your role.</p>
        
        <!-- Technologies Used -->
        <div class="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
        </div>
        
        <!-- Project Links -->
        <div class="project-links">
            <a href="https://github.com/yourusername/project-repo" target="_blank" class="btn small-btn">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="https://your-live-demo.com" target="_blank" class="btn small-btn">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### Images

The portfolio uses images from two sources:

1. **Remote Images** - Currently using Unsplash placeholder images
2. **Local Images** - Store your own images in the `assets/images/` directory

To replace the placeholder images with your own:

1. Add your images to the `assets/images/` folder
2. Update the image paths in `index.html`:

```html
<!-- Before: Using Unsplash image -->
<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Profile Photo">

<!-- After: Using your own image -->
<img src="assets/images/profile.jpg" alt="Profile Photo">
```

**Current Placeholder Images:**
- Hero Section (Profile): https://images.unsplash.com/photo-1573496359142-b8d87734a5a2
- About Section: https://images.unsplash.com/photo-1571727153934-b9e0a8a8b1b2
- Project 1 (E-Commerce): https://images.unsplash.com/photo-1556742049-0cfed4f6a45d
- Project 2 (AI Health): https://images.unsplash.com/photo-1550751827-4bd374c3f58b
- Project 3 (Smart Home): https://images.unsplash.com/photo-1558346490-a72e53ae2d4f

## 📁 Project Structure

```
soumiya_portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/             # Static assets
    └── images/         # Image files
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Font Awesome** - For the high-quality icons
- **Google Fonts** - For the typography
- **Unsplash** - For placeholder images