import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Router from './components/router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<Router/>
</BrowserRouter>
)
