import React, { Component } from "react";
import { Item, Image, Container, Header } from "semantic-ui-react";

export default class NoticePage extends Component {
    render() {
        return (
            <div>
                <Container text>
                    <Header
                        as="h1"
                        content="All Notices"
                        style={{
                            fontSize: "2em",
                            fontWeight: "Normal",
                            marginBottom: "1em",
                            marginTop: "3em"
                        }}
                    />
                    <Item.Group>
                        <Item>
                            <Item.Image
                                size="tiny"
                                src="https://react.semantic-ui.com/images/wireframe/image.png"
                            />

                            <Item.Content>
                                <Item.Header as="a">Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                                </Item.Description>
                                <Item.Extra>Read More...</Item.Extra>
                            </Item.Content>
                        </Item>

                        <Item>
                            <Item.Image
                                size="tiny"
                                src="https://react.semantic-ui.com/images/wireframe/image.png"
                            />

                            <Item.Content>
                                <Item.Header as="a">Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                                </Item.Description>
                                <Item.Extra>Read More...</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image
                                size="tiny"
                                src="https://react.semantic-ui.com/images/wireframe/image.png"
                            />

                            <Item.Content>
                                <Item.Header as="a">Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                                </Item.Description>
                                <Item.Extra>Read More...</Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Container>
            </div>
        );
    }
}
