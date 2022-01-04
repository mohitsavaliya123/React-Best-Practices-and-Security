let propertiesList = {
  className: "my-favorite-props ",
  id: "myFav",
  content: "Hello my favourite!"
};
let SmallDiv = props => <div {... props} />;
let mainDiv = < SmallDiv props={propertiesList} />;
