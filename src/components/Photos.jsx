import React, { useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { AppContext } from "../context";
import Photo from "./Photo";
import Loading from "./Loading";

const Error = styled.p`
  font-size: 24px;
  color: #fefefe;
`;

const Photos = () => {
  const { loading, photos, error, hasMore } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {error ? (
        <Error>No Photos matched your search!!!</Error>
      ) : (
        <ResponsiveMasonry>
          <Masonry gutter="20px">
            {photos.map((photo, idx) => {
              return <Photo key={idx} {...photo} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}

      {hasMore && <Loading />}
    </>
  );
};

export default Photos;
