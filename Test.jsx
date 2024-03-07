import React, { useState } from 'react';

const TestComponent = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
    document.documentElement.requestFullscreen(); // Open in full-screen mode
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    document.exitFullscreen(); // Exit full-screen mode
  };

  const handleCopyPaste = (e) => {
    e.preventDefault(); // Prevent default copy-paste behavior
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default right-click behavior
  };

  const handleSubmit = () => {
    // Handle submit logic here
    closeFullScreen();
  };

  return (
    <div>
      {!isFullScreen && <button onClick={openFullScreen}>Start Test</button>}
      {isFullScreen && (
        <div>
          <button onClick={closeFullScreen}>Close</button>
          <form onSubmit={handleSubmit}>
            {/* Your test content here */}
            <input type="text" onCopy={handleCopyPaste} onPaste={handleCopyPaste} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TestComponent;