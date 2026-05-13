/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GeneralDentistryPage } from './pages/GeneralDentistryPage';
import { CosmeticDentistryPage } from './pages/CosmeticDentistryPage';
import { SmileGalleryPage } from './pages/SmileGalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/general-dentistry" element={<GeneralDentistryPage />} />
            <Route path="services/cosmetic-dentistry" element={<CosmeticDentistryPage />} />
            <Route path="smile-gallery" element={<SmileGalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
