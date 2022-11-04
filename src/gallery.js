import Img1 from './images/Scan 912.jpeg';
import Img2 from './images/Scan 913.jpeg';
import Img3 from './images/Scan 914.jpeg';
import Img4 from './images/Scan 915.jpeg';
import Img5 from './images/Scan 916.jpeg';
import Img6 from './images/Scan 917.jpeg';
import './gallery.css';

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
    ]

    return (
        <>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{ width: '100%' }} alt="" />
                        </div>
                    )
                })}
            </div>
            {
                console.warn(data)
            }
        </>
    )
}

export default Gallery;