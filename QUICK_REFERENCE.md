## 🍎 FruitShoppe - Quick Reference Guide

### 🚀 Quick Start (30 seconds)

```bash
# Terminal is already running the dev server
# Open browser at: http://localhost:5173/
```

---

### 🔗 Navigation Map

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page with hero |
| Products | `/products` | Shop fruits with filters |
| Checkout | `/checkout` | Purchase form |
| Services | `/services` | Company info |
| Team | `/team` | Meet the team |
| Thank You | `/thank-you` | Success page |

---

### 📁 Key Files to Edit

```
For styling:        src/styles/global.css
For colors:         --primary-orange, --primary-red in global.css
For products:       src/data/mockProducts.ts
For pages:          src/pages/*.tsx
For components:     src/components/*.tsx
For routing:        src/App.tsx
```

---

### 🎨 CSS Variables Available

```css
/* Colors */
--primary-orange: #f39c12
--primary-red: #e74c3c
--primary-green: #27ae60
--white: #ffffff
--light-gray: #f8f9fa

/* Spacing */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 16px
--radius-xl: 24px

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2)
```

---

### 🔧 Common Tasks

#### Add a New Product
```typescript
// src/data/mockProducts.ts
{
  id: 13,
  name: 'Product Name',
  category: 'Category',
  price: 9.99,
  image: 'https://images.unsplash.com/...',
  description: 'Description',
  rating: 4.8,
  inStock: true
}
```

#### Change Brand Name
```typescript
// src/components/Navigation.tsx
🍎 FruitShoppe  →  Your Name
```

#### Update Colors
```css
/* src/styles/global.css */
--primary-orange: #your-color
--primary-red: #your-color
```

#### Add New Page
```typescript
// 1. Create src/pages/NewPage.tsx
// 2. Add to App.tsx routes
const NewPage = lazy(() => import('./pages/NewPage'));
<Route path="/new" element={<NewPage />} />
// 3. Add link to Navigation.tsx
```

---

### 🎯 Component Props Reference

#### ProductCard
```typescript
<ProductCard 
  product={product}  // Product object
  index={0}          // Array index
/>
```

#### SectionTitle
```typescript
<SectionTitle 
  title="Your Title"
  subtitle="Optional subtitle"
/>
```

#### Navigation
```typescript
// No props needed - handles own state
<Navigation />
```

---

### 🎭 Animation Quick Reference

```typescript
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide from left
initial={{ x: -50, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}

// Scale up
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}

// Hover effect
whileHover={{ scale: 1.05 }}

// Tap/Click effect
whileTap={{ scale: 0.95 }}
```

---

### 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Small Desktop */
@media (max-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1025px) { }
```

---

### 🧪 Test Data for Checkout

```
Name: John Doe
Email: test@example.com
Phone: 1234567890
Address: 123 Main St, City, ST 12345
Card: 1234567890123456
Expiry: 12/25
CVV: 123
```

---

### 💻 Development Commands

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

---

### 📊 File Structure Quick View

```
src/
├── App.tsx              ← Router setup
├── main.tsx             ← Entry point
├── index.css            ← Basic reset
├── App.css              ← App styles (empty)
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Checkout.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   ├── ThankYou.tsx
│   └── Pages.css        ← All page styles
├── components/
│   ├── Navigation.tsx
│   ├── Navigation.css
│   ├── Footer.tsx
│   ├── Footer.css
│   ├── ProductCard.tsx
│   ├── ProductCard.css
│   ├── SectionTitle.tsx
│   ├── SectionTitle.css
│   ├── LoadingSpinner.tsx
│   └── LoadingSpinner.css
├── styles/
│   └── global.css       ← CSS variables
├── types/
│   └── product.ts       ← Interfaces
└── data/
    └── mockProducts.ts  ← Product data
```

---

### 🔄 State Examples

#### Navigation State
```typescript
const [isOpen, setIsOpen] = useState(false);
```

#### Products Filtering
```typescript
const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
const [selectedCategory, setSelectedCategory] = useState('All');
```

#### Checkout Form
```typescript
const [formData, setFormData] = useState<CheckoutData>({...});
const [errors, setErrors] = useState<Partial<CheckoutData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

---

### 🎨 Responsive Grid Classes

```css
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
```

---

### 🔐 Form Validation Patterns

```typescript
// Email validation
pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone (10 digits)
pattern: /^\d{10}$/

// Card number (16 digits)
pattern: /^\d{16}$/

// Expiry (MM/YY)
pattern: /^\d{2}\/\d{2}$/

// CVV (3 digits)
pattern: /^\d{3}$/
```

---

### 📦 ESLint Config

```typescript
// TypeScript type imports
import type { Product } from './types/product';

// Regular imports
import { useState } from 'react';
```

---

### 🚀 Performance Tips

1. **Don't**: Import large images multiple times
2. **Do**: Use mockProducts array for product data
3. **Don't**: Add inline styles
4. **Do**: Use CSS variables
5. **Don't**: Skip TypeScript types
6. **Do**: Use lazy() for pages

---

### 🐛 Common Issues & Fixes

**Issue**: Dev server won't start
```bash
# Kill process and restart
npm run dev
```

**Issue**: Build fails
```bash
# Check TypeScript errors
npm run lint

# Clear cache
rm -rf node_modules
npm install
npm run build
```

**Issue**: Styles not applying
```bash
# Check CSS import in component
import './ComponentName.css';

# Check class name matches CSS
className="component-name"
```

---

### 📚 External Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)

---

### 🎓 What to Try

1. **Change Colors**: Edit global.css variables
2. **Add Product**: Update mockProducts.ts
3. **Modify Text**: Edit page components
4. **Change Animations**: Adjust Framer Motion props
5. **Responsive Test**: Open DevTools - toggle device
6. **Build & Deploy**: npm run build

---

### 🎉 You're All Set!

**Development Server**: http://localhost:5173/  
**Documentation**: See README_PROJECT.md  
**Architecture**: See COMPONENT_ARCHITECTURE.md  

**Happy Coding! 🚀**

---

Last Updated: February 2026  
Version: 1.0.0  
Status: ✅ Production Ready
