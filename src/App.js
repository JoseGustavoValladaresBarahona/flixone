import React from "react"
import GlobalEstilos from "./Global"
import Nuevo from "./Pages/Nuevo"
import Home from "./Pages/Home"
import NuevaCategoria from "./Pages/NuevaCategoria"
import NoPage from './Pages/NoPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./Pages/Layout"

function App() {
  return (
  <Router>
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/Nuevo' element={<Nuevo />} />
        <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
        <Route path='*' element={<NoPage />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App
