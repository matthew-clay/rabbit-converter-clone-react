function ControlBar(props) {
  const copyToClipboard = (valueRef) => {
    valueRef.current.select();
    document.execCommand("copy");
    console.log(
      `${valueRef.current.id.toUpperCase()} text copied to clipboard...`
    );

    const toastAlertTag = document.querySelector("#toast-alert");
    setTimeout(() => {
      toastAlertTag.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      toastAlertTag.style.opacity = "0";
    }, 3000);
  };

  return (
    <div>
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

      <div
        className="relative flex opacity-0 justify-center transition-all"
        id="toast-alert"
      >
        <span className="absolute z-10 bg-blue-400 px-5 py-4 text-white font-semibold select-none rounded-md">
          Text copied to clipboard...
        </span>
      </div>
    </div>
  );
}

export default ControlBar;
