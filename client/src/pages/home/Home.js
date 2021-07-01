import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  List,
  Icon,
  Form,
  Divider,
  Header,
} from "semantic-ui-react";

import useForm from "../../hooks/useForm";
import { allcharacters } from "../../actions/characterActions";

const Home = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.character.all);
  const [currentCharacters, setCurrentCharacters] = useState([]);

  const { inputs, handleChange, clearForm } = useForm({
    name: "",
    description: "",
  });

  useEffect(() => {
    dispatch(allcharacters());
  }, [dispatch]);

  useEffect(() => {
    setCurrentCharacters(characters);
  }, [characters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs: ", inputs);
    clearForm();
  };

  return (
    <Container fluid={false} style={{ marginTop: "5rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="firstName">Job Name</label>
          <input
            name="name"
            value={inputs.name}
            placeholder="Job Name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.TextArea
          name="description"
          value={inputs.description}
          label="Description"
          placeholder="Job description"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="cogs" />
          Characters
        </Header>
      </Divider>
      <List divided verticalAlign="middle">
        {currentCharacters.map((character) => (
          <List.Item key={character.name}>
            <List.Content floated="right">
              <Link to={`/character/${character.name}`}>
                <Button size="tiny">View</Button>
              </Link>
            </List.Content>
            <Icon size="big" name="cog" />
            <List.Content>{character.name}</List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Home;
