import React, { useState, useEffect } from 'react';

const JokeComponent = () => {
    const [joke, setJoke] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [lastRequestTime, setLastRequestTime] = useState(0);

    const fetchJoke = async () => {
        const currentTime = Date.now();
        const timeSinceLastRequest = (currentTime - lastRequestTime) / 1000;

        // Проверяем, прошло ли 10 секунд с последнего запроса
        if (timeSinceLastRequest < 10 && lastRequestTime !== 0) {
            setError(`Шутку можно запрашивать раз в 10 секунд. Подождите еще ${Math.ceil(10 - timeSinceLastRequest)} сек.`);
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
            const data = await response.json();

            if (data.joke) {
                setJoke(data.joke);
            } else {
                setError('Не удалось получить шутку');
            }
        } catch (err) {
            setError('Ошибка при загрузке шутки');
        } finally {
            setIsLoading(false);
            setLastRequestTime(Date.now());
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h1 className="joke_button">Генератор шуток</h1>
            <button
                onClick={fetchJoke}
                disabled={isLoading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: isLoading ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoading ? 'Загрузка...' : 'Получить шутку'}
            </button>

            {joke && (
                <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
                    <p>{joke}</p>
                </div>
            )}

            {error && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#ffebee',
                    color: '#f44336',
                    borderRadius: '4px'
                }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default JokeComponent;