import Classes from './Card.module.css'

const Card = (props:any) => {
    const children:any = props.children
    return (
        <div className={Classes.card}>
            {children}
        </div>
    );
};

export default Card;