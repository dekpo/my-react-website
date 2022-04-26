const Card = ({source,title,dim}) => (
    <div className="col-12 col-md-4">
    <div className="card mb-2">
        <img className="img-fluid mb-2 card-img-top" src={source} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Width: {dim.width}px</p>
                <p className="card-text">Height: {dim.height}px</p>
                <a href={source} target="_blank" className="btn btn-dark">Show me the url pic !</a>
            </div>
        </div>
    </div>
)
export default Card