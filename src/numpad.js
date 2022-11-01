import React from "react"
import {Container} from "@mui/system"
import {Button, Grid} from "@mui/material"

function Numpad({reset, calculate, renderSwitch, deletefunction, addition, extraction, multiplication, division}) {
    return(
<Container className="MainNumPad" maxWidth="md" fixed={true}>
        <Grid container justifyContent={"center"}>
            <Grid container style={{margin:'5px'}}>
          <Grid xs>
            <Button variant="contained" size="large"  onClick={() => {renderSwitch(7)}}>7</Button>
          </Grid>
          <Grid xs>
            <Button variant="contained" size="large"  onClick={() => {renderSwitch(8)}}>8</Button>
          </Grid>
          <Grid xs>
            <Button variant="contained" size="large"  onClick={() => {renderSwitch(9)}}>9</Button>
          </Grid>
          <Grid xs>
            <Button variant="contained" size="large" onClick={() => {deletefunction()}}>DEL</Button>
          </Grid>
          </Grid>
          <Grid container style={{margin:'5px'}}>
            <Grid xs>
              <Button variant="contained" size="large"  onClick={() => {renderSwitch(4)}}>4</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large"  onClick={() => {renderSwitch(5)}}>5</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large"  onClick={() => {renderSwitch(6)}}>6</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {addition()}}> + </Button>
            </Grid>
          </Grid>
          <Grid container style={{margin:'5px'}}>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {renderSwitch(1)}}>1</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {renderSwitch(2)}}>2</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large"  onClick={() => {renderSwitch(3)}}>3</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {extraction()}}> - </Button>
            </Grid>
          </Grid>
          <Grid container style={{margin:'5px'}}>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => division()}> / </Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {renderSwitch(0)}}>0</Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" disabled> . </Button>
            </Grid>
            <Grid xs>
              <Button variant="contained" size="large" onClick={() => {multiplication()}}> X </Button>
            </Grid>
          </Grid>
          <Grid container style={{margin:'5px'}}>
            <Grid xs>
                <Button variant="contained" size="large" style={{width:'300px', margin:'5px'}} onClick={() => {reset()}}> RESET </Button>
            </Grid>
            <Grid xs>
                <Button variant="contained" size="large" style={{width:'300px', margin:'5px'}} onClick={() => {calculate()}}> = </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      )
    }

    export default Numpad;