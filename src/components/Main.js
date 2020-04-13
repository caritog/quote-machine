import React from 'react';

class Main extends React.Component {

    render() {
        return (
            <section className="container jumbotron mt-5 " id="quote-box">
                <div className="starter-template text-center">
                    <h1 id="text">Frase</h1>
                    <span id="author" className="lead">Autor</span>
                </div>
                <div class="quote-buttons text-center">
                    <button class="btn btn-primary mt-3" id="new-quote" type="button">New Quote</button>
                    <br></br>
                    <a class="btn btn-md btn-primary mt-3" id="tweet-quote" href="twitter.com/intent/tweet" role="button">
                        twitter
                <i></i>
                    </a>
                </div>
            </section>
        )
    }
};

export default Main;