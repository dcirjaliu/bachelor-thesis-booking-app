import Grid from "@mui/material/Grid";
import { serviceDetails } from "../../assets/data/serviceDetails";
import styles from "./ServiceDetails.module.scss";
import Pagination from "@mui/material/Pagination";
import { useMemo, useState } from "react";
import { useHeader } from "../../hooks/useHeader";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();
  const [page, setPage] = useState(Number(id) || 1);

  const currentService = serviceDetails[page - 1] || serviceDetails[0];

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
        <img src={currentService.image} />
      </Grid>
      <Grid item xs={12} md={7} sx={{ padding: 3 }}>
        <div className={styles.infoCard}>
          <h2>{currentService.title}</h2>
          <h3>{currentService.location}</h3>
          <p>{currentService.description}</p>
          <Pagination
            count={serviceDetails.length}
            page={page}
            onChange={(event, value) => setPage(value)}
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
      </Grid>
    </Grid>
  );
}

export default ServiceDetails;
