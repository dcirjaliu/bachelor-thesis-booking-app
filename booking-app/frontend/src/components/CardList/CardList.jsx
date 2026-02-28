import { services } from "../../assets/data/indexData.js";
import Card from "../Card/Card";
import Grid from "@mui/material/Grid";

function CardList({ isLoggedIn = false, children, styleAlignment, styleGap }) {
  return (
    <Grid
      container
      spacing={2.5}
      sx={{
        mt: 2.5,
        overflow: "visible",
      }}
    >
      {services.map((item, index) => (
        <Grid
          key={index}
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2.5,
          }}
        >
          <Card
            key={index}
            img={item.image}
            title={item.title}
            description={!isLoggedIn ? item.description : undefined}
            link={`/serviceDetails/${index + 1}`}
            isLoggedIn={isLoggedIn}
            children={children}
            styleAlignment={styleAlignment}
            styleGap={styleGap}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
