import './App.css'
import { BlinkXButton } from './components/BlinkXButton'

function App() {
  return (
    <main className="app-shell">
      <section className="app-hero">
        <p className="app-kicker">blinkX Design System</p>
        <h1>Fresh Storybook starter</h1>
        <p className="app-copy">
          A clean React, Vite, Storybook, and Chromatic workspace for building
          the next version of your component library.
        </p>
        <div className="app-actions">
          <BlinkXButton size="lg">Get started</BlinkXButton>
          <BlinkXButton size="lg" variant="secondary">
            View Storybook
          </BlinkXButton>
        </div>
      </section>
    </main>
  )
}

export default App
