import { useRouter } from "next/router";
import Classes from "./CardTwo.module.css";

const CardTwo = (props: any) => {
  const { pathname } = useRouter();
  const children: any = props.children;
  return <div className={`${Classes.card__two} `}>{children}</div>;
};

export default CardTwo;
