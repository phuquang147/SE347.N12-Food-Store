import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Routes from "~/routes";
import ScrollToTop from "./helpers/scroll-top";

function App() {
  return (
    <ToastProvider placement="bottom-right">
      <BrowserRouter>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="preloader-wrapper">
                <div className="preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes />
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
