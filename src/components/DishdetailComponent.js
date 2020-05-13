import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function renderComments(comments) {

        if (comments != null) {

            const co = comments.map((c) => {
                return (
                    <li key={c.id}>
                        <p> {c.comment}</p>
                        <p> -- {c.author}, {c.date}</p>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {co}
                    </ul>
                </div>
            );

        }
        else
            return (
                <div></div>
            );
    }

   function renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }
    const  DishDetail = (props) => {

            const dish = props.dish;
            if (dish == null)
                return (<div></div>);
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
                    </div>
                    {renderComments(dish.comments)}
                </div>
            );
      
        
      }

      
export default DishDetail;