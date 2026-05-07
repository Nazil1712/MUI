import { styled, Slider, type SliderProps, createTheme, Button, ThemeProvider } from "@mui/material";
import { blue, red } from "@mui/material/colors";

/* const CustomSlider = styled(Slider)<SliderProps>(({theme})=>({                      
    width: theme.spacing(10), // 10 * 8px ==> 80px                      
    color: theme.palette.success.main,                      

    "& .MuiSlider-thumb" : {                        
        "&:hover, &.Mui-focusVisible" :{                        
            color:theme.palette.error.main                      
        }                       
    }                       
})) */


// Using Custom SliderProps

type CustomSliderProps = SliderProps & {
    error? : boolean
}

const CustomSlider = styled(Slider, {
    shouldForwardProp : (prop) => prop != "error"
})<CustomSliderProps>(({ theme, error }) => ({
  width: theme.spacing(10), // 10 * 8px ==> 80px
  color: theme.palette.success.main,

  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      color: error ? theme.palette.error.main : theme.palette.success.main,
    },
  },
}));



// Overriding Global theme 
const theme = createTheme({
    typography:{
        // fontFamily:"-apple-system",

        button:{
            // fontSize:"9rem",
            fontStyle: "italic"
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                // disableRipple: true,
                variant:"contained"
            },
            styleOverrides:{
                root:{
                    fontSize:'2rem',
                    variants:[{
                        props:{
                            variant:"outlined",
                            color:"secondary"
                        },
                        style:{
                            fontSize:".5rem"
                        }
                    },
                    {
                        props:{variant:"dashed"},
                        style:{border:`4px dashed ${red[500]}`}
                    },
                    {
                        props: (props) => props.variant == 'dashed' && props.color != "secondary",
                        style:{
                            border:`2px dashed ${blue[500]}`
                        }
                    }
                ]
                }
            }
        }
    }
})

const CustomizedComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomSlider error={true}/>
      <Button>Submit</Button>
      <Button variant="outlined" color="secondary">Outlined Button</Button>
      <Button variant="dashed">Dashed Button</Button>
    </ThemeProvider>
  );
};

export default CustomizedComponent;
