import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";

// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
// import HomePage from "./pages/HomePage/HomePage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// export default function App() {
// const dispatch = useDispatch();
// const isRefreshing = useSelector(selectIsRefreshing);

// useEffect(() => {
//   dispatch(refreshUser());
// }, [dispatch]);

//   return isRefreshing ? (
//     <p>Loading...</p>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<RegistrationPage />}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// }
