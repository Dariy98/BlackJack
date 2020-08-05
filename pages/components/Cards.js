import classes from '../styles/main.module.css';

export default function Cards() {

    const cards = [ "/tuz-cherva.jpg", 
                    "/tuz-trefa.jpg", 
                    "/tuz-bubna.jpg", 
                    "/tuz-pika.png",
                    "/king-cherva.png",
                    "/king-trefa.jpg",
                    "/king-bubna.jpg",
                    "/king-pika.jpg",
                    "/queen-pika.jpg",
                    "/queen-cherva.jpg",
                    "/queen-trefa.jpg",
                    "/queen-bubna.jpg",
                    "/jack-pika.jpg",
                    "/jack-cherva.jpg",
                    "/jack-trefa.jpg",
                    "/jack-bubna.jpg",
                    "/10-pik.png",
                    "/10-cherva.png",
                    "/10-bubna.png",
                    "/10-trefa.png",
                    "/9-buben.png",
                    "/9-cherva.png",
                    "/9-pika.jpg",
                    "/9-trefa.jpg",
                    "/8-pik.png",
                    "/8-trefa.jpg",
                    "/8-cherva.jpg",
                    "/8-bubna.png",
                    "/7-trefa.png",
                    "/7-pika.png",
                    "/7-cherva.png",
                    "/7-bubna.jpg",
                    "/6-chervei.png",
                    "/6-pik.png",
                    "/6-tref.png",
                    "/6-bubna.jpg"
                  ]

    return(
        <>
            {cards.map((card, index) => {
                return(
                    <div className={classes.card} key={index}>
                        <img src={card} className={classes.img} alt="card"/>
                    </div>
                )
            })}
        </>
    )
}