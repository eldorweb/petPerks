import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Router from './components/router.tsx'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<Router/>
</BrowserRouter>
)
