//import './MainSection.css'
//import './MainSectionResponsible.css'
import mobile_background from './images/mobile_background.png'
import background_img_1 from './images/background_img_1.png'
import profileMain1 from './images/profileMain1.png'
import profileMain3 from './images/profileMain3.png'
import profileMain2test from './images/profileMain2test.png'
import leftTreesMobile from './images/leftTreesMobile.png'
import trees from './images/trees.png'
import smallCard from './images/smallCard.png'
import mobileCard from './images/mobileCard.png'
import mobile_tree from './images/mobile tree.png'
import tree from './images/tree.png'
import halfTrees from './images/halfTrees.png'
import rightTreesMobile from './images/rightTreesMobile.png'
import shadow from './images/shadow.png'
import mobile_road_test from './images/mobile_road_test.png'
import location10 from "./images/location 10.png"
import location12 from "./images/location 12.png"
import location8 from "./images/location 8.png"
import location11 from "./images/location 11.png"
import location9 from "./images/location 9.png"
import road from './images/road.png'
import road_lane from './images/road_lane.png'
import location203 from "./images/location 3.png"
import location204 from "./images/location 4.png"
import location205 from "./images/location 5.png"
import location206 from "./images/location 6.png"
import location207 from "./images/location 7.png"


function MainSection() {
    return (
        <main>
            <section className="mainSection">
                <div className="firstTextContainer">
                    <div className="firstTitle">
                        Почувствуйте силу цифровых <span className="highlight">бизнес</span> профилей!
                    </div>
                    <div className="firstTitleDesc">
                        И откройте новые возможности.
                    </div>
                    <img className="mobileImg1" src={mobile_background} alt=""/>
                    <div className="gradient-shadow"></div>
                    <button className="mainBtn">Попробуйте бесплатно</button>
                </div>
                <div className="containerImg1">
                    <img className="mainImg1" src={background_img_1} alt="Первое основное изображение"/>
                </div>
            </section>
            <section className="defaultSection">
                <div className="imageGroup1">
                    <div className="containerImg2">
                        <img className="mainImg2" src={profileMain1} alt="Первое изображение профиля"/>
                        <img className="bgImgLeft" src={profileMain3} alt=""/>
                        <img className="bgImgRight" src={profileMain2test} alt=""/>
                    </div>
                </div>
                <div className="secondTextContainer">
                    <div className="secondTitle">
                        Создайте свой персональный или бизнес профиль в считаные секунды!
                    </div>
                    <div className="secondTitleDesc">
                        Создайте свой профиль бесплатно и начните открывать новые возможности! Наша платформа
                        предоставляет социальную сеть для наших пользователей и позволяет им знакомиться с
                        профессионалами и расширять их сеть. Вы также получите скидку на определенные продукты.
                    </div>
                    <button className="mainBtn">Попробуйте бесплатно</button>
                </div>
            </section>
            <div className="smallSection">
                <img className="fullGrowthTreeMobile" src={leftTreesMobile} alt=""/>
                <img className="fullGrowthTree" src={trees} alt=""/>
                <div className="smallCardBox">
                    <span
                        className="cardBoxText">Мы посадим дерево за каждую NFC карточку, подключенную к вашем профилю</span>
                    <img className="cardBoxImg" src={smallCard.png} alt=""/>
                    <img className="cardBoxImgMobile" src={mobileCard} alt=""/>
                    <img className="treeBoxImgMobile" src={mobile_tree} alt=""/>
                    <img className="treeBoxImg" src={tree} alt=""/>
                </div>
                <img className="halfTrees" src={halfTrees} alt=""/>
                <img className="halfTreesMobile" src={rightTreesMobile} alt=""/>
            </div>
            <section className="roadmap">
                <img className="shadowGamma" src={shadow} alt=""/>
                <img className="mobileRoad" src={mobile_road_test} alt=""/>
                <div className="road_divider_mobile">
                    <div className="roadMobile">
                        <div className="locationBlockMobile">
                            <div className="locmob">
                                <img src={location10} className="loc1Mobile" alt=""/>
                            </div>
                        </div>
                        <div className="locationBlockMobile">
                            <div className="locmob">
                                <img src={location12} className="loc2Mobile" alt=""/>
                            </div>
                        </div>
                        <div className="locationBlockMobile">
                            <div className="locmob">
                                <img src={location8} className="loc3Mobile" alt=""/>
                            </div>
                        </div>
                        <div className="locationBlockMobile">
                            <div className="locmob">
                                <img src={location11} className="loc4Mobile" alt=""/>
                            </div>
                        </div>
                        <div className="locationBlockMobile">
                            <div className="locmob">
                                <img src={location9} className="loc5Mobile" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="blocksMobile">
                        <div className="roadmapBlockMobileGroup">
                            <div className="blockCircle1Mobile">
                                <div className="Circle1">Q1</div>
                            </div>
                            <div className="roadmapBlockMobile">KYC интеграция</div>
                        </div>
                        <div className="roadmapBlockMobileGroup">
                            <div className="blockCircle2Mobile">
                                <div className="Circle2">Q2</div>
                            </div>
                            <div className="roadmapBlockMobile">KYC интеграция</div>
                        </div>
                        <div className="roadmapBlockMobileGroup">
                            <div className="blockCircle3Mobile">
                                <div className="Circle3">Q3</div>
                            </div>
                            <div className="roadmapBlockMobile">KYC интеграция</div>
                        </div>
                        <div className="roadmapBlockMobileGroup">
                            <div className="blockCircle4Mobile">
                                <div className="Circle4">Q4</div>
                            </div>
                            <div className="roadmapBlockMobile">KYC интеграция</div>
                        </div>
                        <div className="roadmapBlockMobileGroup">
                            <div className="blockCircle5Mobile">
                                <div className="Circle5">Q5</div>
                            </div>
                            <div className="roadmapBlockMobile">KYC интеграция</div>
                        </div>
                    </div>
                </div>
                <div className="road">
                    <img src={road} className="roadImg" alt=""/>
                    <img src={road_lane} className="laneImg" alt=""/>
                    <img src={location203} className="location1" alt/>
                    <img src={location204} className="location2" alt/>
                    <img src={location205} className="location3" alt/>
                    <img src={location206} className="location4" alt/>
                    <img src={location207} className="location5" alt/>
                </div>
                <div className="blocksRoadmap">
                    <div className="blockCircle1">Q1</div>
                    <div className="roadmapBlock1">KYC интеграция</div>
                    <div className="blockCircle2">Q2</div>
                    <div className="roadmapBlock2">KYC интеграция</div>
                    <div className="blockCircle3">Q3</div>
                    <div className="roadmapBlock3">KYC интеграция</div>
                    <div className="blockCircle4">Q4</div>
                    <div className="roadmapBlock4">KYC интеграция</div>
                    <div className="blockCircle5">Q5</div>
                    <div className="roadmapBlock5">KYC интеграция</div>
                </div>
            </section>
        </main>
    );
}

export default MainSection;