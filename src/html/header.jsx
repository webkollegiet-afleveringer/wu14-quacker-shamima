import { useNavigate } from "react-router";

export default function Header() {

    const Profile = "../svg/profile.svg";
    const navigate = useNavigate();

    const handleProfileClick = () => {
        const isLoggedIn = localStorage.getItem("userEmail");
        if (isLoggedIn) {
            navigate("/profile");
        } else {
            navigate("/login");
        }
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__list__item" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
                        <img src={Profile} alt="Profile" />
                    </li>
                    <li className="header__nav__list__item"><img src="../svg/logo.svg" alt="" /></li>
                    <li className="header__nav__list__item"><img src="../svg/feature.svg" alt="" /></li>
                </ul>
            </nav>
        </header>
    );
}