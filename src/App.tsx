import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import CounselorDashboard from "./pages/dashboards/CounselorDashboard";
import InstituteDashboard from "./pages/dashboards/InstituteDashboard";
import Chatbot from "./pages/student/Chatbot";
import BookSession from "./pages/student/BookSession";
import PeerSupport from "./pages/student/PeerSupport";
import ResourcesHub from "./pages/student/ResourcesHub";
import Bookings from "./pages/counselor/Bookings";
import Records from "./pages/counselor/Records";
import Students from "./pages/counselor/Students";
import CounselorManagement from "./pages/institute/CounselorManagement";
import Analytics from "./pages/institute/Analytics";
import InstituteStudents from "./pages/institute/Students";
import Settings from "./pages/institute/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Student Routes */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student/chatbot" element={<Chatbot />} />
          <Route path="/student/book-session" element={<BookSession />} />
          <Route path="/student/peer-support" element={<PeerSupport />} />
          <Route path="/student/resources" element={<ResourcesHub />} />
          
          {/* Counselor Routes */}
          <Route path="/counselor-dashboard" element={<CounselorDashboard />} />
          <Route path="/counselor/bookings" element={<Bookings />} />
          <Route path="/counselor/records" element={<Records />} />
          <Route path="/counselor/students" element={<Students />} />
          
          {/* Institute Routes */}
          <Route path="/institute-dashboard" element={<InstituteDashboard />} />
          <Route path="/institute/counselors" element={<CounselorManagement />} />
          <Route path="/institute/analytics" element={<Analytics />} />
          <Route path="/institute/students" element={<InstituteStudents />} />
          <Route path="/institute/settings" element={<Settings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
