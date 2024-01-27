import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { getCharacters } from "../../api";
import {
  setCharacters,
  setCurrentPage,
} from "../../redux/slices/characterSlice";
import { Card } from "../Card/Card";
import { SearchBar } from "../SearchBar/SearchBar";

import image404 from "../../assets/images/404.png";

import "./CardContainer.scss";

const CardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { characters, currentPage, totalPages } = useSelector(
    (state) => state.character
  );

  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getCharacters(currentPage, searchTerm);
        dispatch(setCharacters(charactersData), shallowEqual);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchData();
  }, [dispatch, currentPage, searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
      navigate(`/characters/page/${newPage}`);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Ajusta según tus necesidades

    if (totalPages <= maxPagesToShow) {
      // Si hay menos páginas de las que queremos mostrar, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </span>
        );
      }
    } else {
      // Si hay más páginas, mostrar solo las específicas
      const startPage = Math.max(
        1,
        Math.min(currentPage - 2, totalPages - maxPagesToShow + 1)
      );
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (startPage > 1) {
        pageNumbers.push(
          <span key={1} onClick={() => handlePageChange(1)}>
            1
          </span>
        );
        if (startPage > 2) {
          pageNumbers.push(<span key="ellipsis-1">...</span>);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </span>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(<span key="ellipsis-2">...</span>);
        }
        pageNumbers.push(
          <span key={totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="cardspage">
      <SearchBar />
      <div className="cardspage-container">
        {characters ? (
          characters.map((character) => (
            <Card key={character.id} character={character} />
          ))
        ) : (
          <img src={image404} alt="404 image" className="image404" />
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === totalPages}
          className="btn btn-action"
        >
          <IoIosArrowBack />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-action"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export { CardContainer };
