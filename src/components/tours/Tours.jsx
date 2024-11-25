import Tour from "../tour/Tour";

const Tours = ({tours, removeTour}) => {
    return(
        <section>
            <h2>Tours</h2>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })}
            </div>
        </section>
    )
}

export default Tours;