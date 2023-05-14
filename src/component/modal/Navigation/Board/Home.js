import styled from "styled-components"

const HomeWrapper = styled.div`
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  span {
    font-size: 2.7rem;
    font-family: "Pacifico", cursive;
  }
`

const HomeTitle = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  margin: 15px 0;
  font-size: 30px;
  font-weight: bold;
  color: midnightblue;
  span {
    font-size: 40px;
    font-family: "Pacifico", cursive;
  }
`

const HomeContents = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1s;
  margin: 30px 0;
  font-size: 30px;
  color: #282c34;
`

const AboutProject = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1.5s;
  margin: 30px 0;
  font-size: 25px;
  color: #282c34;
  text-align: center;
  span {
    font-size: 30px;
    font-weight: bold;
    color: blue;
  }
`

const MyWebsite = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 2s;
  margin: 30px 0;
  text-align: center;
  .my-website-title {
    margin-bottom: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    color: midnightblue;
  }
  a {
    font-size: 30px;
    margin: 0 10px;
  }
`

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeTitle>
          <span>Health Together</span>에 오신걸 환영합니다
        </HomeTitle>
        <HomeContents>
          자유롭게 게시판에 글을 작성하고📝
          <br />
          댓글로 여러 의견을 나눠보세요✏️
        </HomeContents>

        <AboutProject>
          이 게시판은 사용자들간의
          <br />
          <span> 소통을 위해</span> 만들었습니다😎
        </AboutProject>
        <MyWebsite>
          <div className="my-website-title">Welcome to Health Together.</div>
        </MyWebsite>
      </HomeWrapper>
    </>
  )
}

export default Home