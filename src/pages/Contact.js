import React from "react"

class Contact extends React.Component {
    constructor(props){
       super(props);
       //alert('this is a constructor alert...')
    }


    componentDidMount() {
        console.log("componentDidMount !!!")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount !!!")
    }

    render(){
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Contact</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Le Lorem Ipsum est simplement du faux texte employé { this.props.bidule } </p>
                    </div>
                </div>
            </div>
        </section>
    )
 }
}
export default Contact