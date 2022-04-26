import { useEffect, useState } from "react"
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Portfolio = () => {
    // on déclare la variable joke ET sa fonction/méthode setJoke
    // les deux en même temps grâce au hook useState()
    let [joke, setJoke] = useState('');
    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value);
                console.log(data);
            })
    }

    const nextPage = (page) => {
        setPage(page);
        console.log("Page:",page)
    }
    let [page, setPage] = useState(1);
    let [gallery, setGallery] = useState([]);
    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=" + page + "&limit=3")
            .then(response => response.json())
            .then(data => {
                setGallery(data);
                console.log(data);
            })
    }
    // useEffect est une hook
    // qui permet d'accéder ici à l'état 'compentDidMount' du composant
    // comme le ngOnInit ;) 
    useEffect(() => loadJoke, []);
    useEffect(() => loadPics, [page]);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                        <button className="btn btn-dark" onClick={loadJoke}>Chuck Norris ?</button>
                        <p>{joke}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>

                <div className="row">
                    {
                        gallery.map((item) => {
                            let source = `https://picsum.photos/id/${item.id}/640/380`;
                            let title = `Picture by ${item.author}`;
                            let id = item.id;
                            let dim = { 'width': item.width, 'height': item.height };
                            return (
                                <Card key={id} source={source} title={title} dim={dim} />
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio