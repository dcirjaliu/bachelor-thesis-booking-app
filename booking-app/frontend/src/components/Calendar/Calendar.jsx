import dayjs from "dayjs";
import "dayjs/locale/ro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

dayjs.locale("ro");

function Calendar() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ro">
      <DateCalendar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{
          zoom: 1.3,
          width: "auto",
          maxHeight: "none",
          height: "auto",
          "& .MuiDayCalendar-header": {
            backgroundColor: "#280f91",
            borderRadius: "4px",
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
            "& .MuiTypography-root": {
              color: "white",
              fontWeight: "bold",
              width: "48px",
              textAlign: "center",
            },
          },

          "& .MuiPickersDay-root": {
            backgroundColor: "#98ff98",
            borderRadius: "4px",
            width: "48px",
            height: "30px",
            margin: "2px",
            "&:hover": { backgroundColor: "#76ff76" },
            "&.Mui-selected": {
              backgroundColor: "#98ff98 !important",
              outline: "3px solid #280f91",
              color: "#280f91 !important",
              fontWeight: "bold",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
