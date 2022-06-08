import { Button, Grid } from "@mui/material";
import ActionAreaCard from "./components/cards/Card";
import "./styles.css";
import peli from "./api/peliculas";
import { useState } from "react";
import Carrito from "./components/carrito/carrito";

const categories = [
  {
    label: "todos",
    value: "all"
  },
  {
    label: "Terror",
    value: "Horror"
  },
  {
    label: "Accion",
    value: "Action"
  },
  {
    label: "Aventura",
    value: "adventure"
  },
  {
    label: "Fantasia",
    value: "Fantasy"
  },
  {
    label: "Misterio",
    value: "Mistery"
  }
];
export default function App() {
  const [peliculas, setPeliculas] = useState(peli);
  const [carrito, setCarrito] = useState([]);
  function addCart(nombre) {
    const peliAgregada = peli.filter((peli) =>
      peli.nombre.toLowerCase().includes(nombre?.toLowerCase())
    );
    setCarrito([...carrito, peliAgregada]);
  }
  function handleClick(value) {
    if (value === "all") {
      setPeliculas(peli);
      return;
    }
    const peliFilter = peli.filter((peli) =>
      peli.genero.toLowerCase().includes(value.toLowerCase())
    );
    setPeliculas(peliFilter);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Carrito />
      <Grid
        container
        spacing={3}
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {categories.map((categoria) => {
          return (
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => handleClick(categoria.value)}
              >
                {categoria.label}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 1 }}
      >
        {peliculas.map((pelicula) => {
          return (
            <Grid item>
              <ActionAreaCard {...pelicula} addCart={addCart} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
