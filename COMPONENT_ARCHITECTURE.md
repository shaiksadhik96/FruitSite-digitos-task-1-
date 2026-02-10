## FruitShoppe Component Architecture

### 📊 Component Hierarchy

```
App (Router Setup)
├── Navigation (Header)
│   ├── Logo
│   ├── Nav Links
│   └── Hamburger Menu (mobile)
├── Routes
│   ├── Home Page
│   │   ├── Hero Section
│   │   │   ├── Hero Text
│   │   │   └── Hero Image (animated)
│   │   ├── Features Section
│   │   │   └── Feature Cards (4x)
│   │   ├── Featured Products Section
│   │   │   ├── SectionTitle
│   │   │   └── ProductCards (6x)
│   │   └── About Section
│   │       ├── About Text
│   │       └── About Image
│   │
│   ├── Products Page
│   │   ├── SectionTitle
│   │   ├── Filter Buttons (by category)
│   │   ├── Products Grid
│   │   │   └── ProductCards (12x)
│   │   └── CTA Section
│   │
│   ├── Checkout Page
│   │   ├── SectionTitle
│   │   ├── Checkout Container
│   │   │   ├── Order Summary
│   │   │   │   ├── Subtotal
│   │   │   │   ├── Shipping
│   │   │   │   ├── Tax
│   │   │   │   └── Total
│   │   │   └── Checkout Form
│   │   │       ├── Personal Info Section
│   │   │       ├── Address Section
│   │   │       ├── Payment Section
│   │   │       └── Submit Button
│   │   └── CTA Section
│   │
│   ├── Services Page
│   │   ├── SectionTitle
│   │   ├── Services Grid
│   │   │   └── Service Cards (4x)
│   │   ├── Quality Section
│   │   │   └── Quality Cards (4x)
│   │   └── CTA Section
│   │
│   ├── Team Page
│   │   ├── SectionTitle
│   │   ├── Team Grid
│   │   │   └── Team Cards (6x)
│   │   ├── Values Section
│   │   │   └── Value Cards (4x)
│   │   └── Join Team CTA
│   │
│   └── Thank You Page
│       ├── Success Checkmark SVG (animated)
│       ├── Confetti Elements
│       ├── Success Message
│       ├── Order Details
│       ├── Next Steps
│       ├── Action Buttons
│       └── Support Info
│
└── Footer
    ├── About Section
    ├── Quick Links
    ├── Contact Info
    ├── Social Links
    └── Copyright
```

---

### 🧩 Component Details

#### **App Component**
- **File**: `src/App.tsx`
- **Purpose**: Main router component
- **Responsibilities**:
  - Sets up React Router
  - Lazily loads pages
  - Provides Suspense boundary

#### **Navigation Component**
- **File**: `src/components/Navigation.tsx`
- **Props**: None
- **State**: `isOpen` (hamburger menu)
- **Features**:
  - Sticky navigation
  - Mobile hamburger menu
  - Animated logo
  - Responsive nav links
- **Animations**:
  - Slide in/out menu
  - Hover underline on links
  - Scale on hover

#### **Footer Component**
- **File**: `src/components/Footer.tsx`
- **Props**: None
- **Features**:
  - Multi-column layout
  - Company info
  - Quick links
  - Contact section
  - Social links
- **Animations**:
  - Staggered reveal
  - Hover scale on social links

#### **ProductCard Component**
- **File**: `src/components/ProductCard.tsx`
- **Props**:
  - `product: Product`
  - `index: number`
- **Features**:
  - Product image with hover zoom
  - Category badge
  - Product name and description
  - Rating display
  - Price with gradient
  - Stock badge
  - Add to cart button
- **Animations**:
  - Staggered entrance
  - Image zoom on hover
  - Button scale on interact

#### **SectionTitle Component**
- **File**: `src/components/SectionTitle.tsx`
- **Props**:
  - `title: string`
  - `subtitle?: string`
- **Features**:
  - Large animated heading
  - Gradient underline
  - Optional subtitle
- **Animations**:
  - Fade + slide in
  - Underline scale animation

#### **LoadingSpinner Component**
- **File**: `src/components/LoadingSpinner.tsx`
- **Props**: None
- **Features**:
  - Rotating spinner
  - Loading text with pulse
- **Animations**:
  - Continuous rotation
  - Text opacity pulse

---

### 📄 Page Components

#### **Home Page**
- **File**: `src/pages/Home.tsx`
- **Route**: `/`
- **Sections**:
  1. Hero section with animated content
  2. Features grid (4 items)
  3. Featured products (6 items)
  4. About company section
- **Animations**: Complex staggered animations

#### **Products Page**
- **File**: `src/pages/Products.tsx`
- **Route**: `/products`
- **Features**:
  - Category filtering
  - 12 products grid
  - Active filter button styling
  - Product count display
- **State**: `filteredProducts`, `selectedCategory`

#### **Checkout Page**
- **File**: `src/pages/Checkout.tsx`
- **Route**: `/checkout`
- **Features**:
  - Two-column layout
  - Order summary sticky sidebar
  - Form with validation
  - Mock payment processing
- **State**: `formData`, `errors`, `isSubmitting`
- **Validation**:
  - Email format
  - Phone number (10 digits)
  - Card number (16 digits)
  - Expiry date (MM/YY)
  - CVV (3 digits)

#### **Services Page**
- **File**: `src/pages/Services.tsx`
- **Route**: `/services`
- **Sections**:
  1. Services grid (4 cards)
  2. Quality standards (4 cards)
  3. CTA section

#### **Team Page**
- **File**: `src/pages/Team.tsx`
- **Route**: `/team`
- **Sections**:
  1. Team members grid (6 cards)
  2. Company values (4 cards)
  3. Join team CTA

#### **ThankYou Page**
- **File**: `src/pages/ThankYou.tsx`
- **Route**: `/thank-you`
- **Features**:
  - Animated success checkmark
  - Confetti animations
  - Order details
  - Next steps
  - Action buttons
  - Support contact info

---

### 🎨 Styling Architecture

#### **Global Styles**
- **File**: `src/styles/global.css`
- **Contains**:
  - CSS custom properties (variables)
  - Typography rules
  - Utility classes
  - Responsive grid systems
  - Button styles
  - Card styles

#### **Component Styles**
- Each component has its own CSS file
- Example: `Navigation.css`, `ProductCard.css`
- Encapsulated styles per component

#### **Page Styles**
- Shared: `src/pages/Pages.css`
- Contains all page-specific styles
- Responsive breakpoints
- Layout patterns

---

### 🔄 Data Flow

```
App Router
    ↓
Page Component
    ↓
Display Components
    ↓
Reusable Components
    ↓
DOM
```

**Example: Products Page**
```
Products Page
    ↓
Filter State (category)
    ↓
Mock Products Data
    ↓
Filter Logic
    ↓
ProductCard Components (mapped)
    ↓
Render Grid
```

---

### 📦 TypeScript Interfaces

```typescript
// Product Interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
}

// Checkout Data Interface
interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
```

---

### 🔀 State Management

#### **Component-Level State**
- `Navigation`: `isOpen` (menu)
- `Products`: `filteredProducts`, `selectedCategory`
- `Checkout`: `formData`, `errors`, `isSubmitting`

#### **Context** (Not Used)
- All state is local to components
- Ideal for: Adding global cart context later

#### **Future**: Redux/Zustand for global state
- Shopping cart
- User authentication
- Order history

---

### 🎯 Component Communication

#### **Props Down**
- Page → Components: `product`, `index`, `title`
- Components → Sub-components: Data and callbacks

#### **Events Up**
- Form submit in Checkout
- Filter click in Products
- Menu toggle in Navigation

#### **Dynamic Routes**
- Using React Router params (could be added)
- Example: `/product/:id`

---

### 🚀 Performance Optimizations

#### **Code Splitting**
- Each page lazily loaded
- Reduces initial bundle

#### **Lazy Components**
```typescript
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
// etc...
```

#### **Image Optimization**
- `loading="lazy"` on images
- External URL optimization

#### **Memoization** (Could add)
```typescript
export default React.memo(ProductCard);
```

---

### 🔧 Extensibility

#### **Easy to Add**
- New pages: Create in `src/pages/`
- New components: Create in `src/components/`
- New routes: Add to `App.tsx`
- New products: Edit `mockProducts.ts`

#### **Future Features**
- Shopping cart context
- User authentication
- Backend API integration
- Admin dashboard
- Search functionality
- Wishlist

---

### 📊 Component Statistics

| Category | Count |
|----------|-------|
| Page Components | 6 |
| Reusable Components | 4 |
| Utility Components | 2 |
| Style Files | 11 |
| Type Definitions | 1 |
| Data Files | 1 |
| **Total** | **25+** |

---

### 🎯 Component Best Practices Used

✅ Single Responsibility Principle  
✅ Props for data flow  
✅ TypeScript interfaces  
✅ Proper component naming  
✅ Encapsulated styles  
✅ Reusable components  
✅ Clean code comments  
✅ Responsive design  
✅ Animation patterns  
✅ Error handling  

---

This architecture makes the project:
- **Scalable**: Easy to add new features
- **Maintainable**: Clear structure and organization
- **Testable**: Components are isolated
- **Performant**: Optimized rendering
- **Extensible**: Patterns for growth
