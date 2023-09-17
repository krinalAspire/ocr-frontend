import React, { useEffect, useState } from "react";
import {
  Box,
  createFilterOptions,
  TextField,
  Popover,
  Button,
  Checkbox,
  Autocomplete,
  List,
  ListItemText,
  ListItem,
  Chip,
  FormControlLabel,
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
  // const [newtag, setnewTag] = useState(null);
  const [loggedTags, setLoggedTags] = useState([]);
  // const [selectedTags, setSelectedTags] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  // const fixedOptions = [top100Films[6]];
  // const [tesvalue, settesValue] = useState([
  //   ...fixedOptions,
  //   top100Films[13],
  // ]);
  // const [filterapi, setfilterapi] = useState(false);
  // const [options, setOptions] = React.useState(tagdata);

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

  // const getTag = (event) => {
  //   // setInputValue(event.target.value);
  //   // // console.log(inputValue);
  //   // setTagdata(inputValue)
  //   const data = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     tag: inputValueAutocomplete,
  //   };
  //   console.log(data);
  //   axios
  //     .post("http://localhost:5000/Tag", data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       // setTagdata([...tag, response.data]);
  //       console.log(response?.data);
  //       // setTagdata(response?.data);
  //       setInputValue("");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const getTagdata = (tag) => {
    // setInputValue(event.target.value);
    // // console.log(inputValue);
    // setTagdata(inputValue)
    console.log("getTagdata is called");
    const data = {
      id: Math.random().toString(36).substr(2, 9),
      tag: tag,
    };
    // console.log("data", data);
    axios
      .post("http://localhost:5000/Tag", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setTagdata([...tag, response.data]);
        // console.log(response?.data);
        // setTagdata(response?.data);
        setInputValue("");
        // setfilterapi(true)
        // setCreatedTags(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        setValue(newValue);
      }
    } else {
      // Set the selected option when newValue is not an object with inputValue
      setValue(newValue);

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

      setTagNames(newTagNames);
      // setTagNames( newValue.map((item) => item.tag));
    }
  };

  useEffect(() => {
    for (const item of value) {
      if (item.tag && item.tag.startsWith('Add "')) {
        const tag = item.tag.slice(5, -1);
        if (!loggedTags.includes(item.tag)) {
          // console.log("Tag with 'Add':", tag);
          setLoggedTags((prevLoggedTags) => [...prevLoggedTags, item.tag]);
          getTagdata(tag);
          getTagfromAPi();
          // setAnchorEl(null)
        }
      }
    }
  }, [value]);

  // console.log("loggedvalues", loggedTags);

  useEffect(() => {
    if (tagNames.length > 0) {
      console.log(`Fire filter api - ${new Date().toLocaleTimeString()}`);
      // console.log("fire filter api", tagNames);
    }
  }, [tagNames]);

  // useEffect(() => {
  //   for (const item of value) {
  //     if (item.tag && item.tag.startsWith('Add "')) {
  //       const tag = item.tag.slice(5, -1);
  //       if (!loggedTags.includes(item.tag)) {
  //         console.log("Tag with 'Add':", tag);
  //         setLoggedTags((prevLoggedTags) => [...prevLoggedTags, item.tag]);
  //         getTagdata(tag);
  //         getTagfromAPi();
  //       }
  //     }
  //   }

  //   if (tagNames.length > 0) {
  //     console.log("fire filter api", tagNames);
  //   }
  // }, [value, tagNames]);

  const handleinputchageforTag = (newValue) => {
    console.log("inputvhange", newValue);
    const newtag = newValue;
    console.log("inputvhange", newtag);
    // setValue(newValue)
  };

  // console.log("value", value.map(item => item.tag));
  // console.log("value", value);
  // console.log("tagdata", tagdata);
  // console.log("options", options);
  // console.log("value", value);
  // console.log("selectedvalues", selectedTags);
  // console.log("tag array", tagNames);

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

      {/* <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={tesvalue}
        onChange={(event, newValue) => {
          settesValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
        }}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.title}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        style={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} label="Fixed tag" placeholder="Favorites" />
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
              // value={selectedTags}
              onChange={(event, newValue) => {
                handleAddValue(newValue);
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // const {id} = tagdata.some((option)=> option.id)
                const isExisting = options.some(
                  (option) => inputValue === option.tag
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    // id,
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
              // renderOption={(props, option, { selected }) => (
              //   // <li {...props}>
              //   //   <Checkbox
              //   //     sx={{ marginRight: 1 }}
              //   //     // checked={selected}
              //   //     // checked={selected && value.map((tagObj) => tagObj.tag) ? true : false}
              //   //     checked={selected || value.some((tagObj) => tagObj.tag === option.tag)}
              //   //     //  checked={option.tag ? true : false}
              //   //   />
              //   //   {option.tag}
              //   // </li>
              //   <List>
              //   {/* {option.map((item) => ( */}
              //     <ListItem key={option.id} dense button onClick={() => handleToggle(option.id)}>
              //       <Checkbox
              //         edge="start"
              //         checked={option.checked || false}
              //         tabIndex={-1}
              //         disableRipple
              //       />
              //       <ListItemText primary={option.tag} />
              //     </ListItem>
              //   {/* ))} */}
              // </List>

              // )}

              // renderOption={(props, option, { selected }) => (
              //   <li {...props}>
              //     <Checkbox
              //       sx={{ marginRight: 1 }}
              //       checked={selected || (option.tag && option.tag.startsWith('Add "'))}
              //     />
              //     {option.tag}
              //   </li>
              // )}

              // renderOption={(props, option, { selected }) => (
              //   <li {...props}>
              //     <Checkbox
              //       sx={{ marginRight: 1 }}
              //       // checked={selected && tagNames.length > 0 }
              //       checked={selected && value.map((item) => item.id) }
              //     />
              //     {option.tag}
              //   </li>
              // )}
              // renderOption={(props, option) => (
              //   <li {...props}>
              //     <Checkbox
              //       sx={{ marginRight: 1 }}
              //       checked={selectedTags.includes(option.tag) ? true : false}
              //     />
              //     {option.tag}
              //   </li>
              // )}

              // renderOption={(props, option) => (
              //   <li {...props}>
              //     <Checkbox
              //       checked={value.some((val) => val.tag === option.tag)}
              //     />
              //     {option.tag}
              //   </li>
              // )}

              // renderOption={(props, option) => (
              //   <li {...props}>
              //     {option.inputValue ? (
              //       <>
              //         <Checkbox checked={false} />
              //         {option.inputValue}
              //       </>
              //     ) : (
              //       <>
              //         <Checkbox
              //           // checked={value.some((val) => val.tag === option.tag)}
              //           checked={value.some((val) => {
              //             if (val.tag.startsWith('Add "')) {
              //               // Extract the tag name from the format "Add 'tagname'"
              //               const extractedTag = val.tag.match(/^Add "(.*?)"$/);
              //               if (extractedTag) {
              //                 return extractedTag[1] === option.tag;
              //               }
              //             }
              //             return val.tag === option.tag;
              //           })}
              //         />
              //         {option.tag}
              //       </>
              //     )}
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
                            marginRight: "8px",
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

                      {/* <FormControlLabel
                        control={
                          <Checkbox
                            checked={value.some((val) => {
                              if (val.tag.startsWith('Add "')) {
                                const extractedTag =
                                  val.tag.match(/^Add "(.*?)"$/);
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
                        }
                        label={option.tag}
                      /> */}
                    </>
                  )}
                </li>
              )}
              // renderOption={(props, option) => (
              //   <li {...props}>
              //     {option.inputValue ? (
              //       <>
              //         <Checkbox
              //           checked={value.some((val) => val.tag === option.inputValue)}
              //           onChange={() => {
              //             // Handle unchecking a created tag here
              //             const newValue = value.filter((val) => val.tag !== option.inputValue);
              //             setValue(newValue);
              //           }}
              //         />
              //         {option.inputValue}
              //       </>
              //     ) : (
              //       <>
              //         <Checkbox
              //           checked={value.some((val) => {
              //             if (val.tag.startsWith('Add "')) {
              //               const extractedTag = val.tag.match(/^Add "(.*?)"$/);
              //               if (extractedTag) {
              //                 return extractedTag[1] === option.tag;
              //               }
              //             }
              //             return val.tag === option.tag;
              //           })}
              //           onChange={() => {
              //             // Find the existing tag in the value array
              //             const existingTag = value.find((val) => {
              //               if (val.tag.startsWith('Add "')) {
              //                 const extractedTag = val.tag.match(/^Add "(.*?)"$/);
              //                 if (extractedTag) {
              //                   return extractedTag[1] === option.tag;
              //                 }
              //               }
              //               return val.tag === option.tag;
              //             });

              //             if (existingTag) {
              //               // If the tag exists, uncheck it (remove from the value array)
              //               const newValue = value.filter((val) => val !== existingTag);
              //               setValue(newValue);
              //             } else {
              //               // If the tag doesn't exist, check it (add to the value array)
              //               const newValue = [...value, { id: Math.random().toString(36).substr(2, 9), tag: option.tag }];
              //               setValue(newValue);
              //             }
              //           }}
              //         />
              //         {option.tag}
              //       </>
              //     )}
              //   </li>
              // )}
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
