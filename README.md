# Radhika Beauty Salon

A modern, responsive website for Radhika Beauty Salon built with Node.js, Express, and EJS templating engine. The website features a cinematic hero section, elegant design, and professional styling perfect for a beauty salon business.

## Project Overview

This is a professional beauty salon website designed to showcase services and attract customers. The site features a sophisticated dark theme with elegant typography, cinematic lighting effects, and a responsive design that works across all devices.

## Features

### Design & UI
- Responsive design that works on desktop, tablet, and mobile devices
- Cinematic hero section with dark theme and professional typography
- Elegant cursive logo with animated gradient effects
- Beautiful gradient navbar with blur effects
- Professional color scheme with gold accents
- Smooth animations and hover effects

### Technical Features
- Server-side rendering with EJS templates
- Static file serving for CSS, JavaScript, and images
- Modular code structure with partials
- Cross-browser compatibility
- SEO-friendly structure

### Navigation
- Fixed navigation bar with smooth scrolling
- Centered brand logo with hover animations
- Responsive mobile navigation with hamburger menu
- Clean navigation links with underline effects

## Technology Stack

- **Backend**: Node.js with Express.js framework
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with Bootstrap 5
- **Fonts**: Google Fonts (Poppins, Dancing Script, Playfair Display, Cormorant Garamond)
- **Package Manager**: npm

## Project Structure

```
cognifyz-task-3/
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── README.md             # Project documentation
├── public/               # Static files
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   ├── js/
│   │   └── script.js     # Client-side JavaScript
│   └── images/           # Image assets
│       └── indian-bride.jpg
└── views/                # EJS templates
    ├── index.ejs         # Homepage template
    ├── about.ejs         # About page template
    ├── contact.ejs       # Contact page template
    ├── services.ejs      # Services page template
    └── partials/         # Reusable template components
        ├── header.ejs    # Header partial
        └── footer.ejs    # Footer partial
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository or download the project files
```bash
git clone <repository-url>
cd cognifyz-task-3
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
node app.js
```

4. Open your browser and visit
```
http://localhost:3000
```

## Dependencies

### Production Dependencies
- **express**: ^5.1.0 - Fast, unopinionated web framework for Node.js
- **ejs**: ^3.1.10 - Embedded JavaScript templating engine

### External Resources
- Bootstrap 5.3.2 - CSS framework for responsive design
- Font Awesome 6.4.0 - Icon library
- Google Fonts - Custom typography

## Configuration

### Server Configuration
The server runs on port 3000 by default. You can change this by setting the PORT environment variable:

```bash
PORT=8080 node app.js
```

### Static Files
Static files are served from the `public` directory and are accessible at the root URL:
- CSS files: `/css/style.css`
- JavaScript files: `/js/script.js`
- Images: `/images/filename.jpg`

## Styling & Design

### Color Palette
- **Primary Background**: Black (#000000)
- **Navbar Gradient**: Blue to dark gray gradient
- **Accent Colors**: Gold (#d4af37), Light blue (#94BBE9)
- **Text Colors**: White (#ffffff), Light gray (#b8b8b8)

### Typography
- **Logo**: Dancing Script (cursive, animated gradient)
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Poppins (sans-serif, clean)
- **Decorative**: Cormorant Garamond (serif, italic)

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## Development

### File Organization
- **app.js**: Main Express application setup and routing
- **views/**: EJS templates for different pages
- **views/partials/**: Reusable template components
- **public/css/**: Custom stylesheets
- **public/js/**: Client-side JavaScript
- **public/images/**: Static image assets

### Adding New Pages
1. Create a new EJS file in the `views/` directory
2. Add a route in `app.js`
3. Include header and footer partials for consistency

### Styling Guidelines
- Use consistent spacing and typography
- Maintain the dark theme throughout
- Follow responsive design principles
- Keep animations smooth and professional

## Browser Support

The website is tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Optimized CSS with minimal redundancy
- Compressed images and assets
- Efficient font loading
- Minimal JavaScript for better performance
- Responsive images for different screen sizes

## Deployment

### Production Deployment
1. Set environment variables:
```bash
NODE_ENV=production
PORT=80
```

2. Install production dependencies:
```bash
npm install --production
```

3. Start the application:
```bash
node app.js
```

### Hosting Recommendations
- Heroku
- Vercel
- Netlify
- AWS EC2
- DigitalOcean

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. See the package.json file for details.

## Support

For support or questions about this project, please create an issue in the repository or contact the development team.

## Changelog

### Version 1.0.0
- Initial release
- Responsive design implementation
- Cinematic hero section
- Navigation system
- Template structure setup
- Basic styling and animations

---

**Note**: This project is part of Cognifyz internship task 3, demonstrating modern web development practices and responsive design principles.