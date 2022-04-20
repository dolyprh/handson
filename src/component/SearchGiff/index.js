import { Button } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
    },
  });

const SearchGiff = ({query, onChange, onSubmit}) => {
    return (
        <form data-testid="SearchBarForm" onSubmit={onSubmit} className="form-content">
            <CssTextField type="text" name="query" value={query} onChange={onChange}/>
            <Button type="submit" variant="outlined" value="search" >Seacrh</Button>
        </form>
    )
}

export default SearchGiff;