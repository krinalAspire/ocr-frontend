import React, { useEffect, useState } from "react";
import {
  Box,
  createFilterOptions,
  TextField,
  Popover,
  Button,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";
import axios from "axios";
import TagSelection from "../allinvoice/TagSelection";
import { tag } from "./options";

const TagsButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValueAutocomplete, setInputValue] = useState("");
  const [tagdata, setTagdata] = useState([]);
  const [value, setValue] = useState([]);
  // const [createdTags, setCreatedTags] = useState(false);

  //  const [newtag, setnewTag] = useState(null);

  // const [createTagValue, setCreateTagValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const getTagfromAPi = () => {
    axios
      .get("http://localhost:5000/Tag")
      .then((res) => {
        setTagdata(res.data);
        //  console.log(res.data)
      })
      .catch((err) => {
        // toast.error("Failed: " + err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    getTagfromAPi();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setInputValue(" ");
    // setCreateTagValue("");
  };
  const open = Boolean(anchorEl);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  // const filter = createFilterOptions();

  const getTag = (event) => {
    // setInputValue(event.target.value);
    // // console.log(inputValue);
    // setTagdata(inputValue)
    const data = {
      id: Math.random().toString(36).substr(2, 9),
      tag: inputValueAutocomplete,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/Tag", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setTagdata([...tag, response.data]);
        console.log(response?.data);
        // setTagdata(response?.data);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTagdata = (tag) => {
    // setInputValue(event.target.value);
    // // console.log(inputValue);
    // setTagdata(inputValue)
    console.log("getTagdata is called");
    const data = {
      id: Math.random().toString(36).substr(2, 9),
      tag: tag,
      // data
    };
    console.log("data", data);
    axios
      .post("http://localhost:5000/Tag", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setTagdata([...tag, response.data]);
        console.log(response?.data);
        // setTagdata(response?.data);
        setInputValue("");
        // setCreatedTags(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleAddValue = (newValue) => {
  //   console.log("new value", newValue[0]);
  //   let updatedValue = [];

  //   if (typeof newValue === "string") {
  //     updatedValue = [...value, newValue[0].tag];
  //   } else if (newValue && newValue.inputValue) {
  //     updatedValue = [...value, newValue.inputValue];
  //     tag=newValue.inputValue
  //   } else {
  //     updatedValue = newValue;
  //   }

  //   let tag = "";

  //   if (Array.isArray(updatedValue)) {
  //     // console.log("updatedValue", updatedValue);
  //     // console.log("updatedvalue", updatedValue[0].tag);
  //     const firstItem = updatedValue[0];
  //     if (typeof firstItem === "string") {
  //       // setnewTag(firstItem)
  //       tag = firstItem;
  //     } else if (firstItem && firstItem.inputValue) {
  //       // setTagdata(firstItem.inputValue)
  //       tag = firstItem.inputValue;
  //     }
  //   }

  //   // if (Array.isArray(updatedValue)) {
  //   //   const firstItem = updatedValue[0];
  //   //   if (typeof firstItem === "string" && firstItem.startsWith('Add "')) {
  //   //     // Extract the tag from the string format "Add 'tagname'"
  //   //     tag = firstItem.slice(5, -1); // Remove the "Add " and the trailing double quote
  //   //   } else if (firstItem && firstItem.inputValue) {
  //   //     tag = firstItem.inputValue;
  //   //   }
  //   // }
  //   console.log("updated value",updatedValue );
  //   // console.log("tag",tag );

  //   setValue(updatedValue);


  //   if (tag.length !== 0) {
  //     console.log("tag", tag);
  //     // getTagdata(tag); // Pass the extracted tag string directly
  //     // getTagfromAPi();
  //   }

  //   // if (tag.length !== 0 && !value.includes(tag)) {
  //   //   console.log("tag", tag);
  //   //   getTagdata(tag); // Pass the extracted tag string directly
  //   //   getTagfromAPi();
  //   // }
  //   // getTagdata(tag); // Pass the extracted tag string directly
  //   // getTagfromAPi();
  // };


  const handleAddValue = (newValue) => {
    if (newValue && newValue.inputValue) {
      const newTag = newValue.inputValue;
  
      // Check if the newTag is not already in the value array
      if (!value.includes(newTag)) {
        // Call the create tag post API with the newTag
        console.log("newtag", newTag);
        // createTagAPI(newTag)
        //   .then((response) => {
        //     // Handle the response as needed
        //     console.log("Tag created successfully:", response.data);
  
        //     // Update the value state with the newTag
        //     setValue([...value, newTag]);
        //   })
        //   .catch((error) => {
        //     console.error("Error creating tag:", error);
        //   });
      }
    } else {
      // Handle other cases (e.g., selecting from the list) as needed
      // You can put your existing logic here
      // ...
      console.log("selected options");
    }
  };
  

  // const handleAddValue = (newValue) => {
  //   let updatedValue = [];
  //   let tag = "";
  
  //   if (typeof newValue === "string") {
  //     updatedValue = [...value, newValue];
  //   } else if (newValue && newValue.inputValue) {
  //     tag = newValue.inputValue;
  
  //     // Check if the tag is not already in the createdTags list
  //     if (!createdTags.includes(tag)) {
  //       setCreatedTags([...createdTags, tag]);
  //       // Log the tag if it's created
  //       console.log("tag created:", tag);
  //     }
  
  //     updatedValue = [...value, tag];
  //   } else {
  //     updatedValue = newValue;
  //   }
  
  //   setValue(updatedValue);
  // };

  // const handleAddValue = (newValue) => {
  //   let updatedValue = [];
  //   let tag = '';

  //   console.log('Before setting tag:', tag); // Log before setting 'tag'

  //   if (typeof newValue === 'string') {
  //     updatedValue = [...value, newValue];
  //     tag = newValue; // Set the tag
  //     // console.log("upd", updatedValue);
  //   } else if (newValue && newValue.inputValue) {
  //     updatedValue = [...value, newValue.inputValue];
  //     tag = newValue.inputValue; // Set the tag
  //   } else {
  //     updatedValue = newValue;
  //   }

  //   console.log('After setting tag:', tag); // Log after setting 'tag'
  //   console.log(updatedValue);

  //   setValue(updatedValue);

  //   if (tag) {
  //     console.log('tag', tag); // Log 'tag' if it's truthy
  //     getTagdata(tag); // Pass the extracted tag string directly
  //   }

  //   getTagfromAPi(); // This might be unrelated to tag selection/addition
  // };

  // console.log("newtag", newtag);
  // console.log("value", value);

  // const handleCreateClick = () => {
  //   if (inputValue.trim() !== "") {
  //     //   dispatch(addTag({ title: inputValue, checked: false }));
  //     setInputValue("");
  //   }
  // };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  const handleinputchageforTag = (newValue) => {
    console.log("inputvhange", newValue);
    const newtag = newValue;
    console.log("inputvhange", newtag);
    // setValue(newValue)
  };

  console.log("value", value.map(item => item.tag));

  const filter = createFilterOptions();

  return (
    <>
      {/* <Autocomplete
     multiple
      value={value}
      onChange={(event, newValue) => {handleAddValue(newValue)}}
      // onChange={(event, newValue) => {
      //   if (typeof newValue === 'string') {
      //     setValue({
      //       tag: newValue,
      //     });
      //   } else if (newValue && newValue.inputValue) {
      //     // Create a new value from the user input
      //     setValue({
      //       tag: newValue.inputValue,
      //     });
      //   } else {
      //     setValue(newValue);
      //   }
      // }}
      // onInputChange={(event, newValue) => {handleinputchageforTag(newValue)}}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.tag);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            tag: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
       disableCloseOnSelect
      id="free-solo-with-text-demo"
      options={tagdata}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.tag;
      }}
      // renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                  {option.tag}
                </li>
              )}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} placeholder="Search Tags" size="small" />
      )}
    /> */}

      <Box>
        <Button onClick={handleClick} className={classes.TagButton}>
          Tag
          <KeyboardArrowDownIcon />
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          // sx={{ height: "41vh" }}
        >
          <Box
            className={classes.PopoverBox}
            sx={{
              // padding: "10px",
              padding: {
                xxl: "10px",
                xl: "7px",
                lg: "6px",
                md: "5px",
                sm: "5px",
                xs: "5px",
              },
            }}
          >
            <Autocomplete
              multiple
              value={value}
              onChange={(event, newValue) => {
                handleAddValue(newValue);
              }}
              // onChange={(event, newValue) => {
              //   if (typeof newValue === 'string') {
              //     setValue({
              //       tag: newValue,
              //     });
              //   } else if (newValue && newValue.inputValue) {
              //     // Create a new value from the user input
              //     setValue({
              //       tag: newValue.inputValue,
              //     });
              //   } else {
              //     setValue(newValue);
              //   }
              // }}
              // onInputChange={(event, newValue) => {handleinputchageforTag(newValue)}}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.tag
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    tag: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              disableCloseOnSelect
              id="free-solo-with-text-demo"
              options={tagdata}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.tag;
              }}
              // renderOption={(props, option) => <li {...props}>{option.title}</li>}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    sx={{ marginRight: 1 }}
                    checked={selected}
                    //  checked={option.tag ? true : false}
                  />
                  {option.tag}
                </li>
              )}
              sx={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} placeholder="Search Tags" size="small" />
              )}
            />

            {/* <Autocomplete
              //  freeSolo
              sx={{
                // width: "17.81vw",
                width:{xxl:"13vw", xl:"12vw", lg:"14vw", md:"13.5vw", sm:" 13vh", xs:"15vh"}
              }}
              multiple
              id="checkboxes-tags-demo"
              // options={tag}
              options={tagdata}
              inputValue={inputValueAutocomplete}
              onInputChange={handleInputChange}
              disableCloseOnSelect
              freeSolo
              // getOptionLabel={(option) => option.title}
              getOptionLabel={(option) => option.tag}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                  {option.tag}
                </li>
              )}
              renderInput={(params) => (
                <Box>
                  <TextField
                    {...params}
                    placeholder="Search Tags"
                    size="small"
                    // sx={{
                    //   "& .MuiOutlinedInput-root": {
                    //     height: {
                    //       xxl:"40px",
                    //       xl: "30px",
                    //       lg: "20px",
                    //       md: "10px",
                    //       sm: "10px",
                    //       xs: "10px",
                    //     },
                    //   },
                    // }}
                  /> */}
            {/* {inputValueAutocomplete &&
                    !tagdata.some(
                      (option) =>
                        option.tag.toLowerCase() === inputValueAutocomplete.toLowerCase()
                    ) && (
                      <Button
                        onClick={getTag}
                        variant="contained"
                        // className={classes.CreateTagButton}
                        sx={{
                          // width: "17.81vw",
                          width:{xxl:"13vw", xl:"12vw", lg:"14vw", md:"13.5vw", sm:" 13vh", xs:"15vh"},
                          // width:{xxl:"342px", xl:"330px", lg:"320px", md:"310px", sm:"280px", xs:"270px"},
                          // height: "7vh",
                          // height:{xxl:"4vh", xl:"4vh", lg:"5.5vh", md:"6vh", sm:" 5vh", xs:"4vh"},
                          height:{xxl:"40px", xl:"40px", lg:"35px", md:"34px", sm:" 40px", xs:"36px"},
                          marginTop: "10px",
                          backgroundColor: "rgba(30, 30, 30, 0.1)",
                          color: "rgba(43, 43, 43, 0.8)",
                          ":hover": {
                            backgroundColor: "rgba(30, 30, 30, 0.1)",
                            color: "rgba(43, 43, 43, 0.8)",
                          },
                        }}
                      > */}
            {/* <AddIcon sx={{ marginRight: "1vw" }} />
                        Create "{inputValueAutocomplete}"
                      </Button>
                    )}
                </Box>
              )} */}
            {/* renderTags={(value, getTagProps) => (
                <div>
                  {value.map((option, index) => (
                    <div key={option.tag} {...getTagProps({ index })}>
                      {option.tag}
                    </div>
                  ))}
                  {inputValue && !tag.some((option) => option.tag.toLowerCase() === inputValue.toLowerCase()) && (
                    <Button onClick={getTag} variant="contained" >
                      Create Tag "{inputValue}"
                    </Button>
                  )}
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // label="Search Tags"
                  placeholder="Search Tags"
                  variant="outlined"
                  autoFocus
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {inputValue && !tag.some((option) => option.tag.toLowerCase() === inputValue.toLowerCase()) && (
                          <Button onClick={getTag} color="primary">
                            Create Tag "{inputValue}"
                          </Button>
                        )}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                /> */}
            {/* )}
            /> */}
            {/* {inputValue &&
              !tag.some(
                (option) =>
                  option.tag.toLowerCase() === inputValue.toLowerCase()
              ) && (
                <Button onClick={getTag} color="primary">
                  Create Tag "{inputValue}"
                </Button>
              )} */}
            {/* <Button
              variant="contained"
              onClick={getTag}
              sx={{
                width: "21vw",
                height: "15vh",
                marginTop: "5vh",
                backgroundColor: "rgba(30, 30, 30, 0.1)",
                color: "rgba(43, 43, 43, 0.8)",
                ":hover": {
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                  color: "rgba(43, 43, 43, 0.8)",
                },
              }}
            >
              {`Create ${inputValue}`}
            </Button> */}
            {/* {inputValue &&
              !tag.some(
                (option) =>
                  option.tag.toLowerCase() === inputValue.toLowerCase()
              ) && (
                <Button
                  onClick={() => {
                    setCreateTagValue(inputValue);
                    getTag();
                  }}
                  variant="contained"
                  sx={{
                    width: "21vw",
                    height: "15vh",
                    marginTop: "5vh",
                    backgroundColor: "rgba(30, 30, 30, 0.1)",
                    color: "rgba(43, 43, 43, 0.8)",
                    ":hover": {
                      backgroundColor: "rgba(30, 30, 30, 0.1)",
                      color: "rgba(43, 43, 43, 0.8)",
                    },
                  }}
                >
                  {`Create ${inputValue}`}
                </Button>
              )} */}
          </Box>
        </Popover>
      </Box>
      {/* <Root> */}
      {/* <Button
        variant="text"
        onClick={handleClick}
        className={classes.TagButton}
      >
        Tags
        <KeyboardArrowDownIcon />
      </Button> */}
      {/* <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > */}
      {/* <TagSelection /> */}
      {/* <Box
          // className={classes.PopOverBox}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "18vw",
          }}
        >
          <TextField
            autoFocus
            placeholder="Search tags"
            variant="outlined"
            margin="normal"
            name="tag"
            value={inputValue}
            onChange={handleInputChange}
          />
          {tag.map((tag) => (
            <Box
              key={tag.id}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  padding: "0.5rem",
                  height: "100%",
                  width: "100%",
                  marginBottom: "1vh",
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                }}
              >
                {tag.tag}
              </Typography>
            </Box>
          ))}
          {tag.length > 0 || inputValue ? (
            <Button
              disabled={!inputValue}
              onClick={getTag}
              variant="contained"
              startIcon={<AddIcon />}
              // className={classes.CreatePopOverButton}
              sx={{
                backgroundColor: "rgba(30, 30, 30, 0.1)",
                color: "rgba(43, 43, 43, 0.8)",
                ":hover": {
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                  color: "rgba(43, 43, 43, 0.8)",
                },
                padding: "1vh 0vw",
              }}
            >
              {`Create ${inputValue}`}
            </Button>
          ) : (
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "rgba(0, 0, 0, 0.60)",
                padding: "1vh 0vw",
              }}
            >
              Type to create tag..{" "}
            </Typography>
          )}
        </Box> */}
      {/* </Popover> */}
      {/* </Root> */}
    </>
  );
};

export default TagsButton;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
