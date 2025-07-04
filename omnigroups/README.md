# OmniGroups by TheJaySmith

**Your One-Stop-Shop for Visual Discovery**

A modern, beautiful React application for discovering and exploring curated images organized into different categories. Built with React and featuring a stunning dark theme with gradient accents.

## 🌟 Features

### Core Categories
- **📚 Collections**: Curated image collections like "Trending Now", "Most Popular", "New Releases"
- **📺 Streaming**: Major streaming services (Netflix, Disney+, HBO Max, Hulu, Peacock, etc.)
- **🎬 Genres**: Movie and TV genres (Action, Adventure, Comedy, Drama, Sci-Fi, etc.)
- **👤 Users**: Featured user profiles and their collections

### Key Functionality
- **🔍 Advanced Search**: Real-time search across all categories
- **🏷️ Category Filtering**: Filter content by specific categories
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **⚡ Fast Loading**: Optimized images with lazy loading and fallbacks
- **🎨 Modern UI**: Dark theme with beautiful gradients and animations
- **♥️ Interactive Cards**: Hover effects and action buttons for each item

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd omnigroups
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## 📁 Project Structure

```
omnigroups/
├── src/
│   ├── components/
│   │   ├── Header.js          # Site header with logo and search
│   │   ├── Hero.js            # Hero section with stats and CTA
│   │   ├── ImageCard.js       # Individual image cards
│   │   └── CategorySection.js # Category sections (future use)
│   ├── App.js                 # Main application component
│   ├── App.css                # Complete styling
│   ├── genre-collection.json  # Genre data
│   ├── streaming-collection.json # Streaming service data
│   └── livetv-collection.json # Live TV data
├── public/
└── package.json
```

## 🎨 Design Features

### Visual Design
- **Dark Theme**: Modern dark background with excellent contrast
- **Gradient Accents**: Beautiful blue-purple gradients throughout
- **Card-Based Layout**: Clean, organized card grid system
- **Hover Effects**: Smooth animations and interactive elements
- **Typography**: Clean, readable fonts with proper hierarchy

### Technical Features
- **React Hooks**: Modern React with useState for state management
- **Responsive Grid**: CSS Grid with auto-fit columns
- **Image Optimization**: Lazy loading, error handling, and fallbacks
- **Search & Filter**: Real-time filtering with instant results
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Customization

### Adding New Categories
To add new categories, modify the `allData` array in `App.js`:

```javascript
{
  id: 'unique-id',
  name: 'Display Name',
  category: 'Category Type',
  backgroundImageURL: 'https://image-url.jpg',
  textColor: '#FFFFFF',
  backgroundColor: '#fallback-color'
}
```

### Modifying Styles
The main styles are in `App.css`. Key customization areas:
- Color scheme: Modify CSS custom properties
- Layout: Adjust grid properties in `.image-grid`
- Animations: Customize transition and animation properties

## 📊 Data Sources

The application uses three main data files:
- `genre-collection.json`: 15 movie/TV genres with themed images
- `streaming-collection.json`: 8 major streaming services
- `livetv-collection.json`: Live TV categories (UK, US)

Additional sample data for Collections and Users is generated in the application.

## 🌐 Live Demo

The application runs on `http://localhost:3000` during development and includes:
- Fully functional search
- Category filtering
- Responsive design
- Image loading states
- Error handling

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Advanced styling with Grid, Flexbox, and animations
- **SVG Icons**: Crisp, scalable icons
- **JSON Data**: Structured data for content management

## 📝 License

© 2024 OmniGroups by TheJaySmith. All rights reserved.

## 🤝 Contributing

This is a demonstration project showcasing modern React development and UI/UX design principles. Feel free to use it as a starting point for your own projects!

---

**Built with ❤️ using React and modern web technologies**
