import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ModulesPage } from "./pages/ModulesPage";
import { FreeLabSetupPage } from "./pages/FreeLabSetupPage";
import { AnnualEventPage } from "./pages/AnnualEventPage";
import { InternshipPage } from "./pages/InternshipPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "modules", Component: ModulesPage },
      { path: "free-lab-setup", Component: FreeLabSetupPage },
      { path: "annual-event", Component: AnnualEventPage },
      { path: "internship", Component: InternshipPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsOfServicePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
