import styled from "styled-components";

const NavStyle = styled.div`
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;

  .logoWrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eef1f4;

    h1.brand-name {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  .headWrap {
    display: flex;
    // align-items: flex-end;
    align-items: center;
    padding-left: 5px;
    width: 100%;
    height: 100%;

    .head {
      border: 0.5px solid rgba(0, 0, 0, 0.15);
      width: 98%;
      height: 75%;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 4px;
      padding: 5px;

      .title {
      }

      .search {
        width: 40%;
        height: 100%;
        display: flex;
        border-radius: 4px;
        border: 0.9px solid rgba(0, 0, 0, 0.15);
        position: relative;

        .searchInput {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          outline: none;
          padding: 5px 30px;
          background-color: #F9FAFB;
          border-radius: 4px;

          ::placeholder {
            /* for styling placeholder */
            // color: red;
            /* padding-left: 5px; */
          }
        }
        #searchIcon {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }

      .icons {
        display: flex;
        margin-right: 5%;
        border: none;
        gap: 18px;
        align-items: center;
        
        .profile {
          border: none;
          border-radius: 5px;
          display: flex;
          gap: 16px;
          margin: 0;
          align-items: center;

          .admin {
            border: none;
            border-radius: 5px;
            margin: 0;
            height: 100%;
            padding-left: 10px;

            p {
              margin: 0;
            }
            }
        }
        
        #ham {
          display: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
          width: 36px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .logoWrap{
      flex-direction: column !important;

      svg {
        width: 32px;
      }
    }
    .headWrap {
      .head {
        .search {
          width: 30% !important;
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

  @media (max-width: 500px) {
    grid-template-columns: 12% 88%;
    border-bottom: 1px solid black;
    height: 50px;

    .logoWrap {
      background-color: white;
      text-align: center;

      svg {
        padding 4px 0;
      }
    }

    .headWrap {
      padding-left: 0;

      .head {
        height: 90%;
        border: none;
        width: 100%
      }
      .head .search {
        width: auto !important;

        #searchIcon {
          width: 14px;
        }
      }
      .head .icons {
        margin-left: 5%;
        margin-right: 0;
        gap: 8px;
      }
    }
    h1 {
      display: none;
    }

    .profile .admin {
      display: none;
    }
    #ham {
      display: block !important;
      transition: 1s;
    }
    
  }

  @media screen and (max-width: 1025px) {
  }

  @media screen and (max-width: 800px) {
    justify-content: space-around;
    align-items: center;
    height: 70px;
    width: 100%;
    display: flex;

    .logoWrap {
      width: max-content;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      padding: 1px 10px;

      h1.brand-name {
        display: none;
      }
    }

    .headWrap {
      display: flex;
      align-items: center;
      padding-left: 5px;
      width: 90%;
      height: 100%;

      .head {
        border: 0;
        width: 98%;
        height: 70%;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 4px;
        padding: 5px;

        .title {
          display: none;
        }

        .search {
          width: 40%;
          height: 100%;
          display: flex;
          border-radius: 2px;
          border: 0.9px solid rgba(0, 0, 0, 0.15);

          .searchInput {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            outline: none;
            padding: 5px 15px;

            ::placeholder {
              /* for styling placeholder */
              color: red;
              /* padding-left: 5px; */
            }
          }
        }

        .icons {
          display: flex;
        }
      }
    }
  }
`;

export default NavStyle;
