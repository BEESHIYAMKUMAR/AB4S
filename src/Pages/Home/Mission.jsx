import data from "../../data/index.json";

export default function Mission() {
    return (
        <section className="skills--section" id="Mission">  
        <div className="container">    
        <p><span class="highlight-red">AlphaBeta4Success</span>,
        We are an organisation that is passionate about making a difference to young people in our communities.
        </p><br></br>
        <img src="./img/mission_header.png" alt="Mission"/>
        </div>          
        </section>
        );

        // <div className="skills--section--container">
        //     {data?.skills?.map((item, index) => (
        //     < div key={index} className="skills--section--card">
        //         <div className="skills--section--img">
        //         <img src={item.src} alt="Product Chain" />
        //         <h3 className="skills--section--title">{item.title}</h3>
        //         </div>
        //         <div id="wrapper" className="skills--section--card--content">
        //         <div class="scrollbar" id="style-8">
        //             <div class="force-overflow" >
        //                 <ul class="live">
        //                     <li className="skills--section--description"><strong>{item.header1}</strong>{item.description1}</li>
        //                     <li className="skills--section--description"><strong>{item.header2}</strong>{item.description2}</li>
        //                     <li className="skills--section--description"><strong>{item.header3}</strong>{item.description3}</li>
        //                     <li className="skills--section--description"><strong>{item.header4}</strong>{item.description4}</li>
        //                     <li className="skills--section--description"><strong>{item.header5}</strong>{item.description5}</li>
        //                     <li className="skills--section--description"><strong>{item.header6}</strong>{item.description6}</li>
        //                     <li className="skills--section--description"><strong>{item.header7}</strong>{item.description7}</li>
        //                     <li className="skills--section--description"><strong>{item.header8}</strong>{item.description8}</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     ))}
        // </div>
    }