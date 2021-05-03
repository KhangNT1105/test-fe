import React from 'react';
import './Card.scss';
import { ICard } from './Card.d'
import Image from 'components/atoms/Image/Image';
const Card: React.FC<ICard> = ({ _id, src, createdAt, description, title, alt = "card" }) => {
    const renderDate = (date: Date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()].toUpperCase();
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`
    }
    return <article className="customCard">
        <div className="customCard-top">
            <Image src={src} alt={alt} />
        </div>
        <div className="customCard-body">
            <div className="customCard-body__title">
                <h1>{title}</h1>
            </div>
            <div className="customCard-body__date">
                <div >{renderDate(createdAt)}</div>
            </div>
            <div className="customCard-body__description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    </article>;
}

export default Card;