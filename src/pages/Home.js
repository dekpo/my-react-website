import Love from '../components/Love';
import Button from '../components/Button';

const Home = () => {
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Home</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <Button start={10} />
                        <Button start={0} />
                        <Button start={30} />
                        <Love name="coding" />
                        <Love name="JavaScript" />
                        <Love name="React" />
                        <Love name="Frontend" />
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home