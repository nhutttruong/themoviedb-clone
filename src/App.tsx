import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import {
  PopularMovies,
  NowPlaying,
  UpComing,
  TopRatedMovies,
} from "./pages/Movies";

import {
  PopularTvShows,
  TopRatedTvShows,
  AiringToday,
  OnTv,
} from "./pages/TvShows";

import {
  AsianActors,
  FemaleActors,
  MaleActors,
  PopularPeople,
} from "./pages/People";

import { API, Support, Leaderboard, Discussions } from "./pages/More";

import Home from "./pages/Home";
import MovieLayout from "./components/MovieLayout";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<MovieLayout />}>
          <Route path="popular" element={<PopularMovies />}></Route>
          <Route path="now-playing" element={<NowPlaying />}></Route>
          <Route path="upcoming" element={<UpComing />}></Route>
          <Route path="top-rated" element={<TopRatedMovies />}></Route>
        </Route>

        <Route path="/tvshows">
          <Route path="popular" element={<PopularTvShows />}></Route>
          <Route path="airing-today" element={<AiringToday />}></Route>
          <Route path="on-tv" element={<OnTv />}></Route>
          <Route path="top-rated" element={<TopRatedTvShows />}></Route>
        </Route>

        <Route path="/people">
          <Route path="popular-people" element={<PopularPeople />}></Route>
          <Route path="male-actors" element={<MaleActors />}></Route>
          <Route path="female-actors" element={<FemaleActors />}></Route>
          <Route path="asian-actors" element={<AsianActors />}></Route>
        </Route>

        <Route path="/more">
          <Route path="discussions" element={<Discussions />}></Route>
          <Route path="leaderboard" element={<Leaderboard />}></Route>
          <Route path="support" element={<Support />}></Route>
          <Route path="api" element={<API />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
