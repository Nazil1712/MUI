// We need to do this -- So that MUI Engine can recognize "dashed" variant

import "@mui/material"

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}


// declare module "@mui/material/styles" {
//     interface BreakpointOverrides {
//         xs: false;
//         sm: false;
//         md: false;
//         lg: false;
//         xl: false;
//         mobile:true;
//         tablet:true;
//         laptop:true;
//         desktop:true;
//     }
// }