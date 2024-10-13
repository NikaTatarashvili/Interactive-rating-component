import React, { useState } from "react";
import "./Feedback.css"; // Убедитесь, что этот файл существует. Если нет, удалите эту строку.

const Feedback = () => {
  const [step, setStep] = useState(1);  // Переключение шагов (1, 2, 3)
  const [rating, setRating] = useState(null);  // Хранение выбранной оценки

  // Функция для обработки выбора оценки
  const handleRating = (value) => {
    setRating(value);  // Устанавливаем выбранную оценку
    setStep(2);  // Переходим на следующий шаг
  };

  // Функция для отправки отзыва
  const handleSubmit = () => {
    setStep(3);  // Переход на третий шаг (благодарность)
  };

  return (
    <div className="feedback-container">
      {step === 1 && (  // Отображаем шаг 1
        <div className="feedback-card">
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request.</p>
          <div className="rating-options">
            {[1, 2, 3, 4, 5].map((num) => (  // Создание кнопок с оценками
              <button key={num} onClick={() => handleRating(num)}>
                {num}
              </button>
            ))}
          </div>
          <button className="submit-btn" disabled>
            SUBMIT
          </button>
        </div>
      )}
      {step === 2 && (  // Отображаем шаг 2
        <div className="feedback-card">
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request.</p>
          <div className="rating-options">
            {[1, 2, 3, 4, 5].map((num) => (  // Отображаем кнопки, чтобы можно было выбрать другую оценку
              <button
                key={num}
                onClick={() => setRating(num)}
                className={rating === num ? "selected" : ""}  // Подсвечиваем выбранную оценку
              >
                {num}
              </button>
            ))}
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      )}
      {step === 3 && (  // Отображаем шаг 3 (благодарность)
        <div className="feedback-card">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
