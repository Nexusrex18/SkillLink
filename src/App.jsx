import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceBooking from './pages/ServiceBooking';
import ServiceDetail from './pages/ServiceDetail';
import AuthPage from './pages/AuthPage';
import ProfessionalWorkerForm from './pages/ProfessionalWorkerForm';
import Chatbot from './pages/Chatbot';
import ChatPage from './pages/ChatPage';
import ProfileSection from './components/ProfileSection';
import ProfessionalWorkerProfile from './components/ProfessionalWorkerProfile';
import JobHistory from './components/JobHistory';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/services" element={<ServiceBooking />} />
        <Route path='/services/:serviceSlug' element={<ServiceDetail />} />
        <Route path='signup' element={<AuthPage />} />
        <Route path='workerLogin' element={<ProfessionalWorkerForm />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/user-profile' element={<ProfileSection />} />
        <Route path='/worker-profile' element={<ProfessionalWorkerProfile />} />
        <Route path='/job-history' element={<JobHistory />} />
        <Route path='/pay' element={<PaymentPage />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;