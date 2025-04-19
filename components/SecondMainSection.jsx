import React, {useState, useEffect, useRef} from 'react';
import mobile_background from '../components/images/mobile_background.png'
import mobile_team_dashboard from '../components/images/mobile team dashboard.png'
import team_dashboard from '../components/images/team dashboard4.png'
import web_design from '../components/images/web-design.svg'
import styles from '../components/TeamResponsible.module.css';
import team_photo1 from '../components/images/team_photo 1.jpg'
import team_photo2 from '../components/images/team_photo 2.jpg'
import team_photo3 from '../components/images/team_photo 3.jpg'
import JokeComponent from "./JokeComponent.jsx";

function SecondMainSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [ team_photo1,  team_photo2, team_photo3];
    const intervalRef = useRef(null);

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    };

    const handleImageClick = (index) => {
        resetInterval();
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    const handlePrevClick = () => {
        resetInterval();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        resetInterval();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <main className={styles.mainContainer}>
            <section className={styles.teamManagement}>
                <div className={styles.firstTextContainer}>
                    <div className={styles.firstTitle}>
                        Удобное и простой управление командой!
                    </div>
                    <div className={styles.firstTitleDesc}>
                        Испытайте все преимущества и присоединяйтесь к нашей команде.
                    </div>
                    <img className={styles.mobileImg1} src={mobile_background} alt=""/>
                    <div className={styles.gradientShadow}></div>
                    <button className={styles.testBtn}>Кликай!</button>
                </div>
                <img className={styles.teamImg1Mobile} src={mobile_team_dashboard} alt=""/>
                <img className={styles.teamImg1} src={team_dashboard} alt="Первое основное изображение"/>
                <button className={styles.testBtnMobile}>Кликай!</button>
            </section>
            <div className={styles.carouselContainer}>
                <button className={styles.arrowBtn} onClick={handlePrevClick}>
                    ←
                </button>
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                />
                <button className={styles.arrowBtn} onClick={handleNextClick}>
                    →
                </button>
            </div>
            <div className={styles.buttonContainer}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`${styles.imageBtn} ${currentImageIndex === index ? styles.active : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <JokeComponent/>
            <section className="ourTeam">
                <div className={styles.teamContainer}>
                  <span className={styles.teamTitle}>
                    Наша команда
                  </span>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <img src={web_design} alt="card-img1" className="cardImg"/>
                            <h3 className="cardName">CEO Проекта</h3>
                            <p className="cardContent">С.В. Иванов</p>
                        </div>
                        <div className={styles.card}>
                            <img src={web_design} alt="card-img1" className="cardImg"/>
                            <h3 className="cardName">Back-end разработчик</h3>
                            <p className="cardContent">Н.Р. Алексеев</p>
                        </div>
                        <div className={styles.card}>
                            <img src={web_design} alt="card-img1" className="cardImg"/>
                            <h3 className="cardName">Front-end разработчик</h3>
                            <p className="cardContent">А.А. Петров</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.smallSection}>
                <div className={styles.joinerTeam}>
          <span className={styles.teamTitle} id="joinerTitle">
            Присоединяйтесь!
          </span>
                    <div className={styles.inputButtonSection}>
                        <input maxLength="35" aria-label="" placeholder="Ваша почта" type="email"
                               className={styles.emailTeamInput}/>
                        <button className={styles.submitBtn}>Отправить</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SecondMainSection;
