import Grid from "@mui/material/Grid";
import Header from "../../components/Header/Header";
import { serviceDetails } from "../../assets/data/serviceDetails";
import styles from "./ServiceDetails.module.scss";
import Pagination from "@mui/material/Pagination";
import { useMemo } from "react";
import { useHeader } from "../../hooks/useHeader";
import Button from "../../components/Button/Button";

function ServiceDetails() {
  const headerButtons = useMemo(
    () => (
      <>
        <Button variant="primary">Intră în cont</Button>
        <Button variant="secondary">Contact</Button>
      </>
    ),
    [],
  );

  useHeader(headerButtons, styles.btnsContainerHeader);
  return (
    <Grid container spacing={4} alignItems="stretch">
      <Grid
        item
        xs={12}
        md={5}
        sx={{ padding: 3, display: { xs: "none", md: "block" } }}
      >
        <img src={serviceDetails[0].image} />
      </Grid>
      <Grid item xs={12} md={7} sx={{ padding: 3 }}>
        {serviceDetails.map((s) => (
          <div key={s.id} className={styles.infoCard}>
            <h2>{s.title}</h2>
            <h3>{s.location}</h3>
            <p>{s.description}</p>
            <Pagination
              count={3}
              size="small"
              sx={{
                marginTop: "auto",
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
                "& .Mui-selected": {
                  backgroundColor: "rgba(255, 255, 255, 0.3) !important",
                  color: "white",
                },
                alignSelf: "center",
                paddingBottom: 2,
              }}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default ServiceDetails;
