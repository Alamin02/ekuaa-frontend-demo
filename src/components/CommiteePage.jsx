import React, { Component } from "react";
import { Container, Image, Grid, Header } from "semantic-ui-react";

export default class CommiteePage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header
                        as="h1"
                        content="Executive Commitee Members"
                        style={{
                            fontSize: "2em",
                            fontWeight: "Normal",
                            marginBottom: "1em",
                            marginTop: "3em"
                        }}
                    />
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}
