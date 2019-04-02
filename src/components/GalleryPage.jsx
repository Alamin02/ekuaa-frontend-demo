import React, { Component } from "react";
import { Container, Grid, Image, Header } from "semantic-ui-react";

export default class GalleryPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header
                        as="h1"
                        content="Gallery"
                        style={{
                            fontSize: "2em",
                            fontWeight: "Normal",
                            marginBottom: "1em",
                            marginTop: "3em"
                        }}
                    />
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={5}>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}
