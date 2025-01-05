# URL Shortener Frontend

A modern URL shortening application built with React, TypeScript, and Vite.

## Features

- Shorten long URLs into manageable links
- Custom alias support
- Copy to clipboard functionality
- Real-time error handling
- Loading state indicators
- Responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules
- GitHub Actions for CI/CD
- Render for deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd urlShorter
```

2. Install dependencies:
```bash
npm install
```


3. Start development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Deployment

This project uses GitHub Actions for CI/CD and deploys to Render.

### Setup Deployment

1. Create a Render account and service
2. Add the following secrets to GitHub repository:
   - `RENDER_API_KEY`
   - `RENDER_DEPLOY_HOOK`

3. Push to master branch to trigger deployment

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push to the branch: `git push origin feature/NewFeature`
5. Submit a pull request

## License

This project is licensed under the MIT License.
