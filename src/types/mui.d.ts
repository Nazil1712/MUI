// We need to do this -- So that MUI Engine can recognize "dashed" variant

import "@mui/material"

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}
