import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


type CustomizedSwitchProps = {
  toggleTheme: (event: React.ChangeEvent<HTMLInputElement, Element>, checkd: boolean) => void
}


export default function CustomizedSwitch({ toggleTheme }: CustomizedSwitchProps) {
  return (
    <FormControlLabel
      control={<Switch
        sx={{
          m: 1,
          width: 49,
          height: 24,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            marginTop: "2.5px",
            marginLeft: "5.2px",
            transitionDuration: '300ms',

            '&.Mui-checked': {
              color: '#fff',

              '& + .MuiSwitch-track': {
                backgroundImage: "linear-gradient(to right,hsl(210, 79%, 56%),hsl(146, 68%, 55%)) ",
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,

              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              width: 19,
              height: 19,

            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              width: 19,
              height: 19,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7,
            },
          },
          '& .MuiSwitch-thumb': {
            bgcolor:"background.paper",

            width: 19,
            height: 19,
            boxShadow: "none",
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: "hsl(230, 22%, 74%)",
            opacity: 1,
          },
        }}

        defaultChecked value={true} onChange={toggleTheme} />}
      label="Darkmode"
      labelPlacement='start'
    />
  );
}