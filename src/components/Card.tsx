import "./Card.css";
interface CardProps {
  cardBody: string;
  cardTitle: string;
  cardImg: string;
  cardLink: string;
}
const Card = ({ cardBody, cardTitle, cardImg, cardLink }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card ">
        <img
          src={cardImg}
          className="card-img-top"
          alt="A hammock on a beach"
        />
        <div className="card-body ">
          {cardTitle}
          <p className="card-text ">{cardBody}</p>
          <a href={cardLink}>Program Website</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
