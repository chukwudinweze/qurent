const styles = {
  root: {                           // - The TextField-root
      border: 'solid 3px #0ff',     // - For demonstration: set the TextField-root border
      padding: '3px',               // - Make the border more distinguishable

      // (Note: space or no space after & matters. See SASS "parent selector".)
      '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
          '& fieldset': {            // - The <fieldset> inside the Input-root
              borderColor: 'pink',   // - Set the Input border
          },
          '&:hover fieldset': {
              borderColor: 'yellow', // - Set the Input border when parent has :hover
          },
          '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
              borderColor: 'green',
          },
      },
  },
};

export const TryMui = withStyles(styles)(function(props) {
  const { classes } = props;
  return (<TextField label="my label" variant="outlined"
      classes={ classes }
  />);
})
Note that you can increase specificity in different ways, e.g. this would work as well (a bit different):

  '& fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
  },