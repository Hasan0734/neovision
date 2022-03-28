import Image from "next/image";
import Classes from "./GroupItemCard.module.css";
import img from "/public/image-1.png";
const GroupItemCard = (props: any) => {
  const { title, id } = props.detail;
  return (
    <div className={Classes.group__card}>
      {props.cardDetail.title && (
        <h5 className={Classes.card__title}>{title}</h5>
      )}
      <Image
        className={`${Classes.card__img} w-100 rounded-3`}
        src={img}
        alt="img"
      />
      <h5 className={Classes.img__name}>Image Name.jpeg</h5>

      {props.cardDetail.status && <p className="text-primary">Connected</p>}
    </div>
  );
};

export default GroupItemCard;
