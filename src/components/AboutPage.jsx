import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <Container text>
                    <Header
                        as="h1"
                        content="Electornics and Communication Engineering Alumni Association"
                        style={{
                            fontSize: "2em",
                            fontWeight: "Normal",
                            marginBottom: "1em",
                            marginTop: "3em"
                        }}
                    />
                    <p>
                        Electronics and Communication Engineering was offered in
                        1997 under School of Science, Engineering and Technology
                        (SET) of Khulna University. This discipline is the first
                        of its kind in Bangladesh (i.e., it is the first
                        discipline in Bangladesh that offers undergraduate
                        degree Electronics mean of communication subjects as
                        well as Electronics).
                        <br /> <br />
                        Beside regular study curriculum it conducts a project
                        fair every year at the world telecommunication day. The
                        students bring their electronics based projects to the
                        fair. The best ones are rewarded. The discipline has a
                        seminar library, a digital electronics lab, an
                        electrical lab, an analog communication lab, a digital
                        communication lab, a biomedical engineering lab, a
                        computer lab, Microwave and Antenna lab. ECE discipline
                        offers a four-year BSc. Engineering. degree in
                        Electronics and Communication Engineering.
                        <br /> <br />
                        Till 2015, 16 batches have completed their studies. In
                        April 2012, ECE discipline commenced an M.Sc.
                        Engineerin. in ECE program with focus on Electronics and
                        Communication Engineering. Ph.D. Programs in Electronics
                        and Communications Engineering has already been launched
                        from the academic year 2016-2017.
                        <br /> <br />
                        Students of ECE has operated a club named "ROUTER" for
                        Updated Search on ICT Based Technology. ROUTER arranges
                        seminar, project fair, and publishes ICT based
                        magazines. ROUTER is the club of the students of
                        Electronics & Communication Engineering Discipline of
                        Khulna University. Which elaborates as "Roaming Over the
                        Universe Through Electronic Roadway." The theme line of
                        the club is "In search of a new frontier."{" "}
                    </p>
                </Container>
            </div>
        );
    }
}
