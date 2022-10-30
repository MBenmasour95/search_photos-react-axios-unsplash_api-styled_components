import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: all 400ms ease;

  ${Box}:hover & {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    background-color: transparent;
    visibility: visible;
    opacity: 1;
  }

  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px 20px;
  }

  .link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    margin-left: 10px;

    a {
      font-size: 20px;
      text-decoration: none;
      font-weight: 600;
      color: #fefefe;
    }

    p {
      font-size: 14px;
      color: #f3fdfd;
    }
  
`;

const Photo = ({
  urls: { small },
  likes,
  user: {
    username,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <Box>
      <Img src={small} alt="" />
      <Info>
        <Footer>
          <a
            href={portfolio_url}
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            <img src={medium} alt="" />
          </a>

          <div className="info">
            <a href={portfolio_url} rel="noreferrer" target="_blank">
              {username}
            </a>
            <p className="likes">{likes} Likes</p>
          </div>
        </Footer>
      </Info>
    </Box>
  );
};

export default Photo;
