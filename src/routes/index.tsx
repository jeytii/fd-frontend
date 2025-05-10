import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section>
      <h1>Lorem ipsum</h1>
    </section>
  )
}
