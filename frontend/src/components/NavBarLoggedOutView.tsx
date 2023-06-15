import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
    return (
        <>
            <Button className="persebaya" onClick={onSignUpClicked}>Sign Up</Button>
            <Button className="persebaya" onClick={onLoginClicked}>Log In</Button>
        </>
    );
}

export default NavBarLoggedOutView;