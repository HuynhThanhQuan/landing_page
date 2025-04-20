# Curious Machine Landing Page

A modern, responsive landing page for Curious Machine, showcasing data science consulting services, courses, and portfolio.

## Features

- Responsive design that works on all devices
- Modern dark blue color scheme
- Smooth scrolling navigation
- Dynamic portfolio and blog sections
- Contact form with validation
- Social media integration
- Elegant animations and transitions

## Project Structure

```
landing_page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── images/             # Directory for images
    ├── portfolio/      # Portfolio images
    ├── blog/           # Blog post images
    └── logo.png        # Company logo
```

## Setup Instructions

1. Clone this repository
2. Create an `images` directory and add your images:
   - Portfolio images (portfolio1.jpg, portfolio2.jpg, etc.)
   - Blog post images (blog1.jpg, blog2.jpg, etc.)
   - Company logo (logo.png)
3. Update the content in `script.js`:
   - Replace portfolio data with your actual projects
   - Update blog post data with your actual blog content
4. Customize the contact form to point to your backend service
5. Update social media links in the footer
6. Replace placeholder text with your actual content

## Customization

### Colors
The color scheme can be modified in the `:root` section of `styles.css`:
```css
:root {
    --primary-color: #0A192F;
    --secondary-color: #64FFDA;
    --text-color: #CCD6F6;
    --text-secondary: #8892B0;
    --background-color: #020C1B;
    --card-background: #112240;
}
```

### Content
- Update portfolio items in `script.js`
- Modify blog posts in `script.js`
- Edit text content in `index.html`
- Add your own images to the `images` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 