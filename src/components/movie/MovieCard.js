import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropsTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
      </div>

      <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
        Watch now
      </Button>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropsTypes.shape({
    title: PropsTypes.string,
    poster_path: PropsTypes.string,
    release_date: PropsTypes.string,
    vote_average: PropsTypes.number,
    id: PropsTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50 ">
      Some thing went wrong with list component
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

export const MovieCardSkeleton = () => {
  return (
    <div
      className={`flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800 `}
    >
      <SkeletonTheme width="100%" height="250px" borderRadius="8px">
        <Skeleton />
      </SkeletonTheme>

      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">
          <SkeletonTheme width="100%" height="20px">
            <Skeleton />
          </SkeletonTheme>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <SkeletonTheme width="50px" height="10px">
              <Skeleton />
            </SkeletonTheme>
          </span>
          <span>
            <SkeletonTheme width="30px" height="10px">
              <Skeleton />
            </SkeletonTheme>
          </span>
        </div>
      </div>

      <SkeletonTheme width="100%" height="45px" borderRadius="4px">
        <Skeleton className="mb-4" />
      </SkeletonTheme>
    </div>
  );
};
