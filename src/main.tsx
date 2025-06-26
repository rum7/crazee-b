import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'

import App from './App.tsx'
import { ErrorPage } from './components/pages/error/ErrorPage.tsx'
import { OrderPage } from './components/pages/order/OrderPage.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
