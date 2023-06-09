import { useState } from "react";
import data from "./AccordionData";

const TheOne = () => {
    const [more, setMore] = useState(false);
    return (  
        <section>
            <div className="accordion-flex-con">
            <div className="accordions">
                {data.map((accord)=>{
                    return(
                        <div className="accordion-con" key={accord.id}>
                            <div className="accordion-para-btn-con">
                                <p>{accord.question}</p>
                                <button onClick={()=>setMore(!more)}>{more? <i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</button>
                            </div>
                            
                                {more && <p>{accord.answer}</p>}
                           
                            
                        </div>
                    )
                })}
            </div>
            </div>

        </section>
    );
}
 
export default TheOne;