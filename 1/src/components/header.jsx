import Logo from '../img/Logo.png'


export default function header() {
    return (
        <header>
            <div>
                <p>Ola</p>
            </div>

            <div>
                <img src={Logo} alt="" style={{height: "40px" }} />
            </div>

        </header>
    )
};