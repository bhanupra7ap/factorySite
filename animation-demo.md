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
