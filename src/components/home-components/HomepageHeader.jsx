import React from "react";
import { Container, Header, Button, Icon, Image } from "semantic-ui-react";
import styles from "./HomepageHeader.module.css";

class HomepageHeader extends React.Component {
    render() {
        return (
            <Container text className={styles.header}>
                <Image
                    src="logo.png"
                    size="small"
                    style={{
                        marginTop: "8em",
                        marginBottom: 0
                    }}
                />
                <Header
                    as="h1"
                    content="Electornics and Communication Engineering Alumni Association"
                    style={{
                        fontSize: "2em",
                        fontWeight: "Normal",
                        marginBottom: 0
                    }}
                />
                <Header
                    as="h2"
                    content="Khulna University"
                    style={{
                        fontSize: "1.5em",
                        fontWeight: "Normal",
                        marginTop: "0.5em"
                    }}
                />
                <p>Hey ECE Grad! Haven't Joined Yet?!</p>
                <Button
                    primary
                    size="large"
                    style={{
                        marginBottom: "6em"
                    }}
                >
                    Join Now
                    <Icon name="right arrow" />
                </Button>
            </Container>
        );
    }
}

export default HomepageHeader;
