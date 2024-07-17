import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { fetchProducts } from "./redux/features/product/productThunk";
import { useAppDispatch } from "./redux/hooks";

import { motion } from "framer-motion";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen">
        <Header />
        <motion.div
          className="flex-1 flex"
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 flex flex-col">
            <Outlet />
          </div>
        </motion.div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
