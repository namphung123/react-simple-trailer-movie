import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropsTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { MovieCardSkeleton } from "./MovieCard";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MovieList.propTypes = {
  type: PropsTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50 ">
      Some thing went wrong with list component
    </p>
  );
}

export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
