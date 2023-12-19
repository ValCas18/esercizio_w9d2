import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard() {
	return (
		<Card>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title></Card.Title>
				<Card.Text></Card.Text>
				<Button variant="primary">Buy</Button>
			</Card.Body>
		</Card>
	);
}

export default MyCard;
