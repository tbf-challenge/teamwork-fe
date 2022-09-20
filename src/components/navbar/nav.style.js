import styled from "styled-components";

const NavStyle = styled.div`
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;

  .logoWrap {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 30px;
    align-items: center;
    background: #ffffff;

    h2.brand-name {
      // font-size: 14px;
      // line-height: 20px;
      margin-left: 10px;
    }
  }

  .headWrap {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: -1px;

    .head {
      width: 100%;
      height: 100%;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* border-left: 1px solid #d2d5da; */

      .title {
        font-size: 24px;
        font-weight: 600;
        line-break: 32px;
        color: #1f2937;
        margin-left: 25px;
      }

      #ham {
        display: none;
      }

      .search {
        width: 34%;
        height: 50px;
        display: flex;
        border-radius: 8px;
        border: 0.9px solid rgba(0, 0, 0, 0.15);
        position: relative;

        .searchInput {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          outline: none;
          padding: 5px 0 5px 52px;
          border-radius: 8px;

          &::placeholder {
            font-size: 16px;
            color: #d2d5da;
          }
        }

        #searchIcon {
          position: absolute;
          top: 12px;
          left: 16px;
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }

      .icons {
        display: flex;
        margin-right: 60px;
        border: none;
        gap: 20px;
        align-items: center;

        svg {
          font-size: 32px;
          color: #9ca3af;
        }

        .profile {
          border: none;
          border-radius: 5px;
          display: flex;
          gap: 8px;
          margin: 0;
          align-items: center;

          a {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;

            img {
              object-fit: contain;
              width: 100%;
            }
          }

          .admin {
            border: none;
            border-radius: 5px;
            margin: 0;
            height: 100%;
            // padding-left: 10px;

            p {
              margin: 0;
              font-size: 16px;
              line-height: 20px;
              color: #4b5563;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 20px !important;
    }
    .search {
      width: 32% !important;
      margin-left: 5%;
    }
    .create {
      width: 90px !important;
    }
    .icons {
      margin-right: 20px !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 850px) {
    .logoWrap {
      justify-content: center;

      svg {
        width: 32px;
      }
    }
    .headWrap {
      .head {
        .search {
          width: 200px !important;
        }
        .icons {
          gap: 10px !important;
          margin-right: 2%;

          .profile {
            gap: 10px !important;
          }
        }
      }
    }
  }

  @media (max-width: 920px) {
    display: flex;
    border-bottom: 1px solid black;
    height: 50px;
    padding: 0 20px;
    padding-right: 0;

    .logoWrap {
      display: none;

      svg {
        padding: 4px 0;
      }
    }
    .icons {
      margin-right: 10px !important;
    }

    .headWrap {
      padding-left: 0;

      .head {
        height: 100%;
        border: none;
        width: 100%;

        .search {
          width: 256px !important;
          height: 34px !important;
          border: 1px solid #d2d5da !important;

          .searchInput {
            background-color: #f9fafb;
            padding: 0 0 0 32px;

            ::placeholder {
              color: #4b5563 !important;
            }
          }

          #searchIcon {
            width: 14px;
            top: 5px;
            left: 10px;
          }
        }

        .icons {
          margin-left: 5%;
          margin-right: 0;
          gap: 8px;
        }
      }
      .bell {
        display: none;
      }

      .create {
        height: 36px !important;
        width: 100px !important;
      }
      .head .icons {
        margin-left: 5%;
        margin-right: 0;
        gap: 8px;
    }
    h1 {
      display: none;
    }

    .profile {
      a {
        width: max-content;
        height: max-content;

        img {
          width: 32px;
          height: 32px;
          aspect-ratio: 1/1;
        }
      }

      .admin {
        display: none;
      }
    }

    #ham {
      display: block !important;
      transition: 0.3s;
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 36px;
    }
  }

  @media (max-width: 600px) {
    // grid-template-columns: 12% 88%;
    display: flex;
    border-bottom: 1px solid black;
    height: 50px;
    padding: 0 15px;
    padding-right: 0;

    .logoWrap {
      display: none;

      svg {
        padding: 4px 0;
      }
    }

    .headWrap {
      padding-left: 0;

      .head {
        height: 100%;
        border: none;
        width: 100%;

        .icons {
          margin-left: 5%;
          margin-right: 0;
          gap: 8px;
        }

        .search {
          width: 256px !important;
          height: 34px !important;
          border: 1px solid #d2d5da !important;

          .searchInput {
            background-color: #f9fafb;
            padding: 0 0 0 32px;

            &::placeholder {
              color: #4b5563 !important;
            }
          }

          #searchIcon {
            width: 14px;
            top: 5px;
            left: 10px;
          }
        }
      }

      .create,
      .bell {
        display: none;
      }
    }

    h1 {
      display: none;
    }

    .profile {
      img {
        width: 32px;
        height: 32px;
      }

      .admin {
        display: none;
      }
    }

    #ham {
      display: block !important;
      transition: 0.3s;
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 36px;
    }
  }
`;
export default NavStyle;

// Styling for the overlay
export const PostsStyles = styled.section`
  z-index: 10;
  position: fixed;
  right: 0%;
  left: 20%;
  top: 0%;
  width: 80%;
  height: 100vh;
  background-color: white;
  background-attachment: scroll;
  display: ${(props) => props.displayPosts};

  .chooseSection {
    position: relative;
    margin-left: 80px;
    margin-top: 100px;

    h2 {
      font-weight: 600;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.02em;
      margin-bottom: 32px;
      color: #1F2937;
    }
    .cancel {
      position: absolute;
      background-color: white;
      top: 0;
      right: 30px;
      width: 32px;
      cursor: pointer;
    }
    .chooseButtons {
      display: flex;
      gap: 50px;
    
      .choose {
        border: 1px solid #E5E7EB;
        width: 218px;
        background-color: white;
        height: 153px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 12px;
        flex-direction: column;
        cursor: pointer;
      }
      p {
          font-size: 16px;
          line-height: 24px;
          color: #1F2937;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .chooseSection {
      margin-left: 30px !important;
      margin-top: 50px;

      h2 {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 28px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    left: 0;
    right: 0%;
    top: 9%;
    width: 100%;

    .chooseButtons {
        margin-left: 10px;
    }
    .choose {
      width: 150px !important;
      height: 100px !important;
    }
    .cancel {
      top: -50px;
      right: 0;
      height: 40px;
    }
  }

  @media screen and (max-width: 450px) {
    .chooseButtons {
      /* gap: 25p */
    }
    .choose {
      width: 132px !important;
      height: 100px !important;
    }
  }
  
`;
