import React from 'react';
import {HiPlusSm} from 'react-icons/hi';
import {FiMinus} from 'react-icons/fi';
function FAQ() {
    return (
        <section>
        <div className="faq">
            <div className="faqhead">
            <h1 className='faqtitle'>Frequently Asked Questions:</h1>
            <hr className="faqhr"/>
            </div>
            <div className='accordion'>
                
                <div className="faqaccordion" id="question1">
                    <a className="accordionlink" href="#question1">
                        What is this game about?
                        <HiPlusSm className="icon icon-add"/>
                        <FiMinus className="icon icon-remove"/>
                    </a>
                    <div className="answer">
                        <p>lorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumlorem</p>
                    </div>
                </div>

                <div className="faqaccordion" id="question2">
                    <a className="accordionlink" href="#question2">
                        What is this game about?
                        <HiPlusSm className="icon icon-add"/>
                        <FiMinus className="icon icon-remove"/>
                    </a>
                    <div className="answer">
                        <p>lorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumlorem</p>
                    </div>
                </div>

                <div className="faqaccordion" id="question3">
                    <a className="accordionlink" href="#question3">
                        What is this game about?
                        <HiPlusSm className="icon icon-add"/>
                        <FiMinus className="icon icon-remove"/>
                    </a>
                    <div className="answer">
                        <p>lorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumlorem</p>
                    </div>
                </div>

                <div className="faqaccordion" id="question4">
                    <a className="accordionlink" href="#question4">
                        What is this game about?
                        <HiPlusSm className="icon icon-add"/>
                        <FiMinus className="icon icon-remove"/>
                    </a>
                    <div className="answer">
                        <p>lorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumlorem</p>
                    </div>
                </div>

                <div className="faqaccordion" id="question5">
                    <a className="accordionlink" href="#question5">
                        What is this game about?
                        <HiPlusSm className="icon icon-add"/>
                        <FiMinus className="icon icon-remove"/>
                    </a>
                    <div className="answer">
                        <p>lorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumloremlorem ipsum lorem ipsumlorem</p>
                    </div>
                </div>


            </div>
            
        </div>
        </section>
    );
}

export default FAQ;