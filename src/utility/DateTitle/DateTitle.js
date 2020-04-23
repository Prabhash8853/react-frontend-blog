export const handleDate = date => {
  var published_Date = new Date(date);
  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var date_shown =
    monthName[published_Date.getMonth()] + " " + published_Date.getDate();
  return date_shown;
};

export const handleTitleChange = title => {
  if (title) {
    if (title.length >= 70) {
      var title_with_dot = title + ".";
      for (var i = 70; i < title_with_dot.length; i++) {
        if (title_with_dot.charAt(i) == " ") {
          var new_title = title.slice(0, i) + "...";
          return new_title;
        } else if (title_with_dot.charAt(i) == ".") {
          var new_title = title.slice(0, i);
          return new_title;
        }
      }
    } else {
      if (
        title.charAt(title.length) == "?" ||
        title.charAt(title.length) == "!" ||
        title.charAt(title.length) == "."
      ) {
        return title;
      } else {
        return title;
      }
    }
  } else {
    return title;
  }
};

export const handleDescription = desc => {
  if (desc) {
    if (desc.length >= 70) {
      var desc_with_dots = desc + ".";
      for (var i = 70; i < desc_with_dots.length; i++) {
        if (desc_with_dots.charAt(i) == " ") {
          var new_desc = desc.slice(0, i) + "...";
          return new_desc;
        } else if (desc_with_dots.charAt(i) == ".") {
          var new_desc = desc.slice(0, i) + ".";
          return new_desc;
        }
      }
    } else {
      if (
        desc.charAt(desc.length - 1) == "?" ||
        desc.charAt(desc.length - 1) == "!" ||
        desc.charAt(desc.length - 1) == "."
      ) {
        return desc;
      } else {
        return desc + ".";
      }
    }
  } else {
    return desc;
  }
};

export const handleAuthorName = (authorName, authorId) => {
  if (authorName == null) {
    return authorId;
  } else return authorName;
};

export const handleImage = imgSrc => {
  if (imgSrc === undefined) {
    return imgSrc;
  } else {
    var imageURL = imgSrc.indexOf("images");
    var secondHalfURL = imgSrc.slice(imageURL + "images".length);
    var newImageURL =
      imgSrc.slice(0, imageURL + "images".length) + "/medium" + secondHalfURL;
    return newImageURL;
  }
};

export const handleImageMob = imgSrc => {
  if (imgSrc === undefined) {
    return imgSrc;
  } else {
    var imageURL = imgSrc.indexOf("images");
    var secondHalfURL = imgSrc.slice(imageURL + "images".length);
    var newImageURL =
      imgSrc.slice(0, imageURL + "images".length) + "/small" + secondHalfURL;
    return newImageURL;
  }
};
