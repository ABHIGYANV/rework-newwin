// codingTestWindow
let newWindow;

export const openCodingTestWindow = () => {
  newWindow = window.open('coding_test.html', 'Coding Test', 'width=800,height=600');

  // Disable copy-paste
  newWindow.document.oncopy = () => false;
  newWindow.document.onpaste = () => false;

  // Monitor user actions and close tab if any unauthorized action is detected
  newWindow.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
    closeTab();
  });
};

const closeTab = () => {
  // Close the tab
  if (newWindow) {
    newWindow.close();
  }
};
