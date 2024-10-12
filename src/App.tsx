const App = () => {
  const changeBackgroundColor = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
    });

    if (!tab) {
      console.error('No active tab found');
      return;
    }

    const tabId = tab.id;
    chrome.scripting.executeScript({
      target: { tabId: tabId! },
      func: () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const backgroundColor = `#${randomColor}`;
        document.body.style.backgroundColor = backgroundColor;
        console.log(`Changed background color to ${backgroundColor}`);
      },
    });
  };

  return (
    <div className="w-full h-screen bg-yellow-400 flex items-center justify-center">
      <button
        onClick={changeBackgroundColor}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Change Background Color
      </button>
    </div>
  );
};

export default App;
