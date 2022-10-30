import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { AppContext } from "../context";

const Form = styled.form`
  position: relative;
  width: 360px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #999;
  }

  &:after {
    width: 0;
    background-color: #7303c0;
    transition: 500ms ease-in-out;
  }

  &:focus-within,
  &.active {
    :after {
      width: 100%;
    }

    button svg {
      fill: #7303c0;
    }
  }

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search Photos...",
})`
  background: transparent;
  color: #ffffff;
  flex: 1;
  height: 100%;
  padding: 10px;
  font-family: inherit;
  font-size: inherit;
  border: 0;
  outline: none;

  ::placeholder {
    color: #99999;
  }
`;

const SearchBtn = styled.button.attrs({
  type: "submit",
})`
  background: transparent;
  margin-right: 10px;
  border: 0;
  cursor: pointer;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled(AiOutlineSearch)`
  fill: #999999;
  font-size: 24px;
  transition: fill 400ms ease;
`;

const Search = () => {
  const { query, setQuery, setPage, fetchPhotos } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      fetchPhotos();
      setPage(1);
    }
  };

  return (
    <Form className={query && "active"} onSubmit={handleSubmit}>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchBtn>
        <Icon />
      </SearchBtn>
    </Form>
  );
};

export default Search;
