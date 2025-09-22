# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a Hugo theme for recipe-sharing websites, specifically designed for community solidarity canteen sites. Based on Hyas theme with Bootstrap 5 and Vue.js 2. Supports recipe quantity calculations, multi-day event planning, ingredient management, and PDF export functionality.

## Repository Structure

This project consists of two separate repositories:

1. **Theme Repository** (current directory): `/home/geo/Developpement/ENKA-COOKBOOK/hugo-cookbook-theme/`
   - Contains the Hugo theme files
   - Layouts, partials, assets, and template functions
   - Theme configuration and documentation

2. **Content Repository**: `/home/geo/Developpement/ENKA-COOKBOOK/enka-cookbook-site/`
   - Contains the actual content (recipes, events, ingredients)
   - Site configuration and content management
   - Uses the theme from this repository

## Key Commands

### Hugo Development
```bash
# Build the site
hugo

# Start development server
hugo server

# Start with specific exampleSite
hugo server -s exampleSite/

# Clean build
hugo --cleanDestinationDir
```


### Package Management
```bash
# Install dependencies
npm install

# Use with Bun (alternative to npm)
bun install
```

## Architecture Overview

### Core Content Types
- **Recettes (Recipes)**: Individual recipes with ingredient quantities that scale based on serving size
- **Événements (Events)**: Multi-day events with menus and recipes
- **Ingrédients**: Centralized ingredient management system with JSON data files
- **Catégories**: Recipe categorization system

### Key Layout Directories
- `layouts/_default/`: Base layouts and single pages
- `layouts/evenements/`: Event-specific layouts with ingredient calculation logic
- `layouts/partials/`: Reusable components and template functions
- `layouts/docs/`: Documentation pages

### Template Functions
- `layouts/partials/functions/quantite-converter.html`: Quantity scaling calculations
- `layouts/partials/functions/ingredients-group-builder.html`: Ingredient grouping logic
- `layouts/partials/functions/format-qty.html`: Quantity formatting utilities

### Output Formats
Multiple output formats configured in `hugo.yml`:
- HTML pages
- JSON outputs for ingredients
- PDF-optimized layouts for printing


## Build System
- Hugo static site generator (v0.142.0+)
- Bootstrap 5 for styling
- Vue.js 3 for interactive components
- Sveltia (Decap CMS fork) integration for content management

## Development Notes
- Site is primarily in French
- GPL-3.0 licensed
- Uses custom output formats for ingredient JSON data
- Print-optimized layouts for event planning
- No traditional test framework - manual testing through Hugo build

## Coding Rules
- Be DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid)
- Keep code modular and reusable
- Follow the Single Responsibility Principle (SRP)
- Keep code clean and maintainable
- Be careful don't break anything when refactoring
- Act as senior developper
