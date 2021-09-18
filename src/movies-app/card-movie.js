import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const CardMovie = ({src, title, subtitle, linkA})=>{

    let imgSrc = src;
    if(src === 'N/A') {
        imgSrc='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='card-image' variant="top" src={imgSrc} alt={title}/>
            <Card.Body style={{height:'100px'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {subtitle}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                    <Link className='view-movie' to={`${title}`}>View Now</Link>
            </Card.Body>
</Card>
    )
}

export default CardMovie    