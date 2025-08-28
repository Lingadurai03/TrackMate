# 📱 TrackMate

**TrackMate** is a personal **activity & habit tracker** app built with **React Native + Expo**.  
It helps users stay consistent with their daily routines like:

✅ Drinking water  
✅ Working out  
✅ Completing daily tasks  
✅ Tracking meals & food habits  
✅ Building healthy lifestyle patterns

Designed with **clean architecture (FSD)** to ensure scalability and maintainability.

---

## 🚀 Tech Stack

- [Expo](https://expo.dev/) (React Native Framework)
- [Expo Router](https://expo.github.io/router/docs) (File-based routing)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS + NativeWind](https://www.nativewind.dev/) (Styling)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (Animations)
- [ESLint + Prettier](https://eslint.org/) (Linting & formatting)
- [Husky + lint-staged](https://typicode.github.io/husky/) (Git hooks)
- [Feature-Sliced Design](https://feature-sliced.design/) (Project architecture)

---

## 📂 Project Structure

```bash
src/
  app/       # Expo Router pages (navigation)
  entities/  # Domain models (e.g., Task, Activity, FoodLog)
  features/  # UI + logic for tracking habits & activities
  shared/    # Shared components, hooks, utils, libs
  widgets/   # Composed UI blocks (dashboards, trackers)
```
