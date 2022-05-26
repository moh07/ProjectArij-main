import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  AnouncementContainer,
  BoardContainer,
  CardContainer,
  CardSecondContainer,
  Background,
  ServicesContainer,
  Footer,
} from "../Containers/index";
import backgroundImage from "../Assets/Images/backgroundImage.svg";
import backgroundSecondImage from "../Assets/Images/backgroundSecondImage.svg";
import findProductsByCategory from "../services/findProductsByCategory";
import language from "../landingPage.json";
import { Navbar } from "../Containers/index";
import { useHistory } from "react-router-dom";
import ChatBoot from "../Components/ChatBoot/ChatBoot";
const Home = () => {
  const history = useHistory();

  const data = useSelector(state => state.category.categorys);
  const products = useSelector(state => state.rootReducer.products);
  const lang = useSelector(state => state.rootReducer.language);
  const user = JSON.parse(localStorage.getItem("user")??"{}");
  if(user?.role=== "admin"){
    history.push('dashboard');
  }
  if(user?.role=== "user"){
    history.push('dashboard');
  }

  return (
    <div>
      <Header></Header>
<      Navbar/>
      <BoardContainer></BoardContainer>
      <AnouncementContainer></AnouncementContainer>
      {data
        ? data
            .map((value, index) => {
              if (index === 1) {
                return (
                  <>
                    <Background bgImg={backgroundImage}></Background>
                    <CardSecondContainer
                      marginTop={575}
                      title={lang === "english" ? value.title : value.titleAr}
                      products={findProductsByCategory(products, value.id)}
                      categoryId={value.id}></CardSecondContainer>
                  </>
                );
              }
              return index % 2 === 0 ? (
                <CardContainer
                  title={lang === "english" ? value.title : value.titleAr}
                  products={findProductsByCategory(products, value.id)}
                  categoryId={value.id}></CardContainer>
              ) : (
                <CardSecondContainer
                  title={lang === "english" ? value.title : value.titleAr}
                  products={findProductsByCategory(products, value.id)}
                  categoryId={value.id}></CardSecondContainer>
              );
            })
            .slice(0, 4)
        : null}
      {/* <CardContainer title="vehicle"></CardContainer>
      <Background bgImg={backgroundImage}></Background>
      <CardSecondContainer
        marginTop={575}
        title="machines"
      ></CardSecondContainer>
      <CardContainer title="animals"></CardContainer>
      <CardSecondContainer title="plants"></CardSecondContainer> */}
      <Background bgImg={backgroundSecondImage} marginTop={-100}></Background>
      <ServicesContainer></ServicesContainer>
      <Background bgImg={backgroundImage}></Background>
      <ChatBoot/>
      <Footer marginTop={500}></Footer>
    </div>
  );
};

export default Home;
