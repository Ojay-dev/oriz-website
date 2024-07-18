import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "@/context/AuthContext";
import IndexPage from "@/pages/IndexPage";
// import { Private, Public } from "@/pages/AuthenticatedRoute";

const ProductPage = lazy(() => import("@/pages/ProductPage"));
const CompanyPage = lazy(() => import("@/pages/CompanyPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage"));
const StoriesPage = lazy(() => import("@/pages/StoriesPage"));
const StoryDetailsPage = lazy(() => import("@/pages/StoriesPage/StoryDetails"));
const TokensPage = lazy(() => import("@/pages/TokensPage"));

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:id" element={<StoryDetailsPage />} />
            <Route path="/tokens" element={<TokensPage />} />
            {/* <Route path="/signin" element={Public(<SignInPage />)} />
            <Route path="/forgot-password" element={Public(<ForgotPasswordPage />)} />
            <Route path="/reset-password" element={Public(<ResetPasswordPage />)} /> */}
            {/* TODO: Change to Private */}
            {/* <Route path="/dashboard" element={Public(<DashboardPage />)} /> */}
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
