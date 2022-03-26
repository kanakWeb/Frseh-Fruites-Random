import React from 'react';

const Answer = () => {
    return (
        <div>
          {/* Question to ans section start................................. */}
    <section className="container py-4 my-4 fs-5">
        <h2 className="text-center py-3">Question to Answer Part:</h2>
        <div className="accordion accordion-flush py-4" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <p className="fs-4">How to work react ?</p>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"> 
                    React is a fantastic and wildly popular tool for building websites and apps. It creates a world where JavaScript and HTML live in happy harmony in the same files, and it efficiently renders your ever-changing data to the browser. React allows developers to create large web applications which can change data, without reloading the page. The main purpose of React is to be extremely fast, scalable, modular, and simple. It can be used with a combination of other JavaScript libraries.
                    React provides a very nice way to organize and develop code for a website and to separate components. However, if the website has no user interaction, you can simply pre-generate the website using server-side React rendering, and push the results. So the React renderer can look at the structure declared in JSX, and render it into the browser DOM.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <p className="fs-4">What are the states and props in React?
</p>
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p className="fs-4">States -</p>
                        <ul>
                            <li>The Data is passed within the component only.</li>
                            <li>This.state.name.</li>
                            <li>State are mutable.</li>
                            <li>we can define states in the component itself. </li>
                            <li>The state is set and updated by the object.
                            </li>
                            <li>Both are accessible as attributes of the component class and compose components class and components with a different representation.</li>

                        </ul>
                        <p className="fs-4">Props -</p>
                        <ul>
                            <li>The Data is passed from one component to another.</li>
                            <li> This.props.name.</li>
                            <li> Props are immutable.</li>
                            <li>we can pass properties from parent component.</li>
                            <li> Determine the view upon creation, and they remain static.</li>
                            <li>Both are accessible as attributes of the component class and compose components class and components with a different representation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/* Question to ans section start........................ */}
        </div>
    );
};

export default Answer;