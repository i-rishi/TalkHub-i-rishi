export const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const downloadFile = (e, originalImage) => {
  e.preventDefault();
  try {
    fetch(originalImage)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;

        const nameSplit = originalImage.split("/").pop();

        a.download = "" + nameSplit + "";
        document.body.append(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) =>
        console.log("error while downloading File", error.message)
      );
  } catch (error) {
    return console.log("error while downloading File", error.message);
  }
};
