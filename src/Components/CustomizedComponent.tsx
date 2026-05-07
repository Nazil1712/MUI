import { styled, Slider, type SliderProps } from "@mui/material";

/* const CustomSlider = styled(Slider)<SliderProps>(({theme})=>({                      
    width: theme.spacing(10), // 10 * 8px ==> 80px                      
    color: theme.palette.success.main,                      

    "& .MuiSlider-thumb" : {                        
        "&:hover, &.Mui-focusVisible" :{                        
            color:theme.palette.error.main                      
        }                       
    }                       
}))     */


// Using Custom Slider

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

const CustomizedComponent = () => {
  return (
    <>
      <CustomSlider error={true}/>
    </>
  );
};

export default CustomizedComponent;
