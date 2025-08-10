#!/bin/bash
# filepath: /Users/bhanu/Desktop/factorySite/z_fix.sh

echo "🎬 Adding smooth PowerPoint-style animation and updating webpage colors..."

# Backup the original App.css
cp src/App.css src/App.css.backup
echo "✅ Backup created: src/App.css.backup"

# Create the updated App.css with smooth animation and new color scheme
cat > src/App.css << 'EOF'
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fcf6f2;
}

.main-content {
  flex: 1;
  min-height: calc(100vh - 130px);
  background: #fcf6f2;
}

.page {
  min-height: calc(100vh - 130px);
  background: #fcf6f2;
}

.header-image {
  width: 100%;
  height: 30vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -130px;
  padding-top: 130px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.header-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.header-title {
  position: relative;
  z-index: 2;
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  text-align: center;
  
  /* Smooth PowerPoint-style emerging animation */
  opacity: 0;
  transform: translateY(50px) scale(0.8);
  animation: smoothEmerge 2s ease-out 0.5s forwards;
}

/* Single smooth emerging animation */
@keyframes smoothEmerge {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Alternative animations - uncomment to use different effects */

/* Slide from left animation */
.header-title.slide-left {
  transform: translateX(-100px) scale(0.8);
  animation: slideFromLeft 1.5s ease-out 0.3s forwards;
}

@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Zoom and fade animation */
.header-title.zoom-fade {
  transform: scale(0.5);
  animation: zoomFade 2s ease-out 0.4s forwards;
}

@keyframes zoomFade {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Typewriter effect */
.header-title.typewriter {
  border-right: 3px solid #ffffff;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typewriter 2s steps(40) 0.5s forwards,
             blinkCursor 0.8s infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blinkCursor {
  0%, 50% { border-color: #ffffff; }
  51%, 100% { border-color: transparent; }
}

/* Bounce in animation */
.header-title.bounce-in {
  transform: scale(0.3) translateY(-100px);
  animation: bounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-100px);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05) translateY(10px);
  }
  70% {
    transform: scale(0.98) translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Rotate and fade animation */
.header-title.rotate-fade {
  transform: rotateY(90deg) scale(0.5);
  animation: rotateFade 1.6s ease-out 0.4s forwards;
}

@keyframes rotateFade {
  0% {
    opacity: 0;
    transform: rotateY(90deg) scale(0.5);
  }
  60% {
    opacity: 0.8;
    transform: rotateY(-10deg) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1);
  }
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  background: #fcf6f2;
}

.content h2 {
  color: #ff8c00;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.content h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff8c00, #ff6b00);
  border-radius: 2px;
}

.content p {
  color: #333;
  line-height: 1.8;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #ff8c00;
  margin-top: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .header-image {
    height: 200px;
    margin-bottom: 2rem;
    margin-top: -110px;
    padding-top: 110px;
  }
  
  .header-title {
    font-size: 2.5rem;
  }
  
  .content {
    padding: 0 1rem;
  }
  
  .content h2 {
    font-size: 2rem;
  }
  
  .content p {
    font-size: 1rem;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .header-image {
    height: 150px;
  }
  
  .header-title {
    font-size: 2rem;
  }
}
EOF

echo "✅ Updated src/App.css with smooth animation and new color scheme"

# Update index.css for consistent background
cat > src/index.css << 'EOF'
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fcf6f2;
  min-height: 100vh;
  color: #000;
}

#root {
  min-height: 100vh;
  background: #fcf6f2;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(252, 246, 242, 0.3);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff8c00, #ff6b00);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #ff6b00, #ff8c00);
}
EOF

echo "✅ Updated src/index.css with consistent background color"

# Update Navbar styles
cat > src/components/Navbar.css << 'EOF'
.navbar {
  background: #fcf6f2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ff8c00;
  font-size: 1.8rem;
  font-weight: bold;
}

.navbar-logo img {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.navbar-menu a:hover {
  color: #ff8c00;
  background: rgba(255, 140, 0, 0.1);
}

.navbar-menu a.active {
  color: #ff8c00;
  font-weight: 600;
}

.navbar-menu a.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: linear-gradient(90deg, #ff8c00, #ff6b00);
  border-radius: 2px;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  background: none;
  border: none;
}

.navbar-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }
  
  .navbar-toggle {
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 80px;
    left: -100%;
    flex-direction: column;
    background: #fcf6f2;
    width: 100%;
    padding: 2rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
    gap: 0;
  }
  
  .navbar-menu.active {
    left: 0;
  }
  
  .navbar-menu li {
    margin: 0.5rem 0;
    text-align: center;
  }
  
  .navbar-menu a {
    display: block;
    padding: 1rem;
    font-size: 1.2rem;
  }
  
  .navbar-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .navbar-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .navbar-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
EOF

echo "✅ Created src/components/Navbar.css with matching background"

# Update Footer styles
cat > src/components/Footer.css << 'EOF'
.footer {
  background: #fcf6f2;
  border-top: 2px solid #ff8c00;
  margin-top: auto;
  padding: 2rem 0;
  color: #333;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #ff8c00;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.footer-section p,
.footer-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #555;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #ff8c00;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ff8c00;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #ff6b00;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 140, 0, 0.3);
  padding-top: 1.5rem;
  text-align: center;
  color: #666;
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
EOF

echo "✅ Created src/components/Footer.css with matching background"

# Create a demo file showing the updated animation
cat > animation-demo.md << 'EOF'
# Header Animation Options

## Default Animation (Already Applied)
The default smooth emerging animation is now active on all header titles.

## Changes Made:
- Single smooth transition (no jumps)
- Entire webpage background: #fcf6f2 (soft cream)
- Navbar and Footer background: #fcf6f2 (matching)
- Content boxes: Semi-transparent white with backdrop blur
- Scrollbar styling updated to match theme

## Alternative Animations
To use different animations, add these classes to your header-title elements:

### 1. Slide from Left
```tsx
<h1 className="header-title slide-left">Your Title</h1>
```

### 2. Zoom and Fade
```tsx
<h1 className="header-title zoom-fade">Your Title</h1>
```

### 3. Typewriter Effect
```tsx
<h1 className="header-title typewriter">Your Title</h1>
```

### 4. Bounce In
```tsx
<h1 className="header-title bounce-in">Your Title</h1>
```

### 5. Rotate and Fade
```tsx
<h1 className="header-title rotate-fade">Your Title</h1>
```

## Animation Details
- Default: Smooth translateY + scale animation
- Duration: 2s with ease-out timing
- Delay: 0.5s for better page load experience
- No intermediate keyframes for seamless motion
EOF

echo "✅ Created animation-demo.md with updated information"

# Check if the changes were applied successfully
if [ -f "src/App.css" ] && [ -f "src/index.css" ]; then
    echo "🎉 Animation and color scheme update complete!"
    echo ""
    echo "📋 What was changed:"
    echo "   • Single smooth emerging animation (no jumps)"
    echo "   • Entire webpage background: #fcf6f2 (soft cream)"
    echo "   • Navbar background: #fcf6f2 (matching)"
    echo "   • Footer background: #fcf6f2 (matching)"
    echo "   • Content boxes: Semi-transparent with backdrop blur"
    echo "   • Updated scrollbar styling"
    echo "   • Alternative animations still available"
    echo ""
    echo "🚀 Your header titles now have smooth PowerPoint-style animations!"
    echo "🎨 The entire webpage now has a soft cream (#fcf6f2) background!"
    echo "🔄 Restart your dev server to see the changes: npm run dev"
else
    echo "❌ Error: Could not update CSS files"
    exit 1
fi