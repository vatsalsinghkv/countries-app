import './index.scss';

const Card = ({ children, className, onChange, onClick, figure = false }) => {
  if (figure)
    return (
      <figure
        className={`card ${className}`}
        onClick={onClick}
        onChange={onChange}
      >
        {children}
      </figure>
    );

  return (
    <div className={`card ${className}`} onClick={onClick} onChange={onChange}>
      {children}
    </div>
  );
};

export default Card;
