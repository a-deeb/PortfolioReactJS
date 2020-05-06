import React from 'react';
import Card from '../components/Card';
import linkedin from '../assets/images/link.gif'
import blog from '../assets/images/blog.png'
import github from '../assets/images/git.png'
import { Container,Row } from 'react-bootstrap';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                items:[
                    {
                    id: 0,
                    title: 'Linkedin',
                    subTitle: 'Profesional Profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/ahmed-deeb/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Vision Play Media',
                    subTitle: 'Wordpress Blog',
                    imgSrc: blog,
                    link: 'https://visionplaymedia.wordpress.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A-deeb Repository',
                    imgSrc: github,
                    link: 'https://github.com/a-deeb',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id )
            {
                item.selected = false;
            }
        });
    
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render (){
        return(
            <div>
            <Container fluid={true}>        
            <Row className="justify-content-around">      
            {  
                        
                this.makeItems(this.state.items)         
            }
            </Row>
            </Container>
            </div>   
        );
    }
}

export default Carousel