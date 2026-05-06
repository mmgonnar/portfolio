# Project Status - May 2026

## Completed Features

### 1. Brief Form (Web Design)
- Fixed Next button disabled issue in StepReferences
- Added proper validation for all steps
- Fixed type errors (brandColors, etc.)
- Location-based currency detection (MXN/USD)
- Budget slider with abbreviated labels on mobile
- Added currency field to backend submission
- Fixed success page navigation
- Hydration fixes for language detection

### 2. Backend Integration
- API endpoint: `/api/v1/send-brief`
- Fields sent: name, email, phone, company, projectType, projectName, projectDescription, hasExistingSite, existingSiteUrl, features (array), featuresDetail, targetAudience, competitors, visualStyle, visualReferences, brandColors, brandAssetsReady, budget, currency, timeline, flexibleBudget, additionalNotes, files, locale

### 3. Contact Form
- Added console logs for debugging
- Fixed API URL (needs Vercel env variable)

### 4. Digital Business Card
- Created at `/card`
- Fixed layout, no scroll
- No profile picture
- Compact brutalist design matching branding

### 5. Hydration Fixes
- Added `suppressHydrationWarning` to HTML
- Added `mounted` state to: Navbar, LanguageSwitcher, BriefIntro, BriefIntroCards, BriefIntroDescription, Copyright, StepBudget

## Pending Issues

1. **Contact Form** - NEXT_PUBLIC_RENDER_URI not set in Vercel, need to add env variable
2. **Brief Form** - `files` field validation on backend needs fix (accept empty list)
3. **Business Card** - Add QR code generation for sharing

## Environment Variables (Vercel)
- `NEXT_PUBLIC_RENDER_URI` = https://portfolio-backend-tarb.onrender.com

## Testing URLs
- Main: https://mmgonnar.com
- Brief: https://mmgonnar/web-design
- Card: https://mmgonnar/card