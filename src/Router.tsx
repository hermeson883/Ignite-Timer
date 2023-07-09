import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Index'
import { History } from './pages/History/History'
import { DefaultLayout } from './layouts/defaultLayout/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Todo mundo que acessar o '/' como caminho recebera o componente DefaultLayout */}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
