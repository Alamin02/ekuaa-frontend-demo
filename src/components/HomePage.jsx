import React, { Component } from "react";
import {
    Header,
    Segment,
    Grid,
    Container,
    Placeholder,
    Image
} from "semantic-ui-react";

import HomepageHeader from "./home-components/HomepageHeader";

import SectionLabel from "./common/SectionLabel";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <HomepageHeader />
                <Container>
                    <Grid columns={2} stackable>
                        <Grid.Column width={10}>
                            <Segment>
                                <SectionLabel name="News" icon="newspaper" />
                                <Container text>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                        <Placeholder.Paragraph>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Paragraph>
                                    </Placeholder>
                                </Container>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Segment>
                                <SectionLabel
                                    name="Notifications"
                                    icon="bell"
                                />
                                <Container text>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>

                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <SectionLabel name="Events" icon="tripadvisor" />
                    <Grid columns={3} stackable>
                        <Grid.Column>
                            <Segment raised>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length="medium" />
                                        <Placeholder.Line length="short" />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment raised>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length="medium" />
                                        <Placeholder.Line length="short" />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment raised>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length="medium" />
                                        <Placeholder.Line length="short" />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Segment>
                        <SectionLabel name="Gallery" icon="block layout" />
                        <Grid>
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
                        </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}
