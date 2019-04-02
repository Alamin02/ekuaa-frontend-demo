import React from "react";
import { Header, Icon } from "semantic-ui-react";

const SectionLabel = props => (
    <Header as="h3">
        <Icon name={props.icon} />
        <Header.Content>{props.name}</Header.Content>
    </Header>
);

export default SectionLabel;
