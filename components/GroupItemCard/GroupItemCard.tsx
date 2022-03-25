import Image from "next/image";
import { useRouter } from "next/router";
import Classes from "./GroupItemCard.module.css";
import img from "/public/image-1.png";
const GroupItemCard = (props: any) => {
  const { title, id } = props.detail;
  const { pathname } = useRouter();
  return (
    <div className={Classes.group__card}>
      {pathname === "/device-detail" ||
        (pathname === "/device-detail-save" && (
          <h5 className={Classes.card__title}>{title}</h5>
        ))}
      <Image
        className={`${Classes.card__img} w-100 rounded-3`}
        src={img}
        alt="img"
      />
      <h5 className={Classes.img__name}>Image Name.jpeg</h5>
      {pathname === "/device-detail" ||
        (pathname === "/device-detail-save" && (
          <p className="text-primary">Connected</p>
        ))}
    </div>
  );
};

export default GroupItemCard;
