import React, { Component } from 'react'
import { Accordion, Header, Image, Table, Grid, Button } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleAccordian = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>

        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleAccordian}
        >
        <Table basic='very' celled collapsing>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                        <Image src='https://a.espncdn.com/i/headshots/nfl/players/full/14874.png' rounded />
                        <Header.Content>
                            Andrew Luck
                            <Header.Subheader>IND - QB</Header.Subheader>
                        </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell>936.52</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <Grid columns={3} textAlign="center" >
                <Grid.Column>
                    <Button icon='star' color='yellow' size='massive' aligned='center' />
                </Grid.Column>
                <Grid.Column>
                    <Button icon='heart' color='red' size='massive' aligned='center' />
                </Grid.Column>
                <Grid.Column>
                    <Button icon='pencil' color='violet' size='massive' aligned='center' />
                </Grid.Column>
            </Grid>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleAccordian}
        >
        <Table basic='very' celled collapsing>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                        <Image src='https://a.espncdn.com/i/headshots/nfl/players/full/14874.png' rounded />
                        <Header.Content>
                            Derek Carr
                            <Header.Subheader>OAK - QB</Header.Subheader>
                        </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>26</Table.Cell>
                    <Table.Cell>847.66</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <Grid>
            <Grid.Row columns={3} textAlign="center" >
            <Grid.Column>
                <Button icon='star' color='yellow' size='massive' />
            </Grid.Column>
            <Grid.Column>
                <Button icon='heart' color='red' size='massive' />
            </Grid.Column>
            <Grid.Column>
                <Button icon='pencil' color='violet' size='massive' />
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleAccordian}
        >
        <Table basic='very' celled collapsing>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                        <Image src='https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png' rounded />
                        <Header.Content>
                            Dak Prescott
                            <Header.Subheader>DAL - QB</Header.Subheader>
                        </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                    <Table.Cell>335.33</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <Grid>
            <Grid.Row columns={3} textAlign="center" >
            <Grid.Column>
                <Button icon='star' color='yellow' size='massive' />
            </Grid.Column>
            <Grid.Column>
                <Button icon='heart' color='red' size='massive' />
            </Grid.Column>
            <Grid.Column>
                <Button icon='pencil' color='violet' size='massive' />
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </Accordion.Content>

      </Accordion>
    )
  }
}
