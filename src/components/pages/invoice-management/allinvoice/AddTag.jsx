import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Popover,
  Button,
  Checkbox,
  Autocomplete,
  Popper,
  Fade,
  Paper,
  createFilterOptions,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { classes } from "./utils";
import axios from "axios";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
import { rowdata, tagOptions } from "./rowdata";

const AddTag = ({id, handleclick}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValueAutocomplete, setInputValue] = useState("");
  const [tagdata, setTagdata] = useState([]);
  const [fixedOptions, setfixedOptions] = useState([]);
  const [value, setValue] =  useState([]);
  const [loggedTags, setLoggedTags] = useState([]);
  const [tagNames, setTagNames] = useState([]);

  // console.log("addtag", id);

  const getTagfromAPi = (id) => {
    // console.log("inside function addtag", id);
    axios
      .get("http://localhost:5000/Tag")
      .then((res) => {
        // console.log(res.data);
        const responseData = res.data;
        setTagdata(res.data);
        // console.log(res.data[13]);
        // const tagsInDocuments = responseData.map((doc) => doc.tag);
        // console.log("tagIndocuments", tagsInDocuments);
        // setfixedOptions(tagsInDocuments);
        // // Set an initial value (if needed)
        // setValue(tagsInDocuments);

        // setfixedOptions([res['data'][4]])
        // console.log("dhshf",[res['data'][4]]);
        // setfixedOptions([res['data'][4]])
        // const fixedOptions = [...];
        // setValue([res.data[4], res.data[13]]);
        //  console.log(res.data)

        const specificDocumentId = id; // Change this to the desired document id
        // console.log("specificDocumentId",specificDocumentId );
        const specificDocument = rowdata.find((doc) => doc.id === specificDocumentId);
        // console.log('specificDocument', specificDocument);
  
        if (specificDocument) {
          // Extract the tags associated with the specific document and set them as fixedOptions
          const tagsForSpecificDocument = [specificDocument]; // If you want it as an array

          const extractedData = tagsForSpecificDocument.map(({ id, tag }) => ({ id, tag }));
  
          // setfixedOptions(tagsForSpecificDocument.map(({ tag, id }) => ({ tag, id })));

          if (extractedData.length > 0) {
            // Set the 'value' state only if 'extractedData' is not empty
            setValue(extractedData);
          } else {
            // Handle the case where there are no valid tags
            console.log("No valid tags found for this document.");
          }

          console.log("tagsForSpecificDocument",extractedData);
          // console.log("tagsForSpecificDocument",tagsForSpecificDocument.id, tagsForSpecificDocument.tag);
        } else {
          console.log(`Document with id '${specificDocumentId}' not found.`);
        }

        // console.log("value", value);
      })
      .catch((err) => {
        // toast.error("Failed: " + err.message);
        console.log(err);
      });
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    // getTagfromAPi(id);
    if(anchorEl !== null) {
      getTagfromAPi(id);
    }
  }, [open]);

  const handleClick = (event) => {
    // getTagfromAPi(id);
    // if(tagdata.length > 0){
      setAnchorEl(event.currentTarget);
    // }
    // setAnchorEl(event.currentTarget);
    // handleclick();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setInputValue(" ");
    // setCreateTagValue("");
  };
  // const open = Boolean(anchorEl);

  // console.log("tagdata", tagdata);
  // console.log("value", value);

  const handleAddValue = (newValue) => {
    if (newValue && newValue.inputValue) {
      const inputValue = newValue.inputValue.toLowerCase();
      if (inputValue === "add tag") {
        // Handle the creation of a new tag here
        console.log("Creating a new tag:", inputValue);
        // handleOptionCreate(newValue.inputValue);
        const newTag = {
          inputValue: `Add "${inputValue}"`,
          tag: inputValue,
        };
        // // Update the selected tags
        // setSelectedTags([...selectedTags, newTag]);
        // setValue([
        //   ...value,
        //   { id: Math.random().toString(36).substr(2, 9), tag: inputValue },
        // ]);
        setTagNames((prevTagNames) => [...prevTagNames, inputValue]);
        // setTagNames([...tagNames, inputValue]);
      } else {
        // Set the selected option when it's not "Add tag"
        setValue(...newValue);
      }
    } else {
      // Set the selected option when newValue is not an object with inputValue
      setValue(...newValue);

      const newTagNames = newValue.map((item) => {
        if (item.tag && item.tag.startsWith('Add "')) {
          // Extract the tag name from the format "Add 'tagname'"
          return item.tag.slice(5, -1); // Remove "Add " and the trailing double quote
        } else if (item.tag) {
          return item.tag; // Return the tag name if it's not in the "Add" format
        } else {
          return ""; // Return an empty string for other cases
        }
      });

      setTagNames(...newTagNames);
      // setTagNames( newValue.map((item) => item.tag));
    }
  };

  const filter = createFilterOptions();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className={open ? "action" : "my-icon"}>
          {/* <Box onClick={handleclick}> */}
          <Box
            component="img"
            onClick={handleClick}
            src={tag}
            alt="tag"
            className={classes.actionIcons}
          />
          {/* </Box> */}
        </Box>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
              id="fixed-tags-demo"
              freeSolo
              value={value && value}
              // onChange={(event, newValue) => {
              //   handleAddValue(newValue);
              // }}
              onChange={(event, newValue) => {
                console.log("newvalue", newValue);
                setValue([
                  // ...fixedOptions,
                  // ...newValue.filter(
                  //   (option) => fixedOptions.indexOf(option) === -1
                  // ),
                  ...newValue
                ]);
                // setValue(...fixedOptions, ...newValue)
                // console.log("onchaneg value", value);
              }}
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
              // handleHomeEndKeys
              disableCloseOnSelect
              options={tagdata}
              getOptionLabel={(option) => option.tag}
              // renderOption={(props, option, { selected }) => (
              //   <li {...props}>
              //     <Checkbox
              //       style={{ marginRight: 8 }}
              //       checked={selected}
              //     />
              //     {option.tag}
              //   </li>
              // )}
             
              renderOption={(props, option) => (
                <li {...props}>
                  {option.inputValue ? (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        {/* <Checkbox
                        checked={value.some((val) => val.tag === option.inputValue)}
                        onChange={() => {
                          // Handle unchecking a created tag here
                          const newValue = value.filter((val) => val.tag !== option.inputValue);
                          setValue(newValue);
                        }}
                      /> */}
                        <AddIcon
                          sx={{
                            width: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "16px",
                              xl: "18px",
                              xxl: "20px",
                            },
                            height: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "16px",
                              xl: "18px",
                              xxl: "20px",
                            },
                            marginRight:"8px"
                          }}
                        />
                        Add "{option.inputValue}"
                      </Box>
                    </>
                  ) : (
                    <>
                      <Checkbox
                        // label={option.tag}
                        checked={value.some((val) => {
                          if (val.tag.startsWith('Add "')) {
                            const extractedTag = val.tag.match(/^Add "(.*?)"$/);
                            if (extractedTag) {
                              return extractedTag[1] === option.tag;
                            }
                          }
                          return val.tag === option.tag;
                        })}
                        onChange={() => {
                          // Handle checking/unchecking a regular tag here
                          const isChecked = value.some((val) => {
                            if (val.tag.startsWith('Add "')) {
                              const extractedTag =
                                val.tag.match(/^Add "(.*?)"$/);
                              if (extractedTag) {
                                return extractedTag[1] === option.tag;
                              }
                            }
                            return val.tag === option.tag;
                          });

                          if (isChecked) {
                            // Uncheck the tag
                            const newValue = value.filter((val) => {
                              if (val.tag.startsWith('Add "')) {
                                const extractedTag =
                                  val.tag.match(/^Add "(.*?)"$/);
                                if (extractedTag) {
                                  return extractedTag[1] !== option.tag;
                                }
                              }
                              return val.tag !== option.tag;
                            });
                            setValue(newValue);
                          } else {
                            // Check the tag
                            const newValue = [
                              ...value,
                              {
                                // id: Math.random().toString(36).substr(2, 9),
                                tag: option.tag,
                              },
                            ];
                            setValue(newValue);
                          }
                        }}
                      />
                      {option.tag}
                    </>
                  )}
                </li>
              )}
              // renderTags={(tagValue, getTagProps) =>
              //   tagValue.map((option, index) => (
              //     <Chip
              //       label={option.tag}
              //       {...getTagProps({ index })}
              //       // disabled={fixedOptions.indexOf(option) !== -1}
              //     />
              //   ))
              // }
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // label="Fixed tag"
                  placeholder="tags"
                  size="small"
                />
              )}
            />
          </Box>
        </Popover>
      </Box>
    </>
  );
};

export default AddTag;

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

// const tagdata=[
//   {
//     "id": "6ryyhb11v",
//     "tag": "alert"
//   },
//   {
//     "id": "x2zvfew3g",
//     "tag": "pending"
//   },
//   {
//     "id": "go4lcxut4",
//     "tag": "success"
//   },
//   {
//     "id": "3lzdwijwg",
//     "tag": "failed"
//   },
//   {
//     "id": "8b037z8nb",
//     "tag": "krinal"
//   },
//   {
//     "id": "mt5e30df8",
//     "tag": "prince"
//   },
//   {
//     "id": "9vim3z0ib",
//     "tag": "ruttu"
//   },
//   {
//     "id": "xdrgcmlww",
//     "tag": "renuka"
//   },
//   {
//     "id": "2m9tjoaix",
//     "tag": "unnat"
//   },
//   {
//     "id": "t9m61g1kg",
//     "tag": "khyati"
//   },
//   {
//     "id": "y28fc7usc",
//     "tag": "tulsi"
//   },
//   {
//     "id": "l8mccu0x1",
//     "tag": "hetakshi"
//   },
//   {
//     "id": "ebba5rm0t",
//     "tag": "hello"
//   },
//   {
//     "id": "27pma6a7c",
//     "tag": "poonam"
//   },
//   {
//     "id": "kdud4vluk",
//     "tag": "bhavesh"
//   },
//   {
//     "id": "l1mn8zd4n",
//     "tag": "JAGDISH"
//   },
//   {
//     "id": "3mso0opon",
//     "tag": "chirag_kamani"
//   },
//   {
//     "id": "g46oqu57v",
//     "tag": "shyam"
//   },
//   {
//     "id": "09md2l1af",
//     "tag": "dev"
//   },
//   {
//     "id": "zty6ajlil",
//     "tag": "ajay"
//   },
//   {
//     "id": "ojf3676rz",
//     "tag": "miten"
//   }
// ]
