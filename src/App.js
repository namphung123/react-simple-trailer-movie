import { Fragment, lazy, Suspense } from "react";
import Banner from "./components/banner/Banner";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Moive404 from "./pages/Moive404";
// import HomePage from "./pages/HomePage";

// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <Fragment>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </Fragment>
              }
            ></Route>
            <Route path="/movies" element={<MoviePageV2></MoviePageV2>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route path="*" element={<Moive404></Moive404>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
