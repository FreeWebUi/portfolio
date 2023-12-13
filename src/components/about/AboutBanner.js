import Container from "../common/layout/Container"

const experties = ['Frontend Developer', 'Web Designer', 'Html Coder'];

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1))
}

export default function AboutBanner() {
    const myExperties = experties[getRandom(2)]
    return (
        <div className="aboutBanner bg-amber-50">
            <Container>
                <div className="flex justify-center items-center gap-8">
                    <div className="aboutAvatar">
                        <div className="w-40 h-40 rounded-full border bg-white flex items-center justify-center">My Avatar</div>

                    </div>
                    <div className="aboutIntro text-left">
                        <div className="aboutName">
                            <h4 className="text-3xl font-medium text-teal-700">Hi I'm,</h4>
                            <h1 className="text-6xl font-bold text-teal-900">Taimur Hassan</h1>
                        </div>
                        <div className="aboutText">
                            <p>Experties in various web technologie's <span className=" font-medium text-teal-700">{myExperties}</span> with more than 10 years industry experience in UI/UX and beautifully clean design. </p>
                        </div>
                        <button>Contact Me</button> 
                    </div>
                </div>
            </Container>

        </div>
    )
}