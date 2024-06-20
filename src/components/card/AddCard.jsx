import { useState } from 'react';
import Modal from 'react-modal';
import css from './AddCard.module.css';
import { FiX } from 'react-icons/fi';
import sprite from '../../assets/icons/Sprite.svg';

export default function AddCard({
  columnId,
  boardId,
  onAddCard,
  isModalOpen,
  setIsModalOpen,
}) {
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardPriority, setCardPriority] = useState('Low');
  const [cardDeadline, setCardDeadline] = useState('');

  const handleAddCard = () => {
    if (cardTitle.trim() && cardDescription.trim() && cardDeadline.trim()) {
      onAddCard({
        columnId,
        title: cardTitle,
        description: cardDescription,
        priority: cardPriority,
        deadline: new Date(cardDeadline).toISOString(),
        board: boardId,
      });
      setCardTitle('');
      setCardDescription('');
      setCardPriority('Low');
      setCardDeadline('');
      setIsModalOpen(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Add Card"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Add Card</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddCard();
        }}
      >
        <input
          type="text"
          value={cardTitle}
          onChange={e => setCardTitle(e.target.value)}
          placeholder="Card title"
          required
          className={css.input}
        />
        <textarea
          value={cardDescription}
          onChange={e => setCardDescription(e.target.value)}
          placeholder="Card description"
          required
          className={css.textarea}
        />
        <label>
          Label color:
          <div className={css.colorContainer}>
            <label>
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={cardPriority === 'Low'}
                onChange={e => setCardPriority(e.target.value)}
              />
              <div className={`${css.colorOption} ${css.colorLow}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={cardPriority === 'Medium'}
                onChange={e => setCardPriority(e.target.value)}
              />
              <div className={`${css.colorOption} ${css.colorMedium}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="High"
                checked={cardPriority === 'High'}
                onChange={e => setCardPriority(e.target.value)}
              />
              <div className={`${css.colorOption} ${css.colorHigh}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Critical"
                checked={cardPriority === 'Critical'}
                onChange={e => setCardPriority(e.target.value)}
              />
              <div className={`${css.colorOption} ${css.colorCritical}`}></div>
            </label>
          </div>
        </label>
        <label>
          Deadline:
          <input
            type="datetime-local"
            value={cardDeadline}
            onChange={e => setCardDeadline(e.target.value)}
            required
            className={css.input}
          />
        </label>
        <button type="submit" className={css.submitButton}>
          <svg className={css.logoIcon} viewBox="0 0 32 32">
            <rect
              className={css.iconBackground}
              width="28"
              height="28"
              rx="6"
              ry="6"
            />
            <use
              href={sprite + '#icon-plus'}
              x="7"
              y="7"
              width="14"
              height="14"
            />
          </svg>
          Add
        </button>
      </form>
      <span className={css.spanClose} onClick={() => setIsModalOpen(false)}>
        <FiX className={css.closeIcon} />
      </span>
    </Modal>
  );
}
