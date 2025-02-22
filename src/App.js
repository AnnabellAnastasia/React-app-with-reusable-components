import  "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){
    return (
<>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistant</p>
            </div>
        </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                    <ProfileCard 
                    title="Alexa" 
                    handle="@amazonecho" 
                    img={AlexaImage}
                    description="Alexa is a virtual assistant that controls smart devices, but it can also play music, answer questions, read the news, and more."
                    />
                        </div> 
                    <div className="column is-3">
                    <ProfileCard 
                    title="Cortana" 
                    handle="@cortana" 
                    img={CortanaImage}
                    description="Cortana is a virtual assistant that can help you with tasks, answer questions, and more. It is available on Windows 10 and other Microsoft products."
                    />
                        </div> 
                    <div className="column is-3">
                    <ProfileCard 
                    title="Siri" 
                    handle="@apple" 
                    img={SiriImage}
                    description="Siri is a virtual assistant that is available on Apple devices. It can help you with tasks, answer questions, and more."
                    />
                        </div> 
                 </div>
            </section>
            </div>
            </>
    )
}
export default App;