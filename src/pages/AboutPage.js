import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return (
        <div>

            <Hero title={props.title} />

            <Content>
            A passion driven and dependable software developer with a solid work ethic. Knowledgeable in a wide variety of computer languages as well as principles and techniques in development, debugging, system design, performance optimization, automation, code review, and unit testing. 
            </Content>
            

        </div>
    );
}
export default AboutPage;