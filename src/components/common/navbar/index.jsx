import React from "react";
import { Menu, Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "home"
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu pointing fixed={"top"} inverted>
                <Container>
                    <Link to={"/"}>
                        <Menu.Item
                            icon="home"
                            name=""
                            active={activeItem === ""}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    <Link to={"/about"}>
                        <Menu.Item
                            name="About Us"
                            active={activeItem === "About Us"}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    <Link to="/commitee">
                        <Menu.Item
                            name="Executive Committee"
                            active={activeItem === "Executive Committee"}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/news">
                        <Menu.Item
                            name="News"
                            active={activeItem === "News"}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/notice">
                        <Menu.Item
                            name="Notice"
                            active={activeItem === "Notice"}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/gallery">
                        <Menu.Item
                            name="Gallery"
                            active={activeItem === "Gallery"}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    <Menu.Menu position="right">
                        <Link to="/login">
                            <Menu.Item
                                name="Login"
                                active={activeItem === "Login"}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to="/signup">
                            <Menu.Item
                                name="Sign Up"
                                active={activeItem === "Sign Up"}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

export default Navbar;
