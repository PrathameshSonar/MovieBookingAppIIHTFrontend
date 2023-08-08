import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, deleteMovie, role }) => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);

  const editMovie = (e, movieName) => {
    e.preventDefault();
    navigate(`/edit-movie/${movieName}`);
  };

  const listTheaters = (e) => {
    e.preventDefault();
    navigate("/theater-list", { state: { movie: movie } });
  };

  function handleDelete() {
    setShowAlert(true);
  }

  function handleCancelDelete() {
    setShowAlert(false);
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <button
          onClick={listTheaters}
          className="text-center font-semibold text-xl text-indigo-600 hover:text-indigo-800 hover:cursor-pointer hover:text-2xl hover:font-extrabold"
        >
          <img
            className="w-full mt-4"
            src={`data:image/jpeg;base64,${movie.moviePoster}`}
            alt="Movie Poster"
          />
          <div className="m-4">{movie.movieName}</div>
        </button>

        {role === "ROLE_ADMIN" && (
          <div className="mt-4 text-center">
            <button
              onClick={handleDelete}
              className="text-orange-600 hover:text-orange-800 hover:cursor-pointer"
            >
              Delete Movie
            </button>
            {showAlert && (
              <div className="mt-2">
                <p>Are you sure you want to delete this?</p>
                <button
                  className="mr-4 text-red-600 hover:text-red-800 hover:cursor-pointer"
                  onClick={(e, movieName) => deleteMovie(e, movie.movieName)}
                >
                  Yes
                </button>
                <button
                  className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                  onClick={handleCancelDelete}
                >
                  No
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>

    // <tr key={movie.movieName}>
    //   <td className="text-center px-6 py-4 whitespace-nowrap max-w-full">
    //     <button
    //       onClick={listTheaters}
    //       className="text-center font-semibold text-xl text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer hover:text-2xl hover:font-extrabold"
    //     >
    //       {movie.movieName}
    //     </button>
    //     <img src={`data:image/jpeg;base64,${movie.moviePoster}`} alt="Movie Poster" />
    //   </td>

    //   {role === "ROLE_ADMIN" && (
    //     <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
    //       {/* <button
    //         onClick={(e, movieName) => editMovie(e, movie.movieName)}
    //         className="mr-4 text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
    //       >
    //         Edit
    //       </button> */}
    //       <button
    //         onClick={handleDelete}
    //         className="ml-4 text-orange-600 hover:text-orange-800 hover:cursor-pointer"
    //       >
    //         Delete
    //       </button>
    //       {showAlert && (
    //         <div>
    //           <p>Are you sure you want to delete this?</p>
    //           <button
    //             className="mr-4 text-red-600 hover:text-red-800 hover:cursor-pointer"
    //             onClick={(e, movieName) => deleteMovie(e, movie.movieName)}
    //           >
    //             Yes
    //           </button>
    //           <button
    //             className="ml-4 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
    //             onClick={handleCancelDelete}
    //           >
    //             No
    //           </button>
    //         </div>
    //       )}
    //     </td>
    //   )}
    // </tr>
  );
};

export default Movie;
