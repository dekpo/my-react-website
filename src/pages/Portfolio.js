import { useEffect, useState } from "react"

const Portfolio = () => {
    // on déclare la variable joke ET sa fonction/méthode setJoke
    // les deux en même temps grâce au hook useState()
    let [joke,setJoke] = useState('');

    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then( data => {
            setJoke(data.value);
            console.log(data);
        } )
    }
    
    // useEffect est une hook
    // qui permet d'accéder ici à l'état 'compentDidMount' du composant 
    useEffect( ()=>loadJoke, []);

    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <h1>Portfolio</h1>
                    <button onClick={ loadJoke }>Chuck Norris ?</button>
                    <p>{ joke }</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio