// App.js
import React from "react"
import styled from "styled-components"
//import { Close } from "../../../../image/index.js"
import Header from "./Header.js"
// import Menubar from "../Menubar.js"
import BoardModal from "react-modal"
import { BoardProvider } from "./BoardContext.js"
import BoardTemplate from "./BoardTemplate.js"
import BoardHead from "./BoardHead.js"
import CardList from "./CardList.js"
import BoardCreate from "./BoardCreate.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BoardListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  .boardList-header {
    color: midnightblue;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 50px;
  }
  .boardList-body {
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const BoardList = ({ isModal, setModal }) => {
  return (
    <BoardModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >

      {/* <Menubar /> */}

      <ModalContainer>
        <ModalHead>
          {/* <Closebtn src={Close} onClick={() => setModal(false)} /> */}
        </ModalHead>
        <ModalBody>
          <Header />
          <BoardListWrapper>
            <div className="boardList-header">전체 게시물 📝</div>
            <div className="boardList-body" />
            <BoardProvider>
              <BoardTemplate>
                <BoardHead />
                <CardList />
                <BoardCreate />
              </BoardTemplate>
            </BoardProvider>
          </BoardListWrapper>
        </ModalBody>
      </ModalContainer>
    </BoardModal>
  )
}

export default BoardList