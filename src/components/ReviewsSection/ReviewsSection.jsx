import React, { useState } from 'react'
import "./ReviewsSection.css"
import CommentBlock from "../CommentBlock/CommentBlock"
import LeftArrow from "../../assets/icons/LeftArrow.svg"
import RightArrow from "../../assets/icons/RightArrow.svg"

const reviews = [
  {
    id: 1,
    name: "Алексей",
    age: 19,
    rating: 5,
    text: "Когда я впервые зашёл на Joblix, в общем не знал, кем хочу стать. В школе мне все говорили, что нужно выбирать, но я не чувствовал интереса ни к одной профессии. Сначала попробовал себя в дизайне — было интересно, но чувствовал интереса и к одной профессии. Сначала попробовал себя в дизайне — было интересно, но и не всё чувствовал интереса и к одной профессии. Через пару месяцев платформе я начал подрабатывать, как финансер, и сейчас веду соцсети для двух реальных брендов. Joblix реально помог просто выбрать профессию, а понять себя."
  },
  {
    id: 2,
    name: "Айсулуу",
    age: 27,
    rating: 5,
    text: "После рождения ребёнка я долго искала, чем могу заниматься из дома. На Joblix решила попробовать. Сначала было сложно понять, что именно подходит, но благодаря интерфейсу и задачами — оцутила разницу между профессиями! Задания в оцутила разницу между профессиями! Началась получать заказы для клиентов из Казахстана и Германии, зарабатываю больше, чем на прошлой работе, и чувствую, что наконец-то на своём месте."
  },
  {
    id: 3,
    name: "Эмиль",
    age: 22,
    rating: 5,
    text: "Я всегда думал, что хочу быть программистом, но быстро понял, что кодинг — не моя путь. На Joblix я решил исследовать и другие интересы. Начала попробовать UX-дизайн, потом маркетинг, и только на третьем шаге — пролюбил себя в своей стихии. После прохождения всех заданий в оформить профиль и понял, что жизнь в Праге и всё это началось с первого шага на Joblix."
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Отображаем 3 карточки, начиная с currentIndex
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="reviews_section">
      <div className="reviews_content">
        <h2 className="reviews_title">КЕЙСЫ JOBLIX</h2>

        <div className="reviews_wrapper">
          <button className="nav_button nav_button_left" onClick={handlePrev}>
            <img src={LeftArrow} alt="previous" style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(77%) saturate(1317%) hue-rotate(157deg)' }}/>
          </button>

          <div className="reviews_container">
            {visibleReviews.map((review) => (
              <CommentBlock
                key={review.id}
                name={review.name}
                age={review.age}
                rating={review.rating}
                text={review.text}
              />
            ))}
          </div>

          <button className="nav_button nav_button_right" onClick={handleNext}>
            <img src={RightArrow} alt="next" style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(77%) saturate(1317%) hue-rotate(157deg)' }}/>
          </button>
        </div>
      </div>
    </section>
  )
}
