function ControlBar(props) {
  const copyToClipboard = (valueRef) => {
    valueRef.current.select();
    document.execCommand("copy");
    console.log(
      `${valueRef.current.id.toUpperCase()} text copied to clipboard...`
    );
  };

  return (
    <div className="flex flex-col items-center lg:flex-row justify-center mr-4">
      <input
        type="button"
        className="bg-amber-400 text-gray-800 active:bg-amber-500 text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none my-3 mr-3"
        value="Clear"
        onClick={props.clearAllText}
      ></input>
      <input
        type="button"
        className="bg-white text-gray-800 active:bg-gray-300 text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none my-3 mr-3"
        value="Copy Unicode"
        onClick={() => copyToClipboard(props.unicode)}
      ></input>
      <input
        type="button"
        className="bg-white text-gray-800 active:bg-gray-300 text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none my-3 mr-3"
        value="Copy Zawgyi"
        onClick={() => copyToClipboard(props.zawgyi)}
      ></input>
    </div>
  );
}

export default ControlBar;
