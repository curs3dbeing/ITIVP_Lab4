import React, { useState, useEffect, useRef } from 'react';
import '../components/Link.css';

import mobile_background1 from '../components/images/mobile_background1.png';
import background_img_1 from '../components/images/background_img_1.png';
import web_design from '../components/images/web-design.svg';
import phone from '../components/images/phone.svg';
import leftTreesMobile from '../components/images/leftTreesMobile.png';
import trees from '../components/images/trees.png';
import smallCard from '../components/images/smallCard.png';
import mobileCard from '../components/images/mobileCard.png';
import mobileTree from '../components/images/mobile tree.png';
import tree from '../components/images/tree.png';
import halfTrees from '../components/images/halfTrees.png';
import rightTreesMobile from '../components/images/rightTreesMobile.png';
import phone2 from '../components/images/phone2.png';
import tick from '../components/images/tick.svg';
import cross from '../components/images/cross.svg';
import {data} from "autoprefixer";

function Link() {
    const [messages, setMessages] = useState(['Здравствуйте, мы хотим с вами сотрудничать.', 'Здравствуйте, мы хотим пользоваться вашим проектом.', 'Здравствуйте, мы хотим поддержать развитие вашего стартапа.', 'Здравствуйте, мы хотим заняться спонсорством вашей идеи.']);
    const [countries, setCountries] = useState(['Беларусь', 'Россия', 'Украина', 'Казахстан', 'Соединенные Штаты Америки', 'Чехия', 'Польша', 'Китай', 'Япония']);
    const [isResizing, setIsResizing] = useState(false);
    const [initialHeight, setInitialHeight] = useState(200);
    const [startY, setStartY] = useState(0);
    const [startHeight, setStartHeight] = useState(0);
    const textareaRef = useRef(null);
    const countriesInputRef = useRef(null);
    const messagesInputRef = useRef(null);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [filteredSuggestionsCountries, setFilteredSuggestionsCountries] = useState([]);
    const [filteredSuggestionsMessages, setFilteredSuggestionsMessages] = useState([]);
    const [showMessageSuggestions, setShowMessageSuggestions] = useState(false);
    const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
    const [userInputMessage, setUserInputMessage] = useState('');
    const [userInputCountry, setUserInputCountry] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRegex = /^[a-zA-Z0-9._%+-]{2,35}@(?:[a-zA-Z0-9-]{2,8}\.){1,}[a-zA-Z]{2,5}$/;

    useEffect(() => {
        const textarea = textareaRef.current;

        function handleMouseDown(e) {
            if (!textarea) return;

            const rect = textarea.getBoundingClientRect();
            const bottom = rect.bottom;
            const tolerance = 5;

            if (e.clientY >= bottom - tolerance && e.clientY <= bottom) {
                setIsResizing(true);
                setStartY(e.clientY);
                setStartHeight(textarea.offsetHeight);
            }
        }

        function handleMouseMove(e) {
            if (!isResizing) return;

            const newHeight = Math.min(
                Math.max(initialHeight, startHeight + (e.clientY - startY)),
                500
            );
            textarea.style.height = `${newHeight}px`;
        }

        function handleMouseUp() {
            setIsResizing(false);
        }

        function handleDoubleClick() {
            if (textarea) {
                textarea.style.height = `${initialHeight}px`;
            }
        }

        const handleOutsideClick = (event) => {
            if (messagesInputRef.current && !messagesInputRef.current.contains(event.target)) {
                setShowMessageSuggestions(false);
                setFilteredSuggestionsMessages([]);
            }
            if (countriesInputRef.current && !countriesInputRef.current.contains(event.target)) {
                setShowCountrySuggestions(false);
                setFilteredSuggestionsCountries([]);
            }
        };
        if (textarea) {
            textarea.addEventListener('dblclick', handleDoubleClick);
        }
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('click', handleOutsideClick);

        return () => {
            if (textarea) {
                textarea.removeEventListener('dblclick', handleDoubleClick);
            }
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [initialHeight, isResizing, startHeight, startY]);

    const handleCountriesInputChange = (e) => {
        let userInput = e.target.value;
        userInput = userInput.trimStart();
        setUserInputCountry(userInput);

        const filteredSuggestions = countries.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestionsCountries(filteredSuggestions);
        setShowCountrySuggestions(true);
    };
    const handleMessagesInputChange = (e) => {
        let userInput = e.target.value;
        userInput = userInput.trimStart();
        setUserInputMessage(userInput);
        const filteredSuggestions = messages.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setActiveSuggestion(0);
        setFilteredSuggestionsMessages(filteredSuggestions);
        setShowMessageSuggestions(true);
    };
    const onClickCountries = (suggestion) => {
        setUserInputCountry(suggestion);
        setFilteredSuggestionsCountries([]);
        setShowCountrySuggestions(false);
        setActiveSuggestion(0);
    };
    const onClickMessages = (suggestion) => {
        setUserInputMessage(suggestion);
        setFilteredSuggestionsMessages([]);
        setShowMessageSuggestions(false);
        setActiveSuggestion(0);
    };
    const suggestionsListComponentCountries = showCountrySuggestions && (
        <ul className="suggestions">
            {filteredSuggestionsCountries.length ? (
                filteredSuggestionsCountries.map((suggestion, index) => {
                    let className;
                    if (index === activeSuggestion) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={() => onClickCountries(suggestion)}>
                            {suggestion}
                        </li>
                    );
                })
            ) : (
                <></>
            )}
        </ul>
    );
    const suggestionsListComponentMessages = showMessageSuggestions && (
        <ul className="suggestions">
            {filteredSuggestionsMessages.length ? (
                filteredSuggestionsMessages.map((suggestion, index) => {
                    let className;
                    if (index === activeSuggestion) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={() => onClickMessages(suggestion)}>
                            {suggestion}
                        </li>
                    );
                })
            ) : (
                <></>
            )}
        </ul>
    );

    const handleNameChange = (e) => {
        let value = e.target.value;
        value = value.trimStart();
        setName(value);
    };

    const handleEmailChange = (e) => {
        let value = e.target.value;
        value = value.trimStart();
        setEmail(value);
    };

    const trim = (str) => {
        return str.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ');
    }

    const checkEmailExists = (email) => {
        const items = localStorage.getItem('messages');

        const messagesArray = items ? JSON.parse(items) : [];

        if (!Array.isArray(messagesArray)) {
            console.error('Данные в localStorage не являются массивом');
            return true;
        }

        for (let i = 0; i < messagesArray.length; i++) {
            const messageObject = JSON.parse(messagesArray[i].message);
            if (messageObject.email === email) {
                return false;
            }
        }

        return true;
    };

    function addMessage(name, message) {
        const key = 'messages';

        let messages = localStorage.getItem(key);

        if (messages) {
            messages = JSON.parse(messages);
        } else {
            messages = [];
        }

        messages.push({ name, message });
        localStorage.setItem(key, JSON.stringify(messages));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedName = trim(name);
        const trimmedEmail = trim(email);
        const trimmedCountry = trim(userInputCountry);
        const trimmedMessage = trim(userInputMessage);

        if (!trimmedName || !trimmedEmail || !trimmedCountry || !trimmedMessage) {
            setErrorMessage('Пожалуйста, заполните все поля.');
            return;
        }

        if (!emailRegex.test(trimmedEmail)) {
            setErrorMessage('Введите реальную почту');
            return;
        }

        if (!checkEmailExists(trimmedEmail)) {
            setErrorMessage('От данного адреса электронной почты уже существует письмо')
            return;
        }

        addMessage('contactFromData', JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            country: trimmedCountry,
            message: trimmedMessage
        }));
        /*
        localStorage.setItem('contactFormData', JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            country: trimmedCountry,
            message: trimmedMessage
        }));*/

        setIsSent(true);
        setErrorMessage('');

        setTimeout(() => {
            setIsSent(false);
            setName('');
            setEmail('');
            setUserInputCountry('');
            setUserInputMessage('');
        }, 3000);
    };

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
                    <img className="mobileImg1" src={mobile_background1} alt="" />
                    <div className="gradient-shadow"></div>
                    <button className="mainBtn">Попробуйте бесплатно</button>
                </div>
                <div className="containerImg1">
                    <img className="mainImg1" src={background_img_1} alt="Первое основное изображение" />
                </div>
            </section>
            <div className="card-container">
                <div className="card">
                    <img src={web_design} alt="card-img1" className="card-img" />
                    <h3 className="card-name">Customizable</h3>
                    <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="card">
                    <img src={web_design} alt="card-img2" className="card-img" />
                    <h3 className="card-name">Quick sharing</h3>
                    <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="card">
                    <img src={web_design} alt="card-img3" className="card-img" />
                    <h3 className="card-name">Social network</h3>
                    <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <section className="social-section">
                <div className="image-container">
                    <img src={phone} alt="Social Network App" className="social-img" />
                </div>
                <div className="social-content">
                    <h1>Discover the social<br />network for users.</h1>
                    <p>Enjoy a built-in social network exclusively for users, giving you the opportunity to connect with like-minded professionals end expand your network.</p>
                    <button className="mainBtn">Попробуйте бесплатно</button>
                </div>
            </section>

            <div className="smallSection">
                <img className="fullGrowthTreeMobile" src={leftTreesMobile} alt="" />
                <img className="fullGrowthTree" src={trees} alt="" />
                <div className="smallCardBox">
                    <span className="cardBoxText">Мы посадим дерево за каждую NFC карточку, подключенную к вашем профилю</span>
                    <img className="cardBoxImg" src={smallCard} alt="" />
                    <img className="cardBoxImgMobile" src={mobileCard} alt="" />
                    <img className="treeBoxImgMobile" src={mobileTree} alt="" />
                    <img className="treeBoxImg" src={tree} alt="" />
                </div>
                <img className="halfTrees" src={halfTrees} alt="" />
                <img className="halfTreesMobile" src={rightTreesMobile} alt="" />
            </div>

            <section className="affiliate-section">
                <div className="affiliate-content">
                    <h1>Get benefits and earn with affiliate links.</h1>
                    <p>Create a profile for free, get your affiliate link and start sharing with friends and partners! Earn for each referral and subscription!</p>
                    <button className="mainBtn">Попробуйте бесплатно</button>
                </div>
                <div className="affiliate-image-container">
                    <img src={phone2} alt="Phone Mockup" className="affiliate-phone" />
                    <div className="bottom-blur"></div>
                </div>
            </section>
            <section className="pricing-section">
                <div className="pricing-header">
                    <h1>Want to enjoy all of the GPM product benefits? Check our plans.</h1>
                </div>

                <div className="pricing-container">
                    <div className="pricing-card free">
                        <div className="plan-type">Free</div>
                        <ul className="features-list">
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>1 Profile included</span>
                            </li>
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>Access to GPM.Mall over 100,000 products up to 35% off</span>
                            </li>
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>Access to GPM.Travel for your first night up to 70% off</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Unblock all the Premium features</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Double your savings, access to GPM.Mall over 100,000 products up to 70% off</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Unblock 4 additional Profiles</span>
                            </li>
                        </ul>
                        <div className="price">FREE</div>
                    </div>
                    <div className="pricing-card premium">
                        <div className="plan-type">Premium</div>
                        <ul className="features-list">
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>1 Profile included</span>
                            </li>
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>Access to GPM.Mall over 100,000 products up to 35% off</span>
                            </li>
                            <li className="feature-active">
                                <img src={tick} alt="check" />
                                <span>Access to GPM.Travel for your first night up to 70% off</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Unblock all the Premium features</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Double your savings, access to GPM.Mall over 100,000 products up to 70% off</span>
                            </li>
                            <li className="feature-inactive">
                                <img src={cross} alt="cross" />
                                <span>Unblock 4 additional Profiles</span>
                            </li>
                        </ul>
                        <div className="price">FREE</div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="form-container">
                    <h1>Свяжитесь с нами</h1>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            maxlength="70"
                            type="text"
                            placeholder="Ваше имя/компания"
                            className="form-input"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <input
                            maxlength="50"
                            type="text"
                            placeholder="Ваша почта"
                            className="form-input"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <div className="autocomplete" ref={countriesInputRef}>
                            <input
                                maxlength="50"
                                type="text"
                                placeholder="Откуда вы"
                                className="form-input"
                                id="countries"
                                value={userInputCountry}
                                onChange={handleCountriesInputChange}
                            />
                            {suggestionsListComponentCountries}
                        </div>
                        <div className="autocomplete" ref={messagesInputRef}>
                            <textarea
                                maxlength="1200"
                                placeholder="Ваше сообщение"
                                className="form-input message"
                                id="myInput"
                                value={userInputMessage}
                                onChange={handleMessagesInputChange}
                                ref={textareaRef}
                            ></textarea>
                            {suggestionsListComponentMessages}
                        </div>
                        <button type="submit" className="mainBtn">Submit</button>
                    </form>
                    {isSent && <p className="success-message">Сообщение успешно отправлено!</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </section>
        </main>
    );
}

export default Link;
