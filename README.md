SmartWatch Pro Website

A modern, responsive, and interactive landing page website for a fictional high-tech smartwatch product. This project showcases essential front-end development skills and a clean, engaging user interface.

Features

This website is designed with user experience and visual appeal in mind, incorporating several key features:

Responsive Layout: Built with Bootstrap 5, the site offers a seamless viewing experience across desktops, tablets, and mobile devices.
Dynamic Theme Toggle: A user-friendly button allows switching between a sleek dark mode and a vibrant light mode. Your theme preference is saved in local storage for a consistent experience across sessions.
Smooth Loading Overlay: A subtle pre-loading animation enhances the initial user experience by gracefully hiding content until the page is ready.
Interactive Navbar: The navigation bar intelligently adapts and changes appearance as you scroll, providing a sticky and visually appealing header.
Engaging Product Showcase: A dedicated gallery section highlights the SmartWatch Pro from various angles and in different contexts, drawing visitors deeper into the product's design.
Customer Testimonials: Features a section for genuine feedback from happy customers, adding credibility and social proof.
Scroll-Triggered Animations: Elements are introduced with smooth fade, slide, and zoom animations as the user scrolls, adding a modern and dynamic feel to the content.

Live Demo

[View the Live SmartWatch Pro Website Here](https://mansikatoch315.github.io/smartwatch-pro-website/)
*(**Important:** You will need to enable GitHub Pages for your repository to get this link working. Go to your GitHub repo -> Settings -> Pages -> Select `main` branch and `/root` folder, then save. It might take a few minutes for the site to deploy.)*

Technologies Used

HTML5: For the core structure and content.
CSS3 (with SASS/SCSS): For all styling, enabling a maintainable and modular stylesheet approach with variables for easy theme customization.
JavaScript (ES6+): Powers the interactive elements, including the theme toggle, loading animation, navbar scroll effect, and scroll-triggered animations.
Bootstrap 5: The primary front-end framework used for responsive grid layouts and UI components.
Font Awesome: For scalable vector icons.
Google Fonts: For custom typography.

Project Structure

smartwatch-pro/
├── css/                  # Contains main CSS and SASS source files
│   ├── style.css         # Compiled CSS for the website
│   └── style.scss        # Main SASS file (compiles to style.css)
│   └── _variables.scss   # SASS variables for colors, fonts, etc.
├── js/                   # Contains JavaScript files
│   └── script.js         # All interactive functionalities
├── images/               # Stores all image assets for the website
│   ├── ...               # Your downloaded product images, hero image, etc.
├── about.html            # About Us page
├── contact.html          # Contact Us page
├── features.html         # Product Features page
├── index.html            # The main landing page
└── README.md             # This file


Getting Started (Local Development)

To get a copy of this project running on your local machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Mansikatoch315/smartwatch-pro-website.git](https://github.com/Mansikatoch315/smartwatch-pro-website.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd smartwatch-pro-website
    ```
3.  Open in your browser:
    Simply open the `index.html` file in your preferred web browser. For a better development experience (e.g., live reloading), consider using an extension like "Live Server" if you're using VS Code.

Customization

Feel free to customize this template for your own projects!

Colors & Typography: All primary colors and fonts are defined as CSS variables (or SASS variables in `_variables.scss`). Adjust these to easily change the site's entire look and feel.
Content: Update the text, images (`images/` folder), and links within the HTML files (`index.html`, `features.html`, `about.html`, `contact.html`) to showcase your specific product, services, or personal brand.
Functionality: The JavaScript (`js/script.js`) is modular and commented, making it easy to extend or modify existing functionalities.




